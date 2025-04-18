import { useState, useMemo } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
  TextInput,
} from 'react-native';
import {
  ShoppingCart,
  Minus,
  Plus,
  X,
  Search,
  SlidersHorizontal,
  ChevronDown,
  Check,
} from 'lucide-react-native';

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  subcategory: string;
};

const menuItems: MenuItem[] = [
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
  {
    id: 4,
    name: 'Grilled Octopus',
    description: 'Tender octopus grilled to perfection, served with lemon and olive oil.',
    price: 24.99,
    image: 'https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg',
    category: 'Food',
    subcategory: 'Main Course',
  },
  {
    id: 5,
    name: 'Espresso Martini',
    description: 'A sophisticated blend of vodka, coffee liqueur, and fresh espresso.',
    price: 13.99,
    image: 'https://images.pexels.com/photos/2789328/pexels-photo-2789328.jpeg',
    category: 'Drinks',
    subcategory: 'Cocktails',
  },
  {
    id: 6,
    name: 'Baklava',
    description: 'Layers of phyllo dough filled with chopped nuts and sweetened with syrup.',
    price: 7.99,
    image: 'https://images.pexels.com/photos/7474203/pexels-photo-7474203.jpeg',
    category: 'Desserts',
    subcategory: 'Pastries',
  },
  {
    id: 7,
    name: 'Mediterranean Lamb Chops',
    description: 'Grilled lamb chops marinated in Mediterranean herbs and served with roasted vegetables.',
    price: 32.99,
    image: 'https://images.pexels.com/photos/6941001/pexels-photo-6941001.jpeg',
    category: 'Food',
    subcategory: 'Main Course',
  },
  {
    id: 8,
    name: 'Sangria',
    description: 'Traditional Spanish wine punch with fresh fruits and citrus.',
    price: 11.99,
    image: 'https://images.pexels.com/photos/1232152/pexels-photo-1232152.jpeg',
    category: 'Drinks',
    subcategory: 'Cocktails',
  },
  {
    id: 9,
    name: 'Chocolate Mousse',
    description: 'Rich and creamy chocolate mousse topped with fresh berries.',
    price: 9.99,
    image: 'https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg',
    category: 'Desserts',
    subcategory: 'Cakes',
  },
  {
    id: 10,
    name: 'Mediterranean Mezze Platter',
    description: 'Selection of hummus, baba ganoush, falafel, and pita bread.',
    price: 18.99,
    image: 'https://images.pexels.com/photos/5779364/pexels-photo-5779364.jpeg',
    category: 'Food',
    subcategory: 'Appetizers',
  }
];

export default function MenuScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'name' | 'price' | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [quantity, setQuantity] = useState(1);

  const categories = useMemo(() => {
    return Array.from(new Set(menuItems.map(item => item.category)));
  }, []);

  const filteredItems = useMemo(() => {
    let items = [...menuItems];

    // Apply search filter
    if (searchQuery) {
      items = items.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply category filters
    if (selectedCategories.length > 0) {
      items = items.filter(item => selectedCategories.includes(item.category));
    }

    // Apply sorting
    if (sortBy) {
      items.sort((a, b) => {
        if (sortBy === 'name') {
          return sortOrder === 'asc'
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name);
        } else {
          return sortOrder === 'asc'
            ? a.price - b.price
            : b.price - a.price;
        }
      });
    }

    return items;
  }, [searchQuery, selectedCategories, sortBy, sortOrder]);

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleSort = (type: 'name' | 'price') => {
    if (sortBy === type) {
      setSortOrder(prev => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortBy(type);
      setSortOrder('asc');
    }
  };

  return (
    <View style={styles.container}>
      {/* Search and Filter Header */}
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <Search color="#6B7280" size={20} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search menu..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => setShowFilters(true)}>
          <SlidersHorizontal color="#374151" size={20} />
        </TouchableOpacity>
      </View>

      {/* Menu Items */}
      <ScrollView style={styles.menuList}>
        {filteredItems.map(item => (
          <TouchableOpacity
            key={item.id}
            style={styles.menuItem}
            onPress={() => {
              setSelectedItem(item);
              setQuantity(1);
            }}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <View style={styles.itemContent}>
              <View style={styles.itemHeader}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
              </View>
              <Text style={styles.itemDescription} numberOfLines={2}>
                {item.description}
              </Text>
              <View style={styles.itemFooter}>
                <Text style={styles.itemCategory}>{item.category}</Text>
                <Text style={styles.itemSubcategory}>{item.subcategory}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Filters Modal */}
      <Modal
        visible={showFilters}
        animationType="slide"
        transparent
        onRequestClose={() => setShowFilters(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Filters</Text>
              <TouchableOpacity onPress={() => setShowFilters(false)}>
                <X color="#374151" size={24} />
              </TouchableOpacity>
            </View>

            <View style={styles.filterSection}>
              <Text style={styles.filterTitle}>Sort By</Text>
              <TouchableOpacity
                style={styles.sortButton}
                onPress={() => toggleSort('name')}>
                <Text style={styles.sortButtonText}>
                  Name {sortBy === 'name' && `(${sortOrder.toUpperCase()})`}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.sortButton}
                onPress={() => toggleSort('price')}>
                <Text style={styles.sortButtonText}>
                  Price {sortBy === 'price' && `(${sortOrder.toUpperCase()})`}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.filterSection}>
              <Text style={styles.filterTitle}>Categories</Text>
              {categories.map(category => (
                <TouchableOpacity
                  key={category}
                  style={styles.categoryButton}
                  onPress={() => toggleCategory(category)}>
                  <View
                    style={[
                      styles.checkbox,
                      selectedCategories.includes(category) &&
                        styles.checkboxSelected,
                    ]}>
                    {selectedCategories.includes(category) && (
                      <Check color="#fff" size={16} />
                    )}
                  </View>
                  <Text style={styles.categoryButtonText}>{category}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </Modal>

      {/* Item Detail Modal */}
      <Modal
        visible={!!selectedItem}
        animationType="slide"
        transparent
        onRequestClose={() => setSelectedItem(null)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {selectedItem && (
              <>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setSelectedItem(null)}>
                  <X color="#374151" size={24} />
                </TouchableOpacity>

                <Image
                  source={{ uri: selectedItem.image }}
                  style={styles.detailImage}
                />

                <View style={styles.detailContent}>
                  <Text style={styles.detailName}>{selectedItem.name}</Text>
                  <Text style={styles.detailPrice}>
                    ${selectedItem.price.toFixed(2)}
                  </Text>
                  <Text style={styles.detailDescription}>
                    {selectedItem.description}
                  </Text>

                  <View style={styles.quantityContainer}>
                    <TouchableOpacity
                      onPress={() => setQuantity(Math.max(1, quantity - 1))}
                      style={styles.quantityButton}>
                      <Minus color="#374151" size={20} />
                    </TouchableOpacity>
                    <Text style={styles.quantity}>{quantity}</Text>
                    <TouchableOpacity
                      onPress={() => setQuantity(quantity + 1)}
                      style={styles.quantityButton}>
                      <Plus color="#374151" size={20} />
                    </TouchableOpacity>
                  </View>

                  <TouchableOpacity style={styles.addToCartButton}>
                    <ShoppingCart color="#000" size={20} />
                    <Text style={styles.addToCartText}>
                      Add to Cart - $
                      {(selectedItem.price * quantity).toFixed(2)}
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
    marginLeft: 8,
    fontSize: 16,
  },
  filterButton: {
    padding: 12,
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
  },
  menuList: {
    flex: 1,
  },
  menuItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  itemContent: {
    flex: 1,
    marginLeft: 16,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    flex: 1,
    marginRight: 8,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FACC15',
  },
  itemDescription: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
  itemFooter: {
    flexDirection: 'row',
    marginTop: 8,
  },
  itemCategory: {
    fontSize: 12,
    color: '#374151',
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 8,
  },
  itemSubcategory: {
    fontSize: 12,
    color: '#374151',
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  filterSection: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  filterTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: 12,
  },
  sortButton: {
    paddingVertical: 12,
    marginBottom: 8,
  },
  sortButtonText: {
    fontSize: 16,
    color: '#374151',
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#D1D5DB',
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxSelected: {
    backgroundColor: '#FACC15',
    borderColor: '#FACC15',
  },
  categoryButtonText: {
    fontSize: 16,
    color: '#374151',
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    zIndex: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 8,
  },
  detailImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  detailContent: {
    padding: 16,
  },
  detailName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
  },
  detailPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FACC15',
    marginBottom: 16,
  },
  detailDescription: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 24,
    lineHeight: 24,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  quantityButton: {
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    padding: 12,
  },
  quantity: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 24,
  },
  addToCartButton: {
    backgroundColor: '#FACC15',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
  },
  addToCartText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 12,
  },
});