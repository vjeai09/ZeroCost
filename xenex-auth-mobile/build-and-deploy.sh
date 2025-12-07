#!/bin/bash

# XENEX AI Auth - EAS Build Setup Script
# This script guides you through building and deploying the app

echo "================================"
echo "XENEX AI Auth - EAS Build Setup"
echo "================================"
echo ""

# Step 1: Check if logged in
echo "Step 1: Checking EAS login status..."
eas whoami

# Step 2: If not logged in, prompt to login
if [ $? -ne 0 ]; then
    echo ""
    echo "❌ Not logged in to EAS"
    echo "📝 Please run: eas login"
    echo "   Email: vijay.lingagiri@gmail.com"
    exit 1
fi

echo ""
echo "✅ Logged in successfully!"
echo ""

# Step 3: Navigate to project
cd /Users/tusshar/ZeroCost/xenex-auth-mobile || exit

echo "Step 2: Building Android APK..."
echo "This will take 5-10 minutes..."
echo ""

# Build Android
eas build -p android --profile preview

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Android build complete!"
    echo "📥 Check the link above to download the APK"
    echo ""
    echo "Step 3: Building iOS IPA..."
    echo "This will take 5-10 minutes..."
    echo ""
    
    # Build iOS
    eas build -p ios --profile preview
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "✅ iOS build complete!"
        echo "📥 Check the link above to download the IPA"
        echo ""
        echo "================================"
        echo "✅ All builds completed!"
        echo "================================"
        echo ""
        echo "Next steps:"
        echo "1. Download the APK and IPA files from the links above"
        echo "2. Install on Android and iOS devices"
        echo "3. Test the app thoroughly"
        echo "4. If satisfied, submit to App Store and Play Store"
    fi
else
    echo "❌ Android build failed"
    exit 1
fi
