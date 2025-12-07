# 🔥 Firebase Setup Instructions for XENEX AI Auth

## Important: Enable Email/Password Authentication

Before testing the app, you MUST enable Email/Password authentication in your Firebase Console:

### Steps to Enable Authentication:

1. **Go to Firebase Console**: https://console.firebase.google.com/

2. **Select your project**: `xenexai-b8806`

3. **Navigate to Authentication**:
   - Click on "Authentication" in the left sidebar
   - Click on the "Sign-in method" tab

4. **Enable Email/Password**:
   - Find "Email/Password" in the list of providers
   - Click on it
   - Toggle the "Enable" switch to ON
   - Click "Save"

5. **Optional: Enable Email Link (passwordless)**:
   - In the same "Email/Password" row
   - Toggle "Email link (passwordless sign-in)" if you want this feature
   - Click "Save"

### Testing the App:

Once authentication is enabled:

1. Open http://localhost:5173 in your browser
2. Enter an email and password (min 6 characters)
3. Click "Sign Up" to create a new account
4. Click "Sign In" to log in with existing credentials
5. Test "Send Email Verification" and "Password Reset" features

### Common Issues:

**Error: "auth/operation-not-allowed"**
- ❌ Email/Password authentication is not enabled
- ✅ Follow steps above to enable it

**Error: "auth/weak-password"**
- ❌ Password is less than 6 characters
- ✅ Use a password with at least 6 characters

**Error: "auth/email-already-in-use"**
- ❌ Account already exists with this email
- ✅ Use "Sign In" instead of "Sign Up"

**Error: "auth/user-not-found"**
- ❌ No account exists with this email
- ✅ Use "Sign Up" to create an account first

### View Registered Users:

After signing up users, you can view them in Firebase Console:
1. Go to "Authentication" → "Users" tab
2. You'll see all registered users with their email, UID, and creation date

### Next Steps:

- ✅ Test web authentication
- 📱 Deploy to Firebase Hosting (see main README.md)
- 🚀 Integrate with React Native for iOS/Android apps
- 🎨 Customize the UI to match XENEX AI branding
