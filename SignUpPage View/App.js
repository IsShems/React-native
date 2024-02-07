import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import MainPage from "./components/MainPage";


const App = () => {
  return (
    <View style={styles.container}>
      <MainPage />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});

export default App;