# 📱 XENEX AI Authentication - Mobile App

React Native mobile app with Firebase authentication for iOS and Android.

## Features

✅ Email/Password Sign Up
✅ Email/Password Sign In
✅ Sign Out
✅ Email Verification
✅ Password Reset
✅ Cross-platform (iOS & Android)
✅ Persistent authentication with AsyncStorage
✅ Platform-specific Firebase configs

## Prerequisites

- Node.js installed
- For iOS: macOS with Xcode
- For Android: Android Studio with emulator
- Expo Go app on your phone (for testing)

## Installation

```bash
cd xenex-auth-mobile
npm install
```

## Running the App

### Option 1: Expo Go (Easiest - Test on Real Device)

1. Install Expo Go on your phone:
   - iOS: https://apps.apple.com/app/expo-go/id982107779
   - Android: https://play.google.com/store/apps/details?id=host.exp.exponent

2. Start the development server:
```bash
npm start
```

3. Scan the QR code with:
   - iOS: Camera app
   - Android: Expo Go app

### Option 2: iOS Simulator (Mac Only)

```bash
npm run ios
```

### Option 3: Android Emulator

```bash
npm run android
```

### Option 4: Web Browser

```bash
npm run web
```

## Building for Production

### Install EAS CLI

```bash
npm install -g eas-cli
```

### Configure EAS Build

```bash
eas login
eas build:configure
```

### Build for Android (APK)

```bash
# Build APK for testing
eas build -p android --profile preview

# Build AAB for Google Play Store
eas build -p android --profile production
```

### Build for iOS (IPA)

```bash
# Build for TestFlight
eas build -p ios --profile preview

# Build for App Store
eas build -p ios --profile production
```

## Project Structure

```
xenex-auth-mobile/
├── App.js                 # Main app component with auth state
├── firebaseConfig.js      # Firebase configuration
├── screens/
│   ├── AuthScreen.js      # Login/Register screen
│   └── HomeScreen.js      # User profile/dashboard
├── app.json               # Expo configuration
└── package.json           # Dependencies
```

## Firebase Configuration

The app uses platform-specific Firebase configs:
- **Android**: Uses Android app config
- **iOS**: Uses iOS app config
- **Web**: Uses Web app config

All configs are in `firebaseConfig.js`.

## Testing the App

### Test Sign Up
1. Open the app
2. Enter email: `test@xenexai.com`
3. Enter password: `test123456`
4. Tap "Sign Up"

### Test Sign In
1. Switch to "Sign In" mode
2. Enter credentials
3. Tap "Sign In"

### Test Email Verification
1. After signing in, tap "Send Email Verification"
2. Check your email and click the link

### Test Sign Out
1. Tap "Sign Out" button
2. You'll return to the login screen

## Common Issues

### Android Build Errors
- Make sure Android Studio is installed
- Check that `ANDROID_HOME` environment variable is set
- Run `npx expo doctor` to diagnose issues

### iOS Build Errors
- Make sure Xcode is installed (Mac only)
- Run `pod install` in the `ios` folder if it exists
- Check that Xcode Command Line Tools are installed

### Firebase Errors
- Verify Firebase project settings
- Check that Email/Password auth is enabled in Firebase Console
- Ensure correct API keys in `firebaseConfig.js`

## Deployment

### Google Play Store
1. Build production AAB: `eas build -p android --profile production`
2. Download the AAB file
3. Upload to Google Play Console

### Apple App Store
1. Build production IPA: `eas build -p ios --profile production`
2. Download the IPA file
3. Upload to App Store Connect via Xcode or Transporter

## Next Steps

- [ ] Add social authentication (Google, Facebook, Apple)
- [ ] Add profile editing
- [ ] Add password change functionality
- [ ] Add biometric authentication
- [ ] Add push notifications
- [ ] Integrate with XENEX AI backend

## Support

For issues, check:
- Expo documentation: https://docs.expo.dev
- Firebase documentation: https://firebase.google.com/docs
- React Native documentation: https://reactnative.dev

## License

MIT
