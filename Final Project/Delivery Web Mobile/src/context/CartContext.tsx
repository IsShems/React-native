import { createContext, ReactNode, useContext, useState } from 'react';

interface ProductInCart {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  cart: ProductInCart[];
  addToCart: (product: ProductInCart) => void;
  removeFromCart: (productId: number) => void;
}

interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<ProductInCart[]>([]);

  const addToCart = (product: ProductInCart) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
