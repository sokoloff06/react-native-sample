import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Platform, StatusBar, ScrollView, SafeAreaView } from 'react-native';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Ionicons } from '@expo/vector-icons';
import analytics from '@react-native-firebase/analytics';

interface ProductDetailScreenProps {
  productId: string;
  onNavigateBack: () => void;
}

export const ProductDetailScreen = ({ productId, onNavigateBack }: ProductDetailScreenProps) => {
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>Product not found</Text>
        <TouchableOpacity onPress={onNavigateBack} style={styles.backButton}>
          <Text style={styles.backText}>Go Back</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
  analytics().logEvent('product_view', {
    id: product.id,
    item: product.name,
    price: product.price,
    color: product.color,
  })
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onNavigateBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>Details</Text>
        <View style={{ width: 24 }} />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={[styles.imageContainer, { backgroundColor: product.color + '1A' }]}>
          <Image source={{ uri: product.image }} style={styles.image} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>${product.price.toFixed(2)}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: product.color }]}
          onPress={() => addToCart(product)}
        >
          <Ionicons name="cart-outline" size={24} color="#FFF" />
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 40) : 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  backButton: {
    padding: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  scrollContent: {
    paddingBottom: 24,
  },
  imageContainer: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  image: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  infoContainer: {
    padding: 24,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#666',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#EEE',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 12,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  errorText: {
    fontSize: 18,
    color: '#FF5E5E',
    textAlign: 'center',
    marginTop: 40,
  },
  backText: {
    color: '#333',
    textAlign: 'center',
    marginTop: 16,
    fontWeight: 'bold',
  },
});
