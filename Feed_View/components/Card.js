import { View, Text, StyleSheet, Image } from "react-native";

const Card = ({ id, name, description, time, imageUrl }) => {
  return (
    <View style={styles.container2}>
      <View style={styles.whiteComponent}>
        <View style={styles.content}>
          <View style={styles.circle}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
          </View>
          <View style={styles.textContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>{name}</Text>
              <Text style={styles.timeText}>{`${time} ago`}</Text>
            </View>
            <Text style={styles.descriptionText}>{description}</Text>
            <View style={styles.line}></View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 110,
    height: 110,
    backgroundColor: "#F5F5F5",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    borderRadius: 8,
    bottom: 7,
  },
  whiteComponent: {
    width: 344,
    height: 90,
    top: 16,
    left: 6,
    left: "50%",
    marginLeft: -172,
    borderWidth: 1,
    borderColor: "transparent",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    bottom: 12,
  },
  textContainer: {
    flex: 1,
  },
  titleText: {
    fontSize: 16,
    fontWeight: "bold",
    bottom: 10,
  },
  descriptionText: {
    fontSize: 14,
    bottom: 5,
  },
  line: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginVertical: 8,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  timeText: {
    fontSize: 12,
    color: "#949494",
    bottom: 10,
    fontWeight: "bold",
  },
});

export default Card;
