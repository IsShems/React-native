import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Alert } from "react-native";
import Card from "./Card";

const MainPage = ({ data }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleCardPress = (product) => {
    Alert.alert(
      product.name,
      `Description: ${product.description}\nPrice: $${product.price.toFixed(
        2
      )}\nInfo: ${product.info}`
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.small}>Back</Text>
        <Text style={styles.big}>Market</Text>
        <Text style={styles.small}>Filter</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchValue}
          onChangeText={(text) => setSearchValue(text)}
        />
      </View>
      <View>
        <Text style={styles.sectionTitle}>Hot deals</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.boxForItem}>
            {data.map(
              (item) =>
                item.name.toLowerCase().includes(searchValue.toLowerCase()) && (
                  <TouchableOpacity key={item.id} onPress={() => handleCardPress(item)}>
                    <Card
                      id={item.id}
                      name={item.name}
                      description={item.description}
                      price={item.price}
                      imageUrl={item.imageUrl}
                    />
                  </TouchableOpacity>
                )
            )}
          </View>
        </ScrollView>
      </View>
      <View>
        <Text style={styles.sectionTitle}>Trending</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.boxForItem}>
            {data.map(
              (item) =>
                item.name.toLowerCase().includes(searchValue.toLowerCase()) && (
                  <TouchableOpacity key={item.id} onPress={() => handleCardPress(item)}>
                    <Card
                      id={item.id}
                      name={item.name}
                      description={item.description}
                      price={item.price}
                      imageUrl={item.imageUrl}
                    />
                  </TouchableOpacity>
                )
            )}
          </View>
        </ScrollView>
      </View>
      <View>
        <Text style={styles.sectionTitle}>New Arrivals</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.boxForItem}>
            {data.map(
              (item) =>
                item.name.toLowerCase().includes(searchValue.toLowerCase()) && (
                  <TouchableOpacity key={item.id} onPress={() => handleCardPress(item)}>
                    <Card
                      id={item.id}
                      name={item.name}
                      description={item.description}
                      price={item.price}
                      imageUrl={item.imageUrl}
                    />
                  </TouchableOpacity>
                )
            )}
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 30,
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
  searchContainer: {
    padding: 8,
    width: "100%",
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
  searchInput: {
    fontSize: 20,
    color: "#bfbfbf",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "500",
    lineHeight: 30,
    marginBottom: 10,
  },
});

export default MainPage;
