import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const { width } = Dimensions.get("window");

export default function App() {
  return (
    <View style={width > 400 ? styles.container : styles.containerSmall}>
      <View style={styles.rowContainer}>
        <View style={styles.fragment}>
          <Text>Something 1</Text>
        </View>
        <View style={styles.fragment}>
          <Text>Something 2</Text>
        </View>
        <View style={styles.fragment}>
          <Text>Something 3</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  containerSmall: {
    backgroundColor: "blue",
  },
  rowContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center', 
    alignItems: 'center', 
    margin: 16, 
  },
  fragment: {
    width: width > 400 ? width / 2 : '50%', 
    height: 200, 
    backgroundColor: "olive",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "black",
    margin: 8, 
  },
});

