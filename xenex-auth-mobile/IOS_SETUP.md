# 🍎 iOS Setup for XENEX AI Authentication

## Firebase iOS Configuration Values

Use these values when setting up your iOS app in Firebase Console:

### 1. Register App

**Apple bundle ID:**
```
com.xenexai.auth
```

**App nickname (optional):**
```
XENEX AI Auth iOS
```

**App Store ID (optional):**
```
(Leave blank for now - you'll get this after submitting to App Store)
```

---

## Step-by-Step iOS Setup in Firebase Console

### Step 1: Register App
1. Go to Firebase Console: https://console.firebase.google.com/
2. Select project: **xenexai-b8806**
3. Click the **iOS icon** (⊕ Add app)
4. Enter Bundle ID: `com.xenexai.auth`
5. Enter App nickname: `XENEX AI Auth iOS`
6. Leave App Store ID blank for now
7. Click **Register app**

### Step 2: Download GoogleService-Info.plist
1. Click **Download GoogleService-Info.plist**
2. Save the file (you'll need this later for native builds)

### Step 3: Skip SDK Installation
- For Expo apps, we're already using Firebase JS SDK
- Click **Next** to skip this step

### Step 4: Skip Initialization Code  
- Already configured in `firebaseConfig.js`
- Click **Next** to skip

### Step 5: Click "Continue to console"
- Your iOS app is now registered! ✅

---

## Testing on iOS

### Option 1: Expo Go on iPhone (Easiest)
1. Install **Expo Go** from App Store
2. Make sure your iPhone is on the same WiFi as your Mac
3. In terminal, the Expo server should be running
4. Open **Expo Go** app on your iPhone
5. Scan the QR code from the terminal
6. The app will load and you can test authentication!

### Option 2: iOS Simulator (Mac Required)
```bash
cd /Users/tusshar/ZeroCost/xenex-auth-mobile
npx expo run:ios
```

This will:
- Install Xcode dependencies
- Build the app
- Launch iOS Simulator
- Run your app

---

## Current Firebase Config (Already Set Up)

Your iOS Firebase configuration is already in `firebaseConfig.js`:

```javascript
const firebaseConfigIOS = {
  apiKey: "AIzaSyBqC5RqXy53EbuIWd3Yi6RprMbVSKbYSiA",
  authDomain: "xenexai-b8806.firebaseapp.com",
  projectId: "xenexai-b8806",
  storageBucket: "xenexai-b8806.firebasestorage.app",
  messagingSenderId: "905133111716",
  appId: "1:905133111716:ios:53332fa8c0488b06e46931"
};
```

The app automatically uses this config when running on iOS! ✅

---

## Quick Test

1. **Reload the app** (press 'r' in terminal or shake your phone)
2. The error should be fixed!
3. Try signing up with: `test@xenexai.com` / `test123456`

---

## Building for TestFlight / App Store

When you're ready to deploy:

```bash
# Install EAS CLI
npm install -g eas-cli

# Login to Expo
eas login

# Configure project
eas build:configure

# Build for iOS
eas build -p ios --profile production
```

This will create an IPA file you can upload to App Store Connect.

---

## Summary

✅ Bundle ID: `com.xenexai.auth`
✅ Firebase iOS app configured
✅ App already uses correct iOS config
✅ Ready to test on iPhone with Expo Go

Just reload the app and the Platform error should be fixed!
