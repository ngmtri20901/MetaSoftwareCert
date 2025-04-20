import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { router } from 'expo-router';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '@/graphql/mutations/login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react-native';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const [login, { loading }] = useMutation(LOGIN_USER, {
    onCompleted: async (data) => {
      await AsyncStorage.setItem('authToken', data.login.authToken);
      router.replace('/(tabs)');
    },
    onError: (error) => {
      setError(error.message);
    },
  });

  const handleLogin = () => {
    if (!username || !password) {
      setError('Please fill in all fields');
      return;
    }
    login({ variables: { username, password } });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled">
        <View style={styles.header}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4' }}
            style={styles.headerImage}
          />
          <View style={styles.overlay} />
          <Text style={styles.title}>Welcome Back</Text>
          <Text style={styles.subtitle}>Sign in to continue</Text>
        </View>

        <View style={styles.form}>
          {error ? <Text style={styles.error}>{error}</Text> : null}

          <View style={styles.inputContainer}>
            <Mail color="#6B7280" size={20} />
            <TextInput
              style={styles.input}
              placeholder="Username"
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputContainer}>
            <Lock color="#6B7280" size={20} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={styles.eyeIcon}>
              {showPassword ? (
                <EyeOff color="#6B7280" size={20} />
              ) : (
                <Eye color="#6B7280" size={20} />
              )}
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={[styles.button, loading && styles.buttonDisabled]}
            onPress={handleLogin}
            disabled={loading}>
            <Text style={styles.buttonText}>
              {loading ? 'Signing in...' : 'Sign In'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.skipButton}
            onPress={() => router.replace('/(tabs)')}>
            <Text style={styles.skipButtonText}>Continue as Guest</Text>
          </TouchableOpacity>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => router.push('/register')}>
              <Text style={styles.footerLink}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    height: 240,
    justifyContent: 'flex-end',
    padding: 24,
  },
  headerImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#E5E7EB',
  },
  form: {
    flex: 1,
    padding: 24,
  },
  error: {
    color: '#EF4444',
    marginBottom: 16,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    paddingVertical: 16,
    marginLeft: 12,
    fontSize: 16,
  },
  eyeIcon: {
    padding: 8,
  },
  button: {
    backgroundColor: '#FACC15',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  skipButton: {
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 16,
  },
  skipButtonText: {
    fontSize: 16,
    color: '#6B7280',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  footerText: {
    fontSize: 16,
    color: '#6B7280',
  },
  footerLink: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FACC15',
    marginLeft: 8,
  },
});