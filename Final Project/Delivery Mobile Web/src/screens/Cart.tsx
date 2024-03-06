import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import SearchIcon from "../icons/SearchIcon";
import ProductCard from "../components/Unknown/ProductCard";
import CustomButton from "../components/Unknown/CustomButton";
import { BaseText } from "../components/Unknown/DesignSystem";
import ShoppingCartIcon from "../icons/ShoppingCartIcon";

// interface CartItem {
//   id: number;
//   name: string;
//   price: number;
//   weight: string;
//   country: string;
//   description: string;
//   category: string;
//   photo: string;
// }

interface CartProps {
  route: any;
  navigation: any;
}

const Cart: React.FC<CartProps> = ({ route, navigation }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleShoppingCart = () => {};

  const handleBuy = () => {
    
  };

  return (
    <View>
      
      <View style={styles.container}>
        {/* esli cartproducts.count == 0 knopku ne pokazivat i vivesti tekst empty cart */}
        <CustomButton
          onPress={handleBuy}
          marginTop={60}
          width={363}
          height={50}
          alignSelf="center"
          borderRadius={10}
          backgroundColor="#0BCE83"
        >
          <BaseText
            fontSize={15}
            alignSelf="center"
            weight="semiBold"
            text="Buy"
            color="#FFFFFF"
          />
        </CustomButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 0,
    paddingLeft: 50,
    paddingRight: 50,
    marginTop: 10,
  },
  card: {
    width: 300,
    marginLeft: 10,
    marginTop: 10,
  },
  showButton: {
    position: "absolute",
    right: 10,
    bottom: 15,
  },
});

export default Cart;
