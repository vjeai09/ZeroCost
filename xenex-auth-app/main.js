import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { firebaseConfig } from './config';

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();

// Get DOM elements
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const signInButton = document.getElementById('quickstart-sign-in');
const signUpButton = document.getElementById('quickstart-sign-up');
const passwordResetButton = document.getElementById('quickstart-password-reset');
const verifyEmailButton = document.getElementById('quickstart-verify-email');
const signInStatus = document.getElementById('quickstart-sign-in-status');
const accountDetails = document.getElementById('quickstart-account-details');

/**
 * Handles the sign in button press.
 */
function toggleSignIn() {
  if (auth.currentUser) {
    // User is signed in, so sign out
    signOut(auth);
  } else {
    const email = emailInput.value;
    const password = passwordInput.value;
    
    if (email.length < 4) {
      alert('Please enter an email address.');
      return;
    }
    if (password.length < 6) {
      alert('Please enter a password (min 6 characters).');
      return;
    }
    
    // Sign in with email and password
    signInWithEmailAndPassword(auth, email, password)
      .catch(function (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else if (errorCode === 'auth/user-not-found') {
          alert('No user found with this email.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        signInButton.disabled = false;
      });
  }
  signInButton.disabled = true;
}

/**
 * Handles the sign up button press.
 */
function handleSignUp() {
  const email = emailInput.value;
  const password = passwordInput.value;
  
  if (email.length < 4) {
    alert('Please enter an email address.');
    return;
  }
  if (password.length < 6) {
    alert('Please enter a password (min 6 characters).');
    return;
  }
  
  // Create user with email and password
  createUserWithEmailAndPassword(auth, email, password)
    .then(function(userCredential) {
      alert('Account created successfully! Welcome to XENEX AI!');
      console.log('User created:', userCredential.user);
    })
    .catch(function (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === 'auth/weak-password') {
        alert('The password is too weak.');
      } else if (errorCode === 'auth/email-already-in-use') {
        alert('This email is already registered. Please sign in instead.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
}

/**
 * Sends an email verification to the user.
 */
function sendVerificationEmailToUser() {
  sendEmailVerification(auth.currentUser)
    .then(function () {
      alert('Email Verification Sent!');
    })
    .catch(function(error) {
      alert('Error sending verification email: ' + error.message);
    });
}

/**
 * Sends a password reset email.
 */
function sendPasswordReset() {
  const email = emailInput.value;
  
  if (email.length < 4) {
    alert('Please enter your email address first.');
    return;
  }
  
  sendPasswordResetEmail(auth, email)
    .then(function () {
      alert('Password Reset Email Sent!');
    })
    .catch(function (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === 'auth/invalid-email') {
        alert('Invalid email address.');
      } else if (errorCode === 'auth/user-not-found') {
        alert('No user found with this email.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
}

// Listen for auth state changes
onAuthStateChanged(auth, function (user) {
  verifyEmailButton.disabled = true;
  
  if (user) {
    // User is signed in
    const displayName = user.displayName;
    const email = user.email;
    const emailVerified = user.emailVerified;
    const uid = user.uid;
    
    signInStatus.textContent = 'Signed in';
    signInButton.textContent = 'Sign out';
    accountDetails.textContent = JSON.stringify({
      uid: uid,
      email: email,
      emailVerified: emailVerified,
      displayName: displayName
    }, null, 2);
    
    if (!emailVerified) {
      verifyEmailButton.disabled = false;
    }
  } else {
    // User is signed out
    signInStatus.textContent = 'Signed out';
    signInButton.textContent = 'Sign in';
    accountDetails.textContent = 'null';
  }
  signInButton.disabled = false;
});

// Add event listeners
signInButton.addEventListener('click', toggleSignIn, false);
signUpButton.addEventListener('click', handleSignUp, false);
verifyEmailButton.addEventListener('click', sendVerificationEmailToUser, false);
passwordResetButton.addEventListener('click', sendPasswordReset, false);
