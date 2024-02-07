import { View, Text, StyleSheet, Image } from "react-native";

const Card = ({ id, name, description, price, imageUrl }) => {
  return (
    <View style={styles.container2}>
      <View style={styles.box}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
      </View>
      <View style={{ flex: 1, flexDirection: "column", flexWrap: "wrap" }}>
        <Text style={{ fontSize: 14, fontWeight: 400, lineHeight: 16.94 }}>
          {name}
        </Text>
        <Text style={{ fontSize: 14, fontWeight: 400, lineHeight: 16.94 }}>
          {description}
        </Text>
        <Text
          style={{
            marginTop: 5,
            fontSize: 14,
            fontWeight: 600,
            lineHeight: 16.94,
          }}
        >
          ${price.toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    flexDirection: "column",
    gap: 10,
  },
  box: {
    width: 110,
    height: 110,
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

export default Card;
