# XENEX AI Auth - App Store & Play Store Deployment Guide

## 📱 Current Build Status

### Android Build
- **Build ID**: d74075fd-b350-490a-b38f-0eb6a9695bc9
- **Status**: In Progress
- **Platform**: Android
- **Profile**: preview
- **Expected Time**: 5-15 minutes
- **View Progress**: https://expo.dev/accounts/svbh/projects/xenex-auth-mobile/builds/d74075fd-b350-490a-b38f-0eb6a9695bc9

---

## 🎯 Step-by-Step Deployment

### Phase 1: Build Apps (Current)

#### Android APK
```bash
# Build command (already running)
eas build -p android --profile preview

# Check status
eas build:view d74075fd-b350-490a-b38f-0eb6a9695bc9

# When complete, download APK from the link provided
```

#### iOS IPA
```bash
# Build for iOS (run after Android completes)
cd /Users/tusshar/ZeroCost/xenex-auth-mobile
eas build -p ios --profile preview
```

---

### Phase 2: Google Play Store Deployment

#### Step 1: Create Google Play Developer Account
1. Go to: https://play.google.com/console
2. Pay $25 one-time registration fee
3. Create new app "XENEX AI Auth"
4. Set category: Productivity or Communication

#### Step 2: Prepare App Signing
EAS already created a keystore for you! Android will be signed automatically.

#### Step 3: Create Release on Play Store

**App Details:**
- **App Name**: XENEX AI Auth
- **Package Name**: com.xenexai.auth
- **Short Description**: "Secure email/password authentication with Firebase"
- **Full Description**: "XENEX AI Authentication App - Sign up, sign in, email verification, and password reset with Firebase"
- **Screenshots**: (Add 2-5 screenshots showing login/home screens)
- **Icon**: 512x512 PNG (robot emoji: 🤖)
- **Feature Graphic**: 1024x500 PNG

**Pricing & Distribution:**
- **Price**: Free
- **Countries**: All
- **Content Rating**: Everyone

#### Step 4: Upload APK
1. Go to Play Console → App Releases → Create Release
2. Upload the APK you downloaded from EAS
3. Add release notes: "v1.0.0 - Initial release with email/password auth"
4. Submit for review (takes 1-3 hours)

#### Step 5: Publish
Once approved by Google, click "Publish"

---

### Phase 3: Apple App Store Deployment

#### Step 1: Create Apple Developer Account
1. Go to: https://developer.apple.com
2. Pay $99/year for Apple Developer Program
3. Enroll your account
4. Create App ID: `com.xenexai.auth`

#### Step 2: Create App in App Store Connect
1. Go to: https://appstoreconnect.apple.com
2. Click "Apps" → "+" → Create New App
3. **App Name**: XENEX AI Auth
4. **Bundle ID**: com.xenexai.auth
5. **SKU**: xenexai-auth-1

#### Step 3: Set Up Signing
- EAS will handle iOS signing automatically
- You may need to provide Apple Developer credentials to EAS

#### Step 4: Build Production IPA
```bash
cd /Users/tusshar/ZeroCost/xenex-auth-mobile
eas build -p ios --profile production
```

#### Step 5: Upload IPA to TestFlight
```bash
# EAS can submit directly to App Store
eas submit -p ios --latest
```

Or manually upload via Transporter:
1. Download Transporter from Mac App Store
2. Login with Apple ID
3. Drag IPA into Transporter
4. Submit

#### Step 6: Complete App Store Information
- **App Description**: Firebase-powered authentication app for XENEX AI
- **Keywords**: auth, firebase, authentication, email, password
- **Category**: Productivity
- **Content Rating**: Everyone
- **Screenshots**: (Add 5+ screenshots)
- **App Preview**: (Optional - add video demo)

#### Step 7: Submit for Review
Click "Submit for Review" in App Store Connect
- Review time: 24-48 hours typically

---

## 📊 App Details Reference

**App Information:**
- **App Name**: XENEX AI Auth
- **Company**: XENEX AI
- **Package/Bundle ID**: com.xenexai.auth
- **Version**: 1.0.0
- **Firebase Project**: xenexai-b8806

**Features to Highlight:**
- ✅ Email/Password Sign Up
- ✅ Email/Password Sign In
- ✅ Email Verification
- ✅ Password Reset
- ✅ Firebase Authentication
- ✅ Secure AsyncStorage
- ✅ iOS & Android Support

**Firebase Configuration:**
- **Android API Key**: AIzaSyCzlCkphMnEFZCGNcqi5jUAZXwxiOTc6Gc
- **iOS API Key**: AIzaSyBqC5RqXy53EbuIWd3Yi6RprMbVSKbYSiA
- **Web API Key**: AIzaSyC2_9PZQdyWW1a8ZyAdw5Ubr_7xZQDWXME

---

## 🔗 Useful Links

| Resource | Link |
|----------|------|
| EAS Dashboard | https://expo.dev/accounts/vjeai/projects/xenex-auth-mobile |
| Google Play Console | https://play.google.com/console |
| App Store Connect | https://appstoreconnect.apple.com |
| Firebase Console | https://console.firebase.google.com/project/xenexai-b8806 |
| Android Build Status | https://expo.dev/accounts/vjeai/projects/xenex-auth-mobile/builds/d74075fd-b350-490a-b38f-0eb6a9695bc9 |

---

## ⏱️ Timeline Estimate

- **Build Phase**: 10-20 minutes (both platforms)
- **Testing Phase**: 30 minutes (on your devices)
- **Google Play Review**: 1-3 hours
- **App Store Review**: 24-48 hours
- **Total Time**: 2-3 days to both stores live

---

## 💡 Testing Before Submission

### Android
1. Download APK from EAS
2. Transfer to Android device
3. Enable "Unknown Sources" in Settings
4. Install APK
5. Test all features:
   - Sign up new account
   - Sign in
   - Email verification (check inbox)
   - Password reset (check inbox)
   - Profile display
   - Sign out

### iOS
1. Download IPA from EAS
2. Use Xcode or Transporter to install on iPhone
3. Test all features (same as Android)

---

## 🚀 Quick Commands

```bash
# Check Android build status
eas build:view d74075fd-b350-490a-b38f-0eb6a9695bc9

# Start iOS build
cd /Users/tusshar/ZeroCost/xenex-auth-mobile && eas build -p ios --profile preview

# List all builds
eas build:list

# Submit to stores (after building)
eas submit -p android --latest   # Google Play
eas submit -p ios --latest       # App Store

# View logs
eas build:logs d74075fd-b350-490a-b38f-0eb6a9695bc9
```

---

## ❓ FAQ

**Q: How long does the build take?**
A: 5-15 minutes per platform on EAS servers

**Q: Do I need to pay to deploy?**
A: 
- Google Play: $25 one-time (to create developer account)
- Apple App Store: $99/year (Apple Developer Program)

**Q: Can I test before submitting to stores?**
A: Yes! Download the APK/IPA and install on your devices first

**Q: What if the app gets rejected?**
A: EAS and both stores provide detailed rejection reasons. Common issues:
- Broken links or features
- Privacy policy missing
- Content violations
- Incomplete app information

**Q: How do I update the app later?**
A: Update version in app.json, rebuild, and resubmit to stores

---

## 📝 Next Steps

1. ⏳ Wait for Android build to complete (check in 5-10 minutes)
2. 📥 Download APK when ready
3. 🧪 Test on Android device
4. 🍎 Build iOS IPA
5. 🧪 Test on iPhone
6. ✅ Fix any issues found during testing
7. 🎯 Submit both to stores
8. 🎉 Wait for approval and go live!

---

**Good luck with your deployment! 🚀**
