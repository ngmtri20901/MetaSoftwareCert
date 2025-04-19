import { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';
import { Settings, History, CreditCard, LogOut, Mail } from 'lucide-react-native';

export default function AccountScreen() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.trim() && email.includes('@')) {
      Alert.alert(
        'Thank you for subscribing!',
        'You will now receive our latest updates and offers.',
        [{ text: 'OK', onPress: () => setIsSubscribed(true) }]
      );
    } else {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg' }}
          style={styles.headerImage}
        />
        <View style={styles.welcomeContainer}>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/6941041/pexels-photo-6941041.jpeg' }}
            style={styles.profileImage}
          />
          <Text style={styles.welcomeTitle}>Welcome to Little Lemon</Text>
          <Text style={styles.welcomeSubtitle}>
            Join our community for exclusive offers and updates
          </Text>
        </View>
      </View>

      {!isSubscribed ? (
        <View style={styles.subscribeSection}>
          <Text style={styles.subscribeTitle}>Subscribe to Our Newsletter</Text>
          <Text style={styles.subscribeText}>
            Stay updated with our latest dishes and special offers
          </Text>
          <View style={styles.inputContainer}>
            <Mail color="#6B7280" size={20} />
            <TextInput
              style={styles.input}
              placeholder="Enter your email address"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <TouchableOpacity
            style={[styles.subscribeButton, !email && styles.buttonDisabled]}
            onPress={handleSubscribe}
            disabled={!email}>
            <Text style={styles.subscribeButtonText}>Subscribe</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.subscribedMessage}>
          <Text style={styles.subscribedText}>
            You're subscribed! Check your email for updates.
          </Text>
        </View>
      )}

      <View style={styles.section}>
        <TouchableOpacity style={styles.menuItem}>
          <Settings size={24} color="#374151" />
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <History size={24} color="#374151" />
          <Text style={styles.menuText}>Order History</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <CreditCard size={24} color="#374151" />
          <Text style={styles.menuText}>Payment Methods</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.menuItem, styles.logoutButton]}>
          <LogOut size={24} color="#EF4444" />
          <Text style={[styles.menuText, styles.logoutText]}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    position: 'relative',
    height: 200,
  },
  headerImage: {
    width: '100%',
    height: '100%',
    opacity: 0.3,
  },
  welcomeContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 16,
    borderWidth: 3,
    borderColor: '#FACC15',
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 8,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: '#4B5563',
    textAlign: 'center',
  },
  subscribeSection: {
    padding: 20,
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    margin: 16,
  },
  subscribeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
  },
  subscribeText: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 8,
    fontSize: 16,
    color: '#1F2937',
  },
  subscribeButton: {
    backgroundColor: '#FACC15',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  subscribeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  subscribedMessage: {
    padding: 20,
    backgroundColor: '#F0FDF4',
    borderRadius: 12,
    margin: 16,
  },
  subscribedText: {
    fontSize: 16,
    color: '#065F46',
    textAlign: 'center',
  },
  section: {
    padding: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  menuText: {
    fontSize: 16,
    marginLeft: 16,
    color: '#374151',
  },
  logoutButton: {
    marginTop: 20,
    borderBottomWidth: 0,
  },
  logoutText: {
    color: '#EF4444',
  },
});