import React from "react";
import { View, Text, StyleSheet, Image, ViewStyle, ImageStyle, TextStyle } from "react-native";

interface CategoryCardProps {
  name: string;
  description: string;
  imageUrl: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, description, imageUrl }) => {
  return (
    <View style={styles.container2}>
      <View style={styles.box}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.text}>{description}</Text>
      </View>
    </View>
  );
};

interface Styles {
  container2: ViewStyle;
  box: ViewStyle;
  image: ImageStyle;
  textContainer: ViewStyle;
  text: TextStyle;
  title: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container2: {
    flex: 1,
    flexDirection: "column",
    gap: 10,
    margin: 10,
    backgroundColor: "#FFFFFF",
    borderColor: "#bfbdbd",
    borderWidth: 2,
    borderRadius: 10,
    
  },
  box: {
    width: 163,
    height: 110,
    
    borderRadius: 8,
  },
  image: {
    flex: 1,
    width: 163,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    padding: 5
  },
  title: {
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 15,
  },
  text: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
  },
});

export default CategoryCard;
