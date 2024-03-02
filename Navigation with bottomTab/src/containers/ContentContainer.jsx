import React from 'react';
import { StyleSheet, View, Image, Text, FlatList } from 'react-native';
import Card from "./Card";

const ContentPage = ({ data3 }) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.small}>Back</Text>
        <Text style={styles.big}>Content</Text>
        <Text style={styles.small}>Filter</Text>
      </View>
      <View style={styles.search}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchValue}
          onChangeText={(text) => setSearchValue(text)}
        />
      </View>
      <ScrollView>
        <View style={styles.section}>
          <View style={styles.boxForItem}>
            {data.map(
              (item) =>
                item.name.toLowerCase().includes(searchValue.toLowerCase()) && (
                  <Card
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    description={item.description}
                    time={item.time}
                    imageUrl={item.imageUrl}
                  />
                )
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 35,
    flexDirection: "column",
  },
  section: {
    marginBottom: 20,
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
    color: "#2f948a",
  },
  big: {
    fontSize: 30,
    lineHeight: 36.31,
    fontWeight: "600",
  },
  search: {
    padding: 8,
    width: 343,
    height: 50,
    borderRadius: 25,
    alignItems: "flex-start",
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    borderColor: "#ECECEC",
    borderWidth: 2,
    marginTop: 10,
    marginBottom: 20,
  },
  searchInput: {
    fontSize: 20,
    color: "#bfbfbf",
  },
});

export default ContentPage;