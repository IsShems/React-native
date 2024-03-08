import React, { ReactNode, createContext, useContext, useState, useEffect } from "react";
import { Alert } from "react-native";
import { getToken, removeToken, setToken } from "../storageData";
import { Settings } from "../types/Settings";
import { ProductInCart } from "../types/ProductInCart";
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface User {
  email: string;
  password: string;
  repeat?: string;
}

type AuthContextType = {
  users: User[];
  userToken: string | null;
  userSettings: Settings | null; 
  signIn: (user: User) => Promise<void>;
  signUp: (user: User) => Promise<void>;
  signOut: () => Promise<void>;
  setSettings: (settings: Settings) => Promise<void>;
  addToCart: (product: ProductInCart) => Promise<void>; 
};

interface AuthProviderProps {
  children: ReactNode;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthContext = createContext<AuthContextType>({
  users: [],
  userToken: null,
  userSettings: null, 
  signIn: async () => {},
  signUp: async () => {},
  signOut: async () => {},
  setSettings: async () => {},
  addToCart: async () => {},
});

export default function AuthProvider({ children }: AuthProviderProps) {
  const [users, setUsers] = useState<User[]>([]);
  const [userToken, setUserToken] = useState<string | null>(null);
  const [userSettings, setUserSettings] = useState<Settings | null>(null); // Добавлено новое состояние
  const [cart, setCart] = useState<ProductInCart[]>([]);

  const signUp = async (user: User) => {
    const existingUser = users.find((u) => u.email === user.email);

    if (existingUser) {
      Alert.alert("Error", "User already exists");
      return;
    }

    setUsers((prev) => [...prev, user]);
    await setToken();
    let token = await getToken();
    if (token) {
      setUserToken(token);
    
      const newUserSettings: Settings = {
      email: user.email,
      cardDetails: {
        cardNumber: '4747 4747 4747 4746',
        cardHolder: 'Alexandra Smith',
        expirationDate: '07/27',
        cvc: '474',
      },
      deliveryAddress: "Aliyeva 256a", 
      nonContactDelivery: false, 
      cart: [],
    };

    await AsyncStorage.setItem('userSettings', JSON.stringify(newUserSettings));
      setUserSettings(newUserSettings);
    }
  };

  const signIn = async (user: User) => {
    const existingUser = users.find(
      (u) => u.email === user.email && u.password === user.password
    );

    if (existingUser) {
      await setToken();
      let token = await getToken();
      if (token) {
        setUserToken(token);
        
        const newUserSettings: Settings = {
          email: user.email,
          cardDetails: {
            cardNumber: '4747 4747 4747 4746',
            cardHolder: 'Alexandra Smith',
            expirationDate: '07/27',
            cvc: '474',
          },
          deliveryAddress: "Aliyeva 256a", 
          nonContactDelivery: false, 
        };
        await AsyncStorage.setItem('userSettings', JSON.stringify(newUserSettings));
        setUserSettings(newUserSettings);
   
      }
    }
  };

  const signOut = async () => {
    removeToken();
    await AsyncStorage.removeItem('userSettings'); 
    let token = await getToken();
    setUserToken(token || null);
    setUserSettings(null); 
  };

  const setSettings = async (settings: Settings) => {
    if (userToken) {
      await AsyncStorage.setItem('userSettings', JSON.stringify(settings));
      setUserSettings(settings);
    }
  };

  const addToCart = async (product: ProductInCart) => {
    if (userSettings) {
      const currentCart = userSettings.cart || [];

      const existingProduct = currentCart.find((p) => p.id === product.id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        currentCart.push(product);
      }

      const updatedSettings: Settings = {
        ...userSettings,
        cart: currentCart,
      };

      await setSettings(updatedSettings);
    }
  };

  useEffect(() => {
    const loadUserToken = async () => {
      const token = await getToken();
      if (token) {
        setUserToken(token);
        
        const storedSettings = await AsyncStorage.getItem('userSettings');
        if (storedSettings) {
          setUserSettings(JSON.parse(storedSettings));
        }
      }
    };

    loadUserToken();
  }, []);

  const contextValue = { users, userToken, userSettings, signIn, signUp, signOut, setSettings, addToCart };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
