import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Fresh Chicken Breast',
    category: 'chicken',
    price: 8.99,
    originalPrice: 10.99,
    unit: 'per lb',
    image: 'https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Premium fresh chicken breast, perfect for grilling, baking, or pan-frying. Sourced from local farms with no antibiotics or hormones.',
    nutritionalInfo: {
      protein: '25g',
      fat: '3g',
      calories: '165'
    },
    inStock: true,
    featured: true,
    rating: 4.8,
    reviews: [
      {
        id: '1',
        user: 'Sarah M.',
        rating: 5,
        comment: 'Incredibly fresh and tender. Perfect for my family meals!',
        date: '2024-01-15'
      },
      {
        id: '2',
        user: 'Mike D.',
        rating: 4,
        comment: 'Good quality, delivered on time.',
        date: '2024-01-10'
      }
    ],
    cuts: ['Whole Breast', 'Cutlets', 'Strips', 'Cubes']
  },
  {
    id: '2',
    name: 'Atlantic Salmon Fillet',
    category: 'seafood',
    price: 15.99,
    unit: 'per lb',
    image: 'https://images.pexels.com/photos/1409050/pexels-photo-1409050.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Wild-caught Atlantic salmon with rich omega-3 fatty acids. Perfect for grilling or baking.',
    nutritionalInfo: {
      protein: '22g',
      fat: '12g',
      calories: '206'
    },
    inStock: true,
    featured: true,
    rating: 4.9,
    reviews: [
      {
        id: '3',
        user: 'Jennifer L.',
        rating: 5,
        comment: 'Best salmon I\'ve ever had! So fresh and flavorful.',
        date: '2024-01-12'
      }
    ]
  },
  {
    id: '3',
    name: 'Premium Beef Ribeye',
    category: 'beef',
    price: 24.99,
    originalPrice: 28.99,
    unit: 'per lb',
    image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-chop-361184.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Grade A ribeye steak with perfect marbling. Aged for 21 days for exceptional tenderness and flavor.',
    nutritionalInfo: {
      protein: '26g',
      fat: '20g',
      calories: '291'
    },
    inStock: true,
    featured: true,
    rating: 4.7,
    reviews: [
      {
        id: '4',
        user: 'Robert K.',
        rating: 5,
        comment: 'Restaurant quality beef at home. Worth every penny!',
        date: '2024-01-08'
      }
    ],
    cuts: ['Whole Steak', 'Thick Cut', 'Thin Cut']
  },
  {
    id: '4',
    name: 'Fresh Prawns',
    category: 'seafood',
    price: 18.99,
    unit: 'per lb',
    image: 'https://images.pexels.com/photos/725997/pexels-photo-725997.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Large, fresh prawns perfect for grilling, frying, or adding to curries. Cleaned and deveined.',
    nutritionalInfo: {
      protein: '20g',
      fat: '1g',
      calories: '85'
    },
    inStock: true,
    featured: false,
    rating: 4.6,
    reviews: []
  },
  {
    id: '5',
    name: 'Whole Chicken',
    category: 'chicken',
    price: 5.99,
    unit: 'per lb',
    image: 'https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Farm-fresh whole chicken, perfect for roasting or cutting into parts. Free-range and hormone-free.',
    nutritionalInfo: {
      protein: '23g',
      fat: '6g',
      calories: '165'
    },
    inStock: true,
    featured: false,
    rating: 4.5,
    reviews: []
  },
  {
    id: '6',
    name: 'Lamb Chops',
    category: 'lamb',
    price: 22.99,
    unit: 'per lb',
    image: 'https://images.pexels.com/photos/299347/pexels-photo-299347.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Tender lamb chops with perfect fat marbling. Ideal for grilling or pan-searing.',
    nutritionalInfo: {
      protein: '25g',
      fat: '21g',
      calories: '294'
    },
    inStock: true,
    featured: false,
    rating: 4.8,
    reviews: []
  }
];

export const categories = [
  { id: 'all', name: 'All Products', icon: '🥩' },
  { id: 'chicken', name: 'Chicken', icon: '🐔' },
  { id: 'beef', name: 'Beef', icon: '🥩' },
  { id: 'seafood', name: 'Seafood', icon: '🐟' },
  { id: 'lamb', name: 'Lamb', icon: '🐑' },
  { id: 'pork', name: 'Pork', icon: '🐷' }
];