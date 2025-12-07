# 🤖 Android Setup for XENEX AI Authentication

## Firebase Android Configuration Values

Use these values when setting up your Android app in Firebase Console:

### Android package name:
```
com.xenexai.auth
```

### App nickname (optional):
```
XENEX AI Auth Android
```

### Debug signing certificate SHA-1 (optional):
```
(Leave blank for now - needed only for Google Sign-In)
```

---

## Step-by-Step Android Setup in Firebase Console

### Step 1: Register App
1. Go to Firebase Console: https://console.firebase.google.com/
2. Select project: **xenexai-b8806**
3. Click the **Android icon** (⊕ Add app)
4. Enter package name: `com.xenexai.auth`
5. Enter App nickname: `XENEX AI Auth Android`
6. Leave SHA-1 blank for now
7. Click **Register app**

### Step 2: Download google-services.json
1. Click **Download google-services.json**
2. Save the file (you'll need this later for native builds)

### Step 3: Skip SDK Installation
- For Expo apps, we're already using Firebase JS SDK
- Click **Next** to skip this step

### Step 4: Skip Initialization Code
- Already configured in `firebaseConfig.js`
- Click **Next** to skip

### Step 5: Click "Continue to console"
- Your Android app is now registered! ✅

---

## Testing on Android

### Option 1: Expo Go on Android Phone (Easiest)
1. Install **Expo Go** from Google Play Store
2. Make sure your Android phone is on the same WiFi as your computer
3. In terminal, the Expo server should be running
4. Open **Expo Go** app on your Android phone
5. Scan the QR code from the terminal
6. The app will load and you can test authentication!

### Option 2: Android Emulator
```bash
cd /Users/tusshar/ZeroCost/xenex-auth-mobile
npx expo run:android
```

This will:
- Build the app
- Launch Android Emulator (if not already running)
- Install and run your app

**Prerequisites for Android Emulator:**
- Android Studio installed
- Android SDK configured
- At least one Android Virtual Device (AVD) created

---

## Current Firebase Config (Already Set Up)

Your Android Firebase configuration is already in `firebaseConfig.js`:

```javascript
const firebaseConfigAndroid = {
  apiKey: "AIzaSyCzlCkphMnEFZCGNcqi5jUAZXwxiOTc6Gc",
  authDomain: "xenexai-b8806.firebaseapp.com",
  projectId: "xenexai-b8806",
  storageBucket: "xenexai-b8806.firebasestorage.app",
  messagingSenderId: "905133111716",
  appId: "1:905133111716:android:6585a0cd804be124e46931"
};
```

The app automatically uses this config when running on Android! ✅

---

## Building APK for Distribution

### For Testing (APK):
```bash
# Install EAS CLI
npm install -g eas-cli

# Login to Expo
eas login

# Configure project
eas build:configure

# Build APK
eas build -p android --profile preview
```

### For Google Play Store (AAB):
```bash
eas build -p android --profile production
```

The build will be uploaded to Expo servers and you'll get a download link.

---

## Installing APK on Your Phone

1. After build completes, download the APK
2. Transfer to your Android phone
3. Enable "Install from unknown sources" in phone settings
4. Tap the APK to install
5. Open the app and test!

---

## Summary

✅ Package name: `com.xenexai.auth`
✅ Firebase Android app configured  
✅ App already uses correct Android config
✅ Ready to test on Android phone with Expo Go

Just reload the app and test it out!
