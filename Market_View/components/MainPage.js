import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Card from "./Card";

const MainPage = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.small}>Back</Text>
        <Text style={styles.big}>Market</Text>
        <Text style={styles.small}>Filter</Text>
      </View>
      <View style={styles.search}>
        <Text style={{ fontSize: 20, color: "#bfbfbf" }}>Search</Text>
      </View>
      <View>
        <Text style={{ fontSize: 24, fontWeight: 500, lineHeight: 30 }}>
          Hot deals
        </Text>
      </View>
      <View style={styles.boxForItem}>
        {data.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            imageUrl={item.imageUrl}
          />
        ))}
      </View>
      <View>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 500,
            lineHeight: 25,
          }}
        >
          Trending
        </Text>
      </View>
      <View style={styles.boxForItem}>
        {data.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            imageUrl={item.imageUrl}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  boxForItem: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
    marginTop: 20,
    marginBottom: 20,
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
    color: "#2f948a",
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
    marginBottom: 30,
  },
});

export default MainPage;
