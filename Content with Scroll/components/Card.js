import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Card = ({ id, name, description, time, imageUrl }) => {
  return (
    <View style={styles.container2}>
      <View style={styles.whiteComponent}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>{name}</Text>
          <Text style={styles.descriptionText}>{description}</Text>
          <Text style={styles.timeText}>{`${time} ago`}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  whiteComponent: {
    width: 360,
    height: 343,
    left: "50%",
    marginLeft: -180,
    borderRadius: 8,
    overflow: "hidden",
  },
  textContainer: {
    padding: 10,
  },
  titleText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  descriptionText: {
    fontSize: 14,
    marginBottom: 5,
  },
  timeText: {
    fontSize: 12,
    color: "#949494",
    fontWeight: "bold",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    borderRadius: 15,
  },
});

export default Card;
