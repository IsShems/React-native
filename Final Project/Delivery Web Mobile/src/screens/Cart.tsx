import React, { useEffect, useCallback } from "react";
import { StyleSheet, FlatList, Alert } from "react-native";
import CustomButton from "../components/Unknown/CustomButton";
import { BaseText } from "../components/Unknown/DesignSystem";
import CartItemCard from "../components/Unknown/CartItemCard";
import { useAuth } from "../context/AuthContext";

interface CartProps {
  route: any;
  navigation: any;
}

const Cart: React.FC<CartProps> = ({ route, navigation }) => {
  const { userSettings, setSettings } = useAuth();

  const handleBuy = useCallback(() => {
    if (userSettings && userSettings.cart && userSettings.cart.length > 0) {
      Alert.alert("Order Successful", "Your order has been placed successfully!", [
        { text: "OK", onPress: () => clearCart() },
      ]);
    }
  }, [userSettings]);

  const clearCart = () => {
    if (userSettings) {
      const updatedSettings = { ...userSettings, cart: [] };
      setSettings(updatedSettings);
    }
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity !== 0) {
      if (userSettings && userSettings.cart) {
        const updatedCart = userSettings.cart.map((product) =>
          product.id === productId ? { ...product, quantity: newQuantity } : product
        );

        const updatedSettings = { ...userSettings, cart: updatedCart };

        setSettings(updatedSettings);
      }
    } else {
      removeFromCart(productId);
    }
  };

  const removeFromCart = (productId: number) => {
    if (userSettings && userSettings.cart) {
      const updatedCart = userSettings.cart.filter((product) => product.id !== productId);

      const updatedSettings = { ...userSettings, cart: updatedCart };

      setSettings(updatedSettings);
    }
  };

  return (
    <FlatList
      style={styles.container}
      data={userSettings?.cart || []}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <CartItemCard
          id={item.id}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          photo={item.photo}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
        />
      )}
      ListEmptyComponent={() => (
        <BaseText fontSize={15} alignSelf="center" weight="semiBold" text="No products in cart" />
      )}
      ListFooterComponent={() =>
        userSettings?.cart && userSettings.cart.length > 0 ? (
          <CustomButton
            onPress={handleBuy}
            marginTop={20}
            width={363}
            height={50}
            alignSelf="center"
            borderRadius={10}
            backgroundColor="#0BCE83"
          >
            <BaseText fontSize={15} alignSelf="center" weight="semiBold" text="Buy" color="#FFFFFF" />
          </CustomButton>
        ) : null
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 10,
  },
});

export default Cart;
