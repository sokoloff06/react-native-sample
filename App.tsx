import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { CartProvider } from './src/context/CartContext';
import { CatalogScreen } from './src/screens/CatalogScreen';
import { CartScreen } from './src/screens/CartScreen';
import { ProductDetailScreen } from './src/screens/ProductDetailScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'catalog' | 'cart' | 'detail'>('catalog');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  const navigateToDetail = (productId: string) => {
    setSelectedProductId(productId);
    setCurrentScreen('detail');
  };

  return (
    <CartProvider>
      {currentScreen === 'catalog' ? (
        <CatalogScreen
          onNavigateToCart={() => setCurrentScreen('cart')}
          onNavigateToDetail={navigateToDetail}
        />
      ) : currentScreen === 'cart' ? (
        <CartScreen onNavigateBack={() => setCurrentScreen('catalog')} />
      ) : (
        <ProductDetailScreen
          productId={selectedProductId!}
          onNavigateBack={() => setCurrentScreen('catalog')}
        />
      )}
      <StatusBar style="auto" />
    </CartProvider>
  );
}
