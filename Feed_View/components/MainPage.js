import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Card from "./Card";

const MainPage = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.small}>Back</Text>
        <Text style={styles.big}>Feed</Text>
        <Text style={styles.small}>Filter</Text>
      </View>
      <View style={styles.search}>
        <Text style={{ fontSize: 20, color: "#bfbfbf" }}>Search</Text>
      </View>
      <View style={styles.boxForItem}>
        {data.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            time={item.time}
            imageUrl={item.imageUrl}
          />
        ))}
      </View>
      <View style={styles.bottomContainer}>
      <Image
              source={{uri: "https://www.albertadoctors.org/images/ama-master/feature/Stock%20photos/News.jpg"}}
              style={styles.image}
            />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 35,
    flexDirection: "column",
    
  },
  boxForItem: {
    flex: 1,
    flexDirection: "column",
  },
  header: {
    width: "auto",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 80,
    alignItems: "center",
  },
  small: {
    fontSize: 16,
    lineHeight: 19.36,
    fontWeight: "500",
    color: "#2e7ab8",
  },
  big: {
    fontSize: 30,
    lineHeight: 36.31,
    fontWeight: "600",
  },
  search: {
    padding: 8,
    width: 370,
    height: 50,
    borderRadius: 25,
    alignItems: "flex-start",
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    borderColor: "#ECECEC",
    borderWidth: 2,
    marginTop: 30,
    marginBottom: 10,
  },
  bottomContainer: {
    width: 360,
    height: 240,
    left: "50%", 
    marginLeft: -172,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    backgroundColor: "#e0e0e0",
    borderRadius: 8,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    borderRadius: 8,
    bottom: 5,
  },
});

export default MainPage;
