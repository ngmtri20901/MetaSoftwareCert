import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import SearchBar from '../../components/SearchBar'; // Ensure the file exists at this path or adjust the path accordingly

const blogPosts = [
  {
    id: 1,
    title: 'The Art of Mediterranean Cooking',
    excerpt: 'Discover the secrets behind our authentic Mediterranean recipes...',
    content: 'Full blog post content here...',
    image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg',
    author: 'Chef Maria',
    date: '2024-01-15',
  },
  {
    id: 2,
    title: 'Sustainable Dining: Farm to Table',
    excerpt: 'How we source our ingredients locally...',
    content: 'Full blog post content here...',
    image: 'https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg',
    author: 'John Smith',
    date: '2024-01-10',
  },
  {
    id: 3,
    title: 'Wine Pairing Guide for Mediterranean Dishes',
    excerpt: 'Expert tips on pairing wines with our menu...',
    content: 'Full blog post content here...',
    image: 'https://images.pexels.com/photos/2702805/pexels-photo-2702805.jpeg',
    author: 'Sarah Wilson',
    date: '2024-01-05',
  },
];

const menuItems = [
  {
    id: 1,
    name: 'Greek Salad',
    description: 'Fresh mixed greens, tomatoes, cucumbers, red onions, and feta cheese with our house-made Greek dressing.',
    price: 12.99,
    image: 'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg',
    category: 'Food',
    subcategory: 'Appetizers',
  },
  {
    id: 2,
    name: 'Tiramisu',
    description: 'Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cream.',
    price: 8.99,
    image: 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg',
    category: 'Desserts',
    subcategory: 'Cakes',
  },
  {
    id: 3,
    name: 'Mediterranean Pasta',
    description: 'Fresh pasta tossed with olive oil, garlic, cherry tomatoes, and Mediterranean herbs.',
    price: 16.99,
    image: 'https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg',
    category: 'Food',
    subcategory: 'Main Course',
  },
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <SearchBar menuItems={menuItems} blogPosts={blogPosts} />
      
      <View style={styles.hero}>
        <Image
          source={{ uri: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg' }}
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
            source={{ uri: 'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg' }}
            style={styles.specialsImage}
          />
          <Text style={styles.specialsTitle}>Greek Salad</Text>
          <Text style={styles.specialsPrice}>$12.99</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Latest Blog Posts</Text>
        {blogPosts.map((post) => (
          <View key={post.id} style={styles.blogCard}>
            <Image source={{ uri: post.image }} style={styles.blogImage} />
            <View style={styles.blogContent}>
              <Text style={styles.blogTitle}>{post.title}</Text>
              <Text style={styles.blogExcerpt}>{post.excerpt}</Text>
              <View style={styles.blogMeta}>
                <Text style={styles.blogAuthor}>{post.author}</Text>
                <Text style={styles.blogDate}>{post.date}</Text>
              </View>
            </View>
          </View>
        ))}
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
    marginTop: 16,
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
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  blogImage: {
    width: '100%',
    height: 200,
  },
  blogContent: {
    padding: 16,
  },
  blogTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  blogExcerpt: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 12,
  },
  blogMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  blogAuthor: {
    fontSize: 14,
    color: '#374151',
    fontWeight: '500',
  },
  blogDate: {
    fontSize: 14,
    color: '#6B7280',
  },
});