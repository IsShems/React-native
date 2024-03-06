import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import CustomButton from "./CustomButton";
import ShoppingCartIcon from "../../icons/ShoppingCartIcon";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  weight: string;
  description: string;
  category: string;
  country: string;
  photo: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  weight,
  description,
  category,
  photo,
}) => {

    const handleItem = async () =>
    {
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
            <View style={styles.buttonContainer}>
            <Text style={styles.priceText}>{`${price} $`}</Text>
           
            </View>
          </View>
        </View>
      </View>
      <View style={styles.line}></View>
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
  },
  whiteComponent: {
    width: 200,
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
    bottom: 30,
    flexShrink: 1, // Добавлено для уменьшения размера текста, если не хватает места
  },
  weightText: {
    fontSize: 12,
    color: "#949494",
    bottom: 10,
    fontWeight: "bold",
  },
  priceText: {
    fontSize: 25,
    bottom: 5,
    fontWeight: "bold",
  },
  line: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginVertical: 9,
  },
});

export default ProductCard;
