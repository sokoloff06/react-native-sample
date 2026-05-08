export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  color: string;
  description: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Red Apple',
    price: 1.99,
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=500',
    color: '#FF5E5E',
    description: 'Fresh and crispy red apples, perfect for a healthy snack or baking.',
  },
  {
    id: '2',
    name: 'Banana',
    price: 0.99,
    image: 'https://images.unsplash.com/photo-1603833797131-3c0a18fcb6b1?q=80&w=500',
    color: '#FFD54F',
    description: 'Sweet and energetic bananas, rich in potassium and great for smoothies.',
  },
  {
    id: '3',
    name: 'Orange',
    price: 1.49,
    image: 'https://images.unsplash.com/photo-1547514701-42782101795e?q=80&w=500',
    color: '#FFA726',
    description: 'Juicy and tangy oranges, packed with Vitamin C to boost your immunity.',
  },
  {
    id: '4',
    name: 'Strawberry',
    price: 2.99,
    image: 'https://images.unsplash.com/photo-1518635017498-87f514b751ba?q=80&w=500',
    color: '#E91E63',
    description: 'Delicious and sweet strawberries, perfect for desserts or eating fresh.',
  },
  {
    id: '5',
    name: 'Blueberry',
    price: 3.49,
    image: 'https://images.unsplash.com/photo-1490885578174-acda8905c2c6?q=80&w=500',
    color: '#3F51B5',
    description: 'Antioxidant-rich blueberries, great for breakfast bowls and snacks.',
  },
  {
    id: '6',
    name: 'Kiwi',
    price: 1.79,
    image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=500',
    color: '#8BC34A',
    description: 'Exotic and refreshing kiwis, full of flavor and nutrients.',
  },
];
