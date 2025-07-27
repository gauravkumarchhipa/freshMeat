export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  unit: string;
  image: string;
  description: string;
  nutritionalInfo: {
    protein: string;
    fat: string;
    calories: string;
  };
  inStock: boolean;
  featured: boolean;
  rating: number;
  reviews: Review[];
  cuts?: string[];
}

export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedCut?: string;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity: number, selectedCut?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
}