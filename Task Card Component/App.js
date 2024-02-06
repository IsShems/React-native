import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import CalendarImage from "./components/calendar.png";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.whiteComponent}>
        <View style={styles.content}>
          <View style={styles.circle}>
            <Image
              source={CalendarImage}
              
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.titleText}>React-native lesson</Text>
            <Text style={styles.descriptionText}>19:00</Text>
          </View>
          <View style={styles.purpleBorder}></View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#c0bec2",
    justifyContent: "center",
  },
  whiteComponent: {
    width: 344,
    height: 80,
    top: 16,
    left: 16,
    left: "50%", 
    marginLeft: -172,
    padding: 16,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 8,
    backgroundColor: "white",
    
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#dabaf7",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  titleText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  descriptionText: {
    fontSize: 14,
    color: "#666",
  },
  purpleBorder: {
    width: 25,
    height: 25,
    borderColor: "#800080",
    borderRadius: 4,
  },
});

export default App;
