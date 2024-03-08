import { StyleSheet, View, ImageBackground } from "react-native";
import BackDrop from "../components/Unknown/BackDrop";
import { BaseText } from "../components/Unknown/DesignSystem";
import CustomButton from "../components/Unknown/CustomButton";
import Layout from "../components/Layouts/Layout";
import React, { useState } from "react";
import { ProductInCart } from "../types/ProductInCart";
import { useAuth } from "../context/AuthContext";


interface ItemProps {
  route?: any;
  navigation?: any;
}

export default function Item({ route, navigation }: ItemProps) {
  const { productData } = route.params;
  const [isButtonActive, setButtonActive] = useState(false); 
  const { userSettings, addToCart } = useAuth();

  const handleShoppingCart = () => {
    const productInCart: ProductInCart = {
      id: productData.id,
      email: userSettings?.email || '', 
      name: productData.name,
      price: productData.price,
      quantity: 1, 
      photo: productData.photo,
    };
    console.log('Cart Contents:', productInCart);
    addToCart(productInCart);
  
    
    setButtonActive(true);
    setTimeout(() => {
      setButtonActive(false);
    }, 300);
  };
  


  return (
    <Layout backgroundColor="#A259FF">
      <ImageBackground
        source={{ uri: productData.photo }}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <BackDrop
          height={564}
          backgroundColor="#F6F5F5"  
          borderRadius={30}
          marginTop={160}
        >
          <View style={styles.overlay}>
            <BaseText
              text={productData.name}
              marginTop={10}
              fontSize={25}
              color="#2D0C57"
              weight="semiBold700"
            />
            <BaseText
              marginTop={0}
              text={`${productData.price.toFixed(2)}$ / piece`}
              fontSize={30}
              color="#2D0C57"
              weight="semiBold700"
            />
            <BaseText
              marginTop={10}
              text={`~${productData.weight}r / piece`}
              fontSize={18}
              numberOfLines={1}
              color="#0BCE83"
              weight="normal"
            />
            <BaseText
              text={`${productData.country}`}
              marginTop={40}
              fontSize={25}
              color="#2D0C57"
              weight="semiBold700"
            />
            <BaseText
              marginTop={10}
              text={productData.description}
              fontSize={18}
              numberOfLines={1}
              color="#9586A8"
              weight="normal"
            />
            <CustomButton
              onPress={handleShoppingCart}
              width={350}
              marginTop={80}
              height={50}
              backgroundColor={isButtonActive ? "#03633e" : "#0BCE83"}
              borderRadius={8}
            >
              <BaseText
                text="ADD TO CART"
                fontSize={16}
                alignSelf="center"
                color="#FFFFFF"
                weight="semiBold"
              />
            </CustomButton>
          </View>
        </BackDrop>
      </ImageBackground>
    </Layout>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    width: "100%",
    height: 180,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.1)", 
    padding: 20,
    borderRadius: 30,
  },
});
