import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';
import {
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { auth } from '../firebaseConfig';

// Platform detection - safe approach
let Platform;
try {
  Platform = require('react-native').Platform;
} catch (e) {
  Platform = { OS: 'web' };
}

export default function HomeScreen({ user }) {
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      Alert.alert('Success', 'Signed out successfully!');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  const handleSendVerification = async () => {
    try {
      await sendEmailVerification(user);
      Alert.alert('Success', 'Verification email sent! Please check your inbox.');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  const handlePasswordReset = async () => {
    try {
      await sendPasswordResetEmail(auth, user.email);
      Alert.alert('Success', 'Password reset email sent! Please check your inbox.');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>🤖</Text>
        <Text style={styles.title}>XENEX AI</Text>
        <Text style={styles.welcome}>Welcome back!</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Account Details</Text>
        
        <View style={styles.infoRow}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{user.email}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>User ID:</Text>
          <Text style={styles.valueSmall}>{user.uid}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Email Verified:</Text>
          <Text style={[styles.value, user.emailVerified ? styles.verified : styles.notVerified]}>
            {user.emailVerified ? '✅ Yes' : '❌ No'}
          </Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Display Name:</Text>
          <Text style={styles.value}>{user.displayName || 'Not set'}</Text>
        </View>
      </View>

      <View style={styles.actions}>
        {!user.emailVerified && (
          <TouchableOpacity
            style={styles.button}
            onPress={handleSendVerification}
          >
            <Text style={styles.buttonText}>📧 Send Email Verification</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={[styles.button, styles.buttonSecondary]}
          onPress={handlePasswordReset}
        >
          <Text style={styles.buttonText}>🔑 Send Password Reset</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.buttonDanger]}
          onPress={handleSignOut}
        >
          <Text style={styles.buttonText}>🚪 Sign Out</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Created: {new Date(user.metadata.creationTime).toLocaleDateString()}
        </Text>
        <Text style={styles.footerText}>
          Last Sign In: {new Date(user.metadata.lastSignInTime).toLocaleDateString()}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 30,
    backgroundColor: '#2196F3',
  },
  logo: {
    fontSize: 50,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  welcome: {
    fontSize: 16,
    color: '#fff',
  },
  card: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  infoRow: {
    marginBottom: 12,
  },
  label: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  valueSmall: {
    fontSize: 12,
    color: '#333',
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
  },
  verified: {
    color: '#4CAF50',
  },
  notVerified: {
    color: '#F44336',
  },
  actions: {
    padding: 20,
  },
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonSecondary: {
    backgroundColor: '#FF9800',
  },
  buttonDanger: {
    backgroundColor: '#F44336',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#999',
    fontSize: 12,
    marginBottom: 4,
  },
});
