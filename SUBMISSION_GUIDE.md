# XENEX AI Auth - Play Store & App Store Submission

## ✅ You Have Both Accounts!

Great! Since you already have both developer accounts, we can submit directly to the stores.

---

## 📋 What You Need to Provide

Before we submit, gather this information:

### **For Google Play Store (Android)**

```
Email: (Your Google account email)
```

You'll need to:
1. Create Service Account Key for automated submission

### **For Apple App Store (iOS)**

```
Apple ID: (Your Apple Developer account email)
Apple Team ID: (found in: https://developer.apple.com/account/#/membership)
App-Specific Password: (create in: https://appleid.apple.com/account/manage → Security → App Passwords)
```

---

## 🚀 Full Submission Process

### Step 1: Wait for Android Build ✓ (In Progress)
```bash
# Check status every minute
cd /Users/tusshar/ZeroCost/xenex-auth-mobile
eas build:view d74075fd-b350-490a-b38f-0eb6a9695bc9
```

**When status shows "finished", continue...**

---

### Step 2: Build Both for Production (After Android Done)

#### Android - Production Build
```bash
cd /Users/tusshar/ZeroCost/xenex-auth-mobile
eas build -p android --profile production
```

#### iOS - Production Build
```bash
cd /Users/tusshar/ZeroCost/xenex-auth-mobile
eas build -p ios --profile production
```

**Note:** Both will run in parallel, taking 10-20 minutes each.

---

### Step 3: Create Google Play Service Account

**For automated Android submission:**

1. Go to: https://console.cloud.google.com
2. Create new project: "XENEX AI Auth"
3. Enable Google Play API
4. Create Service Account:
   - IAM & Admin → Service Accounts
   - Create Service Account → "eas-build"
   - Grant "Editor" role
5. Create JSON Key:
   - Keys → Add Key → Create new key → JSON
   - Download and save as: `google-play-key.json`
6. Upload to Google Play Console:
   - Settings → Developer Account → API Access
   - Link Service Account

**OR use interactive submission:**
```bash
eas submit -p android --latest
# Follow prompts to authenticate with your Google account
```

---

### Step 4: Create Apple App Specific Password

1. Go to: https://appleid.apple.com
2. Sign in with your Apple ID
3. Security → App Passwords
4. Select "App Store Connect"
5. Copy the generated password (example: `abcd-efgh-ijkl-mnop`)
6. Save this password - you'll need it during submission

---

### Step 5: Submit to Play Store (Android)

```bash
cd /Users/tusshar/ZeroCost/xenex-auth-mobile

# Option A: Interactive submission (easier)
eas submit -p android --latest

# When prompted:
# - Select your Google account
# - Authenticate when browser opens
# - Choose internal test track first, then production

# Option B: With service account key
eas submit -p android --latest \
  --key ./google-play-key.json \
  --track production
```

**After submission:**
- ✅ Goes to Play Store Console
- ⏱️ Internal review: 1-3 hours
- ✅ Then goes live automatically if approved

---

### Step 6: Submit to App Store (iOS)

```bash
cd /Users/tusshar/ZeroCost/xenex-auth-mobile

# Interactive submission
eas submit -p ios --latest

# When prompted:
# - Apple ID: (your Apple email)
# - Apple Team ID: (from developer.apple.com account)
# - App-Specific Password: (from appleid.apple.com)
```

**After submission:**
- ✅ Goes to App Store Connect
- ⏱️ Initial review: 24-48 hours
- ✅ Apple team reviews functionality
- ✅ Then approved or rejected

---

## 📊 Complete Timeline

```
NOW:          Android build in progress (10 mins more)
+10 min:      ✅ Android build done
+10 min:      Start iOS build
+20 min:      ✅ Both builds complete
+20 min:      ✅ Submit Android to Play Store
+20 min:      ✅ Submit iOS to App Store
+1-3 hrs:     ✅ Android goes live on Play Store
+24-48 hrs:   ✅ iOS goes live on App Store
```

---

## 🎯 Exact Commands to Run (In Order)

### Command 1: Check Android Build Status
```bash
cd /Users/tusshar/ZeroCost/xenex-auth-mobile
eas build:view d74075fd-b350-490a-b38f-0eb6a9695bc9
# Wait for Status: finished
```

### Command 2: Build for Production (Both)
```bash
cd /Users/tusshar/ZeroCost/xenex-auth-mobile

# Android production
eas build -p android --profile production

# (In another terminal, after Android starts)
# iOS production
eas build -p ios --profile production
```

### Command 3: Submit Android
```bash
cd /Users/tusshar/ZeroCost/xenex-auth-mobile
eas submit -p android --latest
```

### Command 4: Submit iOS
```bash
cd /Users/tusshar/ZeroCost/xenex-auth-mobile
eas submit -p ios --latest
```

---

## 🔐 Security Notes

**Never commit these to git:**
```bash
# Add to .gitignore
google-play-key.json
apple-secrets.json
```

**Keep these safe:**
- Google Play Service Account Key (JSON file)
- Apple App-Specific Password
- Apple Team ID

---

## ⚠️ Important App Info for Stores

**Google Play Store:**
- Package Name: `com.xenexai.auth`
- Category: Productivity
- Content Rating: Everyone

**Apple App Store:**
- Bundle ID: `com.xenexai.auth`
- Category: Productivity
- Age Rating: 4+

---

## 📱 Testing Before Submission (Optional)

If you want to test the production builds on your devices:

```bash
# Download APK from Android build link
# Transfer to Android phone and install

# For iOS, use Testflight:
# 1. Submit to TestFlight
# 2. Invite yourself as tester
# 3. Install from TestFlight app on iPhone
# 4. Test for 2-3 days
# 5. Then submit to App Store
```

---

## ✅ Checklist Before Submission

- [ ] Android build status: finished
- [ ] iOS build status: finished
- [ ] Google Play Service Account created
- [ ] Apple App-Specific Password generated
- [ ] Apple Team ID noted
- [ ] No crashes on test device (optional)
- [ ] All features working (signup, login, email, logout)
- [ ] App icons and screenshots ready

---

## 🎉 After Submission

### Google Play Store
- Check: https://play.google.com/console/u/0/developers/account
- Status appears in "Releases"
- App goes live in 1-3 hours if approved

### Apple App Store
- Check: https://appstoreconnect.apple.com
- Status appears in "TestFlight" then "App Store"
- App goes live in 24-48 hours if approved

---

## 📞 Support Links

| Service | Link |
|---------|------|
| EAS Submit Docs | https://docs.expo.dev/eas/submit/ |
| Google Play Help | https://support.google.com/googleplay/android-developer |
| Apple App Store Guide | https://developer.apple.com/app-store/submission/ |
| Firebase Console | https://console.firebase.google.com/project/xenexai-b8806 |

---

## 🚀 You're Ready!

Your app is built and ready. Follow the commands above and both apps will be live within 1-3 days!

**Next step: Check if Android build is finished, then run the production builds.** 💪
