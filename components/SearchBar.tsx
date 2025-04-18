import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Search, X } from 'lucide-react-native';
import { router } from 'expo-router';
import { MenuItem, BlogPost } from '../types';

type SearchBarProps = {
  menuItems: MenuItem[];
  blogPosts: BlogPost[];
};

export default function SearchBar({ menuItems, blogPosts }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filteredMenuItems = menuItems.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  const filteredBlogPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleClear = () => {
    setQuery('');
    setShowSuggestions(false);
  };

  const handleItemPress = useCallback((item: MenuItem) => {
    setShowSuggestions(false);
    router.push({
      pathname: '/(tabs)/menu',
      params: { selectedItemId: item.id },
    });
  }, []);

  const handleBlogPress = useCallback((post: BlogPost) => {
    setShowSuggestions(false);
    router.push({
      pathname: '/blog/[id]',
      params: { id: post.id },
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Search color="#6B7280" size={20} />
        <TextInput
          style={styles.input}
          placeholder="Search dishes, blog posts..."
          value={query}
          onChangeText={(text) => {
            setQuery(text);
            setShowSuggestions(!!text);
          }}
          onFocus={() => setShowSuggestions(!!query)}
        />
        {query.length > 0 && (
          <TouchableOpacity onPress={handleClear}>
            <X color="#6B7280" size={20} />
          </TouchableOpacity>
        )}
      </View>

      {showSuggestions && (query.length > 0) && (
        <View style={styles.suggestionsContainer}>
          <ScrollView style={styles.suggestionsList}>
            {filteredMenuItems.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Menu Items</Text>
                {filteredMenuItems.map((item) => (
                  <TouchableOpacity
                    key={item.id}
                    style={styles.suggestionItem}
                    onPress={() => handleItemPress(item)}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}

            {filteredBlogPosts.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Blog Posts</Text>
                {filteredBlogPosts.map((post) => (
                  <TouchableOpacity
                    key={post.id}
                    style={styles.suggestionItem}
                    onPress={() => handleBlogPress(post)}>
                    <Text style={styles.blogTitle}>{post.title}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}

            {filteredMenuItems.length === 0 && filteredBlogPosts.length === 0 && (
              <Text style={styles.noResults}>No results found</Text>
            )}
          </ScrollView>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    zIndex: 1000,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginHorizontal: 16,
    marginTop: 16,
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 12,
    color: '#1F2937',
  },
  suggestionsContainer: {
    position: 'absolute',
    top: '100%',
    left: 16,
    right: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginTop: 4,
    maxHeight: 300,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  suggestionsList: {
    padding: 8,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#6B7280',
    marginBottom: 8,
    paddingHorizontal: 8,
  },
  suggestionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#F9FAFB',
    marginBottom: 4,
  },
  itemName: {
    fontSize: 16,
    color: '#1F2937',
    flex: 1,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FACC15',
    marginLeft: 8,
  },
  blogTitle: {
    fontSize: 16,
    color: '#1F2937',
  },
  noResults: {
    textAlign: 'center',
    color: '#6B7280',
    padding: 16,
  },
});