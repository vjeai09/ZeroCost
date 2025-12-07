// Firebase Authentication Test Suite for XENEX AI
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signOut,
  deleteUser
} from 'firebase/auth';
import { firebaseConfig } from '../config.js';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Test configuration
const TEST_EMAIL = `test-${Date.now()}@xenexai.com`;
const TEST_PASSWORD = 'TestPass123456';
const INVALID_PASSWORD = 'wrong';

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m'
};

// Test results tracking
let testsPassed = 0;
let testsFailed = 0;
let currentUser = null;

// Utility functions
function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

function logTest(testName) {
  log(`\n📝 Testing: ${testName}`, colors.cyan);
}

function logSuccess(message) {
  testsPassed++;
  log(`✅ PASS: ${message}`, colors.green);
}

function logError(message, error) {
  testsFailed++;
  log(`❌ FAIL: ${message}`, colors.red);
  if (error) {
    log(`   Error: ${error.message}`, colors.red);
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Test functions
async function testSignUp() {
  logTest('User Sign Up (createUserWithEmailAndPassword)');
  
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, TEST_EMAIL, TEST_PASSWORD);
    currentUser = userCredential.user;
    
    if (currentUser && currentUser.email === TEST_EMAIL) {
      logSuccess(`User created with email: ${currentUser.email}`);
      logSuccess(`User UID: ${currentUser.uid}`);
      return true;
    } else {
      logError('User creation returned unexpected result');
      return false;
    }
  } catch (error) {
    logError('Failed to create user', error);
    return false;
  }
}

async function testAuthState() {
  logTest('Authentication State Persistence');
  
  try {
    const user = auth.currentUser;
    
    if (user && user.email === TEST_EMAIL) {
      logSuccess(`Auth state maintained: ${user.email}`);
      logSuccess(`Email verified status: ${user.emailVerified}`);
      return true;
    } else {
      logError('Auth state not maintained correctly');
      return false;
    }
  } catch (error) {
    logError('Failed to check auth state', error);
    return false;
  }
}

async function testEmailVerification() {
  logTest('Email Verification (sendEmailVerification)');
  
  try {
    if (!currentUser) {
      logError('No user signed in to send verification');
      return false;
    }
    
    await sendEmailVerification(currentUser);
    logSuccess('Email verification sent successfully');
    log(`   📧 Verification email sent to: ${currentUser.email}`, colors.yellow);
    return true;
  } catch (error) {
    logError('Failed to send email verification', error);
    return false;
  }
}

async function testSignOut() {
  logTest('User Sign Out (signOut)');
  
  try {
    await signOut(auth);
    
    await sleep(500); // Wait for auth state to update
    
    if (!auth.currentUser) {
      logSuccess('User signed out successfully');
      return true;
    } else {
      logError('User still signed in after signOut');
      return false;
    }
  } catch (error) {
    logError('Failed to sign out', error);
    return false;
  }
}

async function testSignIn() {
  logTest('User Sign In (signInWithEmailAndPassword)');
  
  try {
    const userCredential = await signInWithEmailAndPassword(auth, TEST_EMAIL, TEST_PASSWORD);
    currentUser = userCredential.user;
    
    if (currentUser && currentUser.email === TEST_EMAIL) {
      logSuccess(`User signed in: ${currentUser.email}`);
      return true;
    } else {
      logError('Sign in returned unexpected result');
      return false;
    }
  } catch (error) {
    logError('Failed to sign in', error);
    return false;
  }
}

async function testWrongPassword() {
  logTest('Error Handling: Wrong Password');
  
  try {
    // First sign out
    await signOut(auth);
    await sleep(500);
    
    // Try to sign in with wrong password
    await signInWithEmailAndPassword(auth, TEST_EMAIL, INVALID_PASSWORD);
    
    // If we reach here, the test failed
    logError('Sign in succeeded with wrong password (should have failed)');
    return false;
  } catch (error) {
    if (error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') {
      logSuccess('Correctly rejected wrong password');
      logSuccess(`Error code: ${error.code}`);
      return true;
    } else {
      logError('Wrong error code returned', error);
      return false;
    }
  }
}

async function testPasswordReset() {
  logTest('Password Reset (sendPasswordResetEmail)');
  
  try {
    await sendPasswordResetEmail(auth, TEST_EMAIL);
    logSuccess('Password reset email sent successfully');
    log(`   📧 Reset email sent to: ${TEST_EMAIL}`, colors.yellow);
    return true;
  } catch (error) {
    logError('Failed to send password reset email', error);
    return false;
  }
}

async function testDuplicateSignUp() {
  logTest('Error Handling: Duplicate Email');
  
  try {
    // Try to create user with same email
    await createUserWithEmailAndPassword(auth, TEST_EMAIL, TEST_PASSWORD);
    
    // If we reach here, the test failed
    logError('Duplicate sign up succeeded (should have failed)');
    return false;
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      logSuccess('Correctly rejected duplicate email');
      logSuccess(`Error code: ${error.code}`);
      return true;
    } else {
      logError('Wrong error code returned', error);
      return false;
    }
  }
}

async function testWeakPassword() {
  logTest('Error Handling: Weak Password');
  
  const weakEmail = `weak-${Date.now()}@xenexai.com`;
  const weakPassword = '123'; // Less than 6 characters
  
  try {
    await createUserWithEmailAndPassword(auth, weakEmail, weakPassword);
    
    // If we reach here, the test failed
    logError('Weak password accepted (should have failed)');
    return false;
  } catch (error) {
    if (error.code === 'auth/weak-password') {
      logSuccess('Correctly rejected weak password');
      logSuccess(`Error code: ${error.code}`);
      return true;
    } else {
      logError('Wrong error code returned', error);
      return false;
    }
  }
}

async function cleanupTestUser() {
  logTest('Cleanup: Deleting Test User');
  
  try {
    // Sign in again to delete the user
    const userCredential = await signInWithEmailAndPassword(auth, TEST_EMAIL, TEST_PASSWORD);
    const user = userCredential.user;
    
    await deleteUser(user);
    logSuccess('Test user deleted successfully');
    return true;
  } catch (error) {
    logError('Failed to delete test user (you may need to delete manually)', error);
    log(`   Email to delete: ${TEST_EMAIL}`, colors.yellow);
    return false;
  }
}

// Main test runner
async function runTests() {
  log('\n🔥 XENEX AI - Firebase Authentication Test Suite', colors.blue);
  log('=' .repeat(60), colors.blue);
  log(`Test Email: ${TEST_EMAIL}`, colors.yellow);
  log(`Test Password: ${TEST_PASSWORD}`, colors.yellow);
  log('=' .repeat(60), colors.blue);
  
  const startTime = Date.now();
  
  // Run tests in sequence
  await testSignUp();
  await sleep(1000);
  
  await testAuthState();
  await sleep(1000);
  
  await testEmailVerification();
  await sleep(1000);
  
  await testSignOut();
  await sleep(1000);
  
  await testSignIn();
  await sleep(1000);
  
  await testWrongPassword();
  await sleep(1000);
  
  await testPasswordReset();
  await sleep(1000);
  
  await testDuplicateSignUp();
  await sleep(1000);
  
  await testWeakPassword();
  await sleep(1000);
  
  // Cleanup
  await cleanupTestUser();
  
  const endTime = Date.now();
  const duration = ((endTime - startTime) / 1000).toFixed(2);
  
  // Print results
  log('\n' + '=' .repeat(60), colors.blue);
  log('📊 Test Results', colors.blue);
  log('=' .repeat(60), colors.blue);
  log(`✅ Tests Passed: ${testsPassed}`, colors.green);
  log(`❌ Tests Failed: ${testsFailed}`, colors.red);
  log(`⏱️  Duration: ${duration}s`, colors.cyan);
  log('=' .repeat(60), colors.blue);
  
  if (testsFailed === 0) {
    log('\n🎉 All tests passed! Authentication is working perfectly.', colors.green);
    log('✅ Ready to move to the next step!', colors.green);
    process.exit(0);
  } else {
    log('\n⚠️  Some tests failed. Please review the errors above.', colors.red);
    process.exit(1);
  }
}

// Run the tests
runTests().catch((error) => {
  log('\n💥 Test suite crashed:', colors.red);
  console.error(error);
  process.exit(1);
});
