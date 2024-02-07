import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import LogInPage from "./components/LogInPage";

const App = () => {
  return (
    <View style={styles.container}>
      <LogInPage />
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
