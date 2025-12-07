# XENEX AI Auth App - Deployment Guide

## Step 1: Login to EAS

Run this command in your terminal:

```bash
cd /Users/tusshar/ZeroCost/xenex-auth-mobile
eas login
```

**When prompted:**
- Email or username: `vijay.lingagiri@gmail.com`
- Password: Enter your Expo account password

---

## Step 2: Build for Android (Google Play Store)

After logging in, build the Android APK:

```bash
cd /Users/tusshar/ZeroCost/xenex-auth-mobile
eas build -p android --profile preview
```

This will:
- Build a preview APK (ready to test locally)
- Show you a download link when complete
- Download the APK to test on Android devices

**Expected output:**
```
✅ Build complete!
📥 Download: https://expo.dev/accounts/...
```

---

## Step 3: Build for iOS (App Store)

After Android is done, build the iOS IPA:

```bash
cd /Users/tusshar/ZeroCost/xenex-auth-mobile
eas build -p ios --profile preview
```

This will:
- Build a preview IPA (ready to test locally)
- Show you a download link when complete
- Download the IPA to test on iOS devices

---

## Step 4: Test Downloaded Apps

### Test Android APK:
1. Download the APK from the link provided
2. Transfer to Android device or emulator
3. Install: `adb install xenex-auth-mobile.apk`
4. Open app and test:
   - Sign up with email
   - Sign in
   - Email verification
   - Password reset
   - Sign out

### Test iOS IPA:
1. Download the IPA from the link provided
2. Use Xcode to install on iPhone:
   - Xcode > Devices and Simulators
   - Drag IPA into devices list
3. Open app and test all features

---

## Step 5: Deploy to App Stores (Production)

**For Google Play Store:**
1. Create Google Play Developer account
2. Set up app signing:
   ```bash
   eas build -p android --profile production
   ```
3. Upload AAB file to Google Play Console

**For Apple App Store:**
1. Create Apple Developer account
2. Set up provisioning profiles
3. Build for production:
   ```bash
   eas build -p ios --profile production
   ```
4. Upload IPA to App Store Connect

---

## Current App Details

**App Name:** XENEX AI Auth  
**Package (Android):** com.xenexai.auth  
**Bundle ID (iOS):** com.xenexai.auth  
**Firebase Project:** xenexai-b8806  
**Firebase Auth:** Email/Password enabled  

**Firebase Config Files:**
- Android: `google-services.json` ✅
- iOS: `GoogleService-Info.plist` ✅

---

## Quick Commands Reference

```bash
# Login to EAS
eas login

# Build Android
eas build -p android --profile preview

# Build iOS
eas build -p ios --profile preview

# Check build status
eas build:list

# View build logs
eas build:view <BUILD_ID>

# Logout
eas logout
```

---

## Troubleshooting

**Issue:** "Could not parse Expo config"
- Check `app.json` is valid JSON
- Verify Firebase config files exist

**Issue:** "Build failed"
- Run `npm install` to ensure all dependencies installed
- Check internet connection
- Try building again in 5 minutes

**Issue:** "App crashes on launch"
- Firebase config might be wrong
- Check `firebaseConfig.js` has correct credentials
- Clear app cache and reinstall

---

**Next Steps:**
1. Run `eas login` and enter your credentials
2. Run `eas build -p android --profile preview`
3. Wait for build to complete (5-10 minutes)
4. Download and test the APK
5. Repeat for iOS if needed
