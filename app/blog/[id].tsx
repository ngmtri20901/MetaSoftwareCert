import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const blogPosts = [
  {
    id: 1,
    title: 'The Art of Mediterranean Cooking',
    content: `Mediterranean cuisine is renowned for its fresh ingredients, bold flavors, and health benefits. At Little Lemon, we take pride in preserving traditional cooking methods while adding our own modern twist.

Our chefs carefully select the finest local ingredients, from sun-ripened tomatoes to freshly caught seafood. Each dish tells a story of centuries-old culinary traditions passed down through generations.

Key Elements of Mediterranean Cooking:
- Fresh, seasonal ingredients
- Olive oil as the primary fat
- Abundant herbs and spices
- Balance of flavors
- Minimal processing

Join us on this culinary journey as we explore the rich tapestry of Mediterranean gastronomy.`,
    image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg',
    author: 'Chef Maria',
    date: '2024-01-15',
  },
  {
    id: 2,
    title: 'Sustainable Dining: Farm to Table',
    content: `At Little Lemon, we believe in the importance of sustainable dining practices. Our farm-to-table approach ensures that you get the freshest ingredients while supporting local farmers and reducing our environmental impact.

We work directly with local farmers who share our commitment to sustainable agriculture. This partnership allows us to offer you seasonal menus that reflect the best of what our region has to offer.

Our Sustainability Initiatives:
- Partnership with local organic farms
- Seasonal menu rotation
- Zero-waste cooking practices
- Composting program
- Eco-friendly packaging

Learn how we're making a difference, one plate at a time.`,
    image: 'https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg',
    author: 'John Smith',
    date: '2024-01-10',
  },
  {
    id: 3,
    title: 'Wine Pairing Guide for Mediterranean Dishes',
    content: `The right wine can elevate your dining experience to new heights. Our sommelier shares expert tips on pairing wines with Mediterranean cuisine.

Whether you're enjoying our fresh seafood, grilled meats, or vegetarian dishes, we have the perfect wine to complement your meal.

Popular Pairings:
- Crisp white wines with seafood
- Full-bodied reds with grilled meats
- Rosé with light appetizers
- Sparkling wines with desserts

Discover the perfect harmony between food and wine at Little Lemon.`,
    image: 'https://images.pexels.com/photos/2702805/pexels-photo-2702805.jpeg',
    author: 'Sarah Wilson',
    date: '2024-01-05',
  },
];

export default function BlogPost() {
  const { id } = useLocalSearchParams();
  const post = blogPosts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Blog post not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: post.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{post.title}</Text>
        <View style={styles.meta}>
          <Text style={styles.author}>{post.author}</Text>
          <Text style={styles.date}>{post.date}</Text>
        </View>
        <Text style={styles.body}>{post.content}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 12,
  },
  meta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  author: {
    fontSize: 16,
    color: '#374151',
    fontWeight: '500',
  },
  date: {
    fontSize: 16,
    color: '#6B7280',
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    color: '#374151',
  },
  error: {
    fontSize: 18,
    color: '#EF4444',
    textAlign: 'center',
    marginTop: 20,
  },
});