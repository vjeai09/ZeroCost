# 🧪 Authentication Test Suite

Automated tests for all Firebase Authentication features.

## Tests Included

✅ **User Sign Up** - Creates new user with email/password
✅ **Authentication State** - Verifies auth state persistence
✅ **Email Verification** - Sends verification email
✅ **Sign Out** - Logs out user
✅ **Sign In** - Logs in existing user
✅ **Wrong Password Error** - Tests error handling
✅ **Password Reset** - Sends password reset email
✅ **Duplicate Email Error** - Tests duplicate account prevention
✅ **Weak Password Error** - Tests password validation
✅ **Cleanup** - Deletes test user

## How to Run Tests

```bash
npm test
```

## What the Tests Do

1. **Creates a test user** with a unique email (timestamp-based)
2. **Tests all authentication features** in sequence
3. **Validates error handling** for common scenarios
4. **Cleans up** by deleting the test user
5. **Reports results** with pass/fail counts

## Test Output

The tests will show:
- ✅ Green checkmarks for passing tests
- ❌ Red X for failing tests
- 📧 Email notifications sent
- 📊 Final summary with pass/fail counts

## Note

The test will:
- Create a user like: `test-1733578912345@xenexai.com`
- Send actual verification and reset emails
- Delete the test user at the end
- Exit with code 0 if all pass, 1 if any fail
