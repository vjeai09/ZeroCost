# XENEX AI - Authentication Test App

A simple Firebase authentication app based on the Firebase Quickstart examples.

## Features

✅ Email/Password Registration
✅ Email/Password Sign In
✅ Sign Out
✅ Email Verification
✅ Password Reset

## Setup & Run

1. Install dependencies:
```bash
cd xenex-auth-app
npm install
```

2. Run development server:
```bash
npm run dev
```

The app will open at `http://localhost:5173`

## How to Test

1. **Sign Up**: Enter a new email and password, click "Sign Up"
2. **Sign In**: Enter your credentials and click "Sign In"
3. **Email Verification**: After signing in, click "Send Email Verification" (check your email)
4. **Password Reset**: Enter your email and click "Send Password Reset Email"
5. **Sign Out**: When signed in, the "Sign In" button becomes "Sign Out"

## Firebase Configuration

Uses XENEX AI Firebase project with multi-platform support:
- Web: `xenexai-b8806.web.app`
- Android: Native Android app
- iOS: Native iOS app

## Build for Production

```bash
npm run build
```

The production build will be in the `dist/` folder.

## Deploy to Firebase Hosting

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

## Next Steps

After testing web authentication:
- Deploy to Firebase Hosting
- Add React Native wrapper for mobile apps (iOS/Android)
- Integrate with your XENEX AI application
