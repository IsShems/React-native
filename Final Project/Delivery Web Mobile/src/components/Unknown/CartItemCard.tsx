import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import CustomButton from "./CustomButton";
import { BaseText } from "./DesignSystem";

interface CartItemCardProps {
  id: number;
  name: string;
  price: number;
  quantity: number;
  photo: string;
  updateQuantity: (id: number, newQuantity: number) => void;
  removeFromCart: (id: number) => void;
}

const CartItemCard: React.FC<CartItemCardProps> = ({
  id,
  name,
  price,
  quantity,
  photo,
  updateQuantity,
  removeFromCart,
}) => {
  const handleIncrease = () => {
    updateQuantity(id, quantity + 1);
  };

  const handleDecrease = () => {
    updateQuantity(id, Math.max(quantity - 1, 0));
  };

  return (
    <View style={styles.container}>
      <View style={styles.whiteComponent}>
        <View style={styles.content}>
          <View style={styles.circle}>
            <Image source={{ uri: photo }} style={styles.image} />
          </View>
          <View style={styles.textContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>{name}</Text>
            </View>
            <BaseText weight="semiBold" fontSize={18} text={`${price * quantity} $`}/>
            <View style={styles.buttonContainer}>
              <CustomButton onPress={handleDecrease} width={30} height={30}>
                <BaseText weight="semiBold" text="-" fontSize={18}/>
              </CustomButton>
              <Text style={styles.quantityText}>{quantity}</Text>
              <CustomButton onPress={handleIncrease} width={30} height={30}>
                <BaseText weight="semiBold" text="+" fontSize={18} />
              </CustomButton>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginLeft: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    top: 15,
  },
  whiteComponent: {
    width: 300,
    height: 100,
    top: 1,
    left: 35,
    borderWidth: 1,
    borderColor: "transparent",
    flexDirection: "row",
  },
  image: {
    flex: 1,
    width: 180,
    height: 150,
    borderRadius: 8,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  circle: {
    width: 50,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 50,
    bottom: 12,
  },
  textContainer: {
    flex: 1,
    marginLeft: 30,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    bottom: 25,
    flexShrink: 1,
  },
  priceText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  quantityText: {
    fontSize: 18,
    bottom: 5,
    fontWeight: "bold",
  },
  line: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginVertical: 9,
  },
});

export default CartItemCard;
