#!/bin/bash

# XENEX AI Auth - Fast Submission Script
# Run this once Android build is finished

PROJECT_DIR="/Users/tusshar/ZeroCost/xenex-auth-mobile"
cd "$PROJECT_DIR"

echo "=========================================="
echo "XENEX AI Auth - Fast Submission"
echo "=========================================="
echo ""
echo "Step 1: Check Android build status..."
echo ""

# Check status
STATUS=$(eas build:view d74075fd-b350-490a-b38f-0eb6a9695bc9 2>&1 | grep -i "Status" | head -1)

if [[ $STATUS == *"finished"* ]]; then
    echo "✅ Android build FINISHED!"
    echo ""
    echo "Step 2: Building for production..."
    echo ""
    
    # Build Android production
    echo "Building Android production APK..."
    eas build -p android --profile production &
    ANDROID_PID=$!
    
    # Build iOS production
    echo "Building iOS production IPA..."
    eas build -p ios --profile production &
    iOS_PID=$!
    
    # Wait for both
    wait $ANDROID_PID $iOS_PID
    
    echo ""
    echo "✅ Both builds complete!"
    echo ""
    echo "Step 3: Submit to stores..."
    echo ""
    
    # Submit to Play Store
    echo "Submitting to Google Play Store..."
    eas submit -p android --latest
    
    # Submit to App Store
    echo "Submitting to Apple App Store..."
    eas submit -p ios --latest
    
    echo ""
    echo "=========================================="
    echo "✅ SUBMITTED TO BOTH STORES!"
    echo "=========================================="
    echo ""
    echo "Timeline:"
    echo "  1-3 hours:  Android live on Play Store"
    echo "  24-48 hrs:  iOS live on App Store"
    echo ""
    echo "Monitor at:"
    echo "  Android: https://play.google.com/console"
    echo "  iOS:     https://appstoreconnect.apple.com"
    
elif [[ $STATUS == *"in progress"* ]]; then
    echo "⏳ Android build still in progress"
    echo ""
    echo "Check again in 5 minutes..."
    echo ""
    echo "Or visit:"
    echo "https://expo.dev/accounts/svbh/projects/xenex-auth-mobile/builds/d74075fd-b350-490a-b38f-0eb6a9695bc9"
else
    echo "❌ Android build status unknown"
    echo ""
    echo "Check logs:"
    echo "eas build:view d74075fd-b350-490a-b38f-0eb6a9695bc9"
fi
