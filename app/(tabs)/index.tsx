import { View, Text, Image, ScrollView, StyleSheet, AppRegistry } from 'react-native';

// Define a placeholder App component


export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.hero}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4' }}
          style={styles.heroImage}
        />
        <View style={styles.heroContent}>
          <Text style={styles.title}>Little Lemon</Text>
          <Text style={styles.subtitle}>Mediterranean Cuisine</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Today's Specials</Text>
        <View style={styles.specialsCard}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1548940740-204726a19be3' }}
            style={styles.specialsImage}
          />
          <Text style={styles.specialsTitle}>Greek Salad</Text>
          <Text style={styles.specialsPrice}>$12.99</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Latest Blog Posts</Text>
        <View style={styles.blogCard}>
          <Text style={styles.blogTitle}>The Art of Mediterranean Cooking</Text>
          <Text style={styles.blogExcerpt}>
            Discover the secrets behind our authentic Mediterranean recipes...
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  hero: {
    position: 'relative',
    height: 200,
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    marginTop: 4,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  specialsCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  specialsImage: {
    width: '100%',
    height: 200,
  },
  specialsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 16,
  },
  specialsPrice: {
    fontSize: 16,
    color: '#FACC15',
    paddingHorizontal: 16,
    paddingBottom: 16,
    fontWeight: 'bold',
  },
  blogCard: {
    backgroundColor: '#f3f4f6',
    padding: 16,
    borderRadius: 8,
  },
  blogTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  blogExcerpt: {
    fontSize: 14,
    color: '#4b5563',
  },
});