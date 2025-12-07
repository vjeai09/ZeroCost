#!/bin/bash

# Check Android build status and download when ready

BUILD_ID="d74075fd-b350-490a-b38f-0eb6a9695bc9"
PROJECT="@svbh/xenex-auth-mobile"

echo "================================"
echo "XENEX AI Auth - Build Monitor"
echo "================================"
echo ""
echo "Checking Android build status..."
echo "Build ID: $BUILD_ID"
echo ""

while true; do
    STATUS=$(eas build:view $BUILD_ID 2>/dev/null | grep -i "status" | head -1 | awk '{print $NF}')
    
    if [ "$STATUS" = "finished" ]; then
        echo ""
        echo "✅ BUILD COMPLETE!"
        echo ""
        echo "View full details:"
        echo "eas build:view $BUILD_ID"
        echo ""
        echo "Download APK from:"
        echo "https://expo.dev/accounts/svbh/projects/xenex-auth-mobile/builds/$BUILD_ID"
        echo ""
        break
    elif [ "$STATUS" = "errored" ]; then
        echo ""
        echo "❌ BUILD FAILED!"
        echo ""
        echo "Check logs:"
        echo "eas build:view $BUILD_ID"
        break
    else
        echo "Status: $STATUS"
        echo "Checking again in 30 seconds..."
        sleep 30
    fi
done

echo ""
echo "After download, run:"
echo ""
echo "To test Android:"
echo "  adb install xenex-auth-mobile.apk"
echo ""
echo "To build iOS:"
echo "  cd /Users/tusshar/ZeroCost/xenex-auth-mobile"
echo "  eas build -p ios --profile preview"
