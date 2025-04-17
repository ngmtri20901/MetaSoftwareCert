import { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import { ShoppingCart, Minus, Plus, X } from 'lucide-react-native';

const menuItems = [
  {
    id: 1,
    name: 'Greek Salad',
    description: 'The famous greek salad of crispy lettuce, peppers, olives, and Chicago.',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe',
    category: 'Weekly Special',
  },
  {
    id: 2,
    name: 'Lemon Dessert',
    description: 'Homemade butternuts Italian Lemon ricotta cake.',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1514517604298-cf80e0fb7f1e',
    category: 'Weekly Special',
  },
  {
    id: 3,
    name: 'Bruschetta',
    description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f',
    category: 'Weekly Special',
  },
  {
    id: 4,
    name: 'Grilled Fish',
    description: 'Fish marinated in fresh orange and lemon juice. Grilled with orange and lemon wedges.',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62',
    category: 'Weekly Special',
  },
];

export default function MenuScreen() {
  const [selectedDish, setSelectedDish] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleDishPress = (dish) => {
    setSelectedDish(dish);
    setQuantity(1);
  };

  const handleClose = () => {
    setSelectedDish(null);
    setQuantity(1);
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.restaurantName}>Little Lemon</Text>
        <Text style={styles.location}>Chicago</Text>
        <Text style={styles.description}>
          We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
        </Text>
        <TouchableOpacity style={styles.orderButton}>
          <Text style={styles.orderButtonText}>Order Take Away</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cartHeader}>
        <Text style={styles.sectionTitle}>Weekly Special</Text>
        <TouchableOpacity style={styles.cartButton}>
          <ShoppingCart color="#000" size={24} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.menuList}>
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.menuItem}
            onPress={() => handleDishPress(item)}>
            <View style={styles.menuItemContent}>
              <View style={styles.menuItemInfo}>
                <Text style={styles.menuItemName}>{item.name}</Text>
                <Text style={styles.menuItemDescription} numberOfLines={2}>
                  {item.description}
                </Text>
                <Text style={styles.menuItemPrice}>${item.price.toFixed(2)}</Text>
              </View>
              <Image source={{ uri: item.image }} style={styles.menuItemImage} />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Modal
        visible={selectedDish !== null}
        animationType="slide"
        transparent={true}
        onRequestClose={handleClose}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
              <X color="#000" size={24} />
            </TouchableOpacity>

            {selectedDish && (
              <>
                <Image
                  source={{ uri: selectedDish.image }}
                  style={styles.modalImage}
                />
                <Text style={styles.modalTitle}>{selectedDish.name}</Text>
                <Text style={styles.modalDescription}>
                  {selectedDish.description}
                </Text>
                <Text style={styles.modalPrice}>
                  ${selectedDish.price.toFixed(2)}
                </Text>

                <View style={styles.quantityContainer}>
                  <TouchableOpacity
                    style={styles.quantityButton}
                    onPress={decrementQuantity}>
                    <Minus color="#000" size={20} />
                  </TouchableOpacity>
                  <Text style={styles.quantityText}>{quantity}</Text>
                  <TouchableOpacity
                    style={styles.quantityButton}
                    onPress={incrementQuantity}>
                    <Plus color="#000" size={20} />
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  style={styles.addToCartButton}
                  onPress={handleClose}>
                  <Text style={styles.addToCartText}>
                    Add for ${(selectedDish.price * quantity).toFixed(2)}
                  </Text>
                </TouchableOpacity>
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
    backgroundColor: '#495E57',
    padding: 20,
  },
  restaurantName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FACC15',
    marginBottom: 4,
  },
  location: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 16,
    lineHeight: 22,
  },
  orderButton: {
    backgroundColor: '#FACC15',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  orderButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  cartButton: {
    padding: 8,
  },
  menuList: {
    flex: 1,
  },
  menuItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  menuItemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuItemInfo: {
    flex: 1,
    marginRight: 16,
  },
  menuItemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  menuItemDescription: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
    lineHeight: 20,
  },
  menuItemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  menuItemImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
    maxHeight: '80%',
  },
  closeButton: {
    position: 'absolute',
    right: 20,
    top: 20,
    zIndex: 1,
  },
  modalImage: {
    width: '100%',
    height: 200,
    borderRadius: 16,
    marginBottom: 16,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  modalDescription: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 16,
    lineHeight: 24,
  },
  modalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 16,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  quantityButton: {
    backgroundColor: '#F3F4F6',
    padding: 8,
    borderRadius: 8,
  },
  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 16,
  },
  addToCartButton: {
    backgroundColor: '#FACC15',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  addToCartText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});