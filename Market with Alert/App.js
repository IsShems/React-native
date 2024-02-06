import React from "react";
import { View, StyleSheet, Text } from "react-native";
import MainPage from "./components/MainPage";

const data = [
  { id: 1, name: "Butterfly ", description: "White necklace", price: 39.99, info: "1 left", imageUrl: "https://cdn1.ozone.ru/s3/multimedia-j/6580706131.jpg" },
  { id: 2, name: "Fish", description: "Some earings", price: 10.99, info: "23 left", imageUrl: "https://ae04.alicdn.com/kf/Sc7ea4e393d57437ebe5e0f29f7adfcb8t.jpg" },
  { id: 3, name: "Blues", description: "8 braclets", price: 24.99, info: "11 left", imageUrl: "https://style.pibig.info/thumb.php?src=https://style.pibig.info/uploads/posts/2023-03/thumbs/1679414027_style-pibig-info-p-brasleti-iz-kamnei-zhenskie-pinterest-41.jpg&w=298&h=198" },
 ];

const App = () => {
  return (
    <View style={styles.container}>
      <MainPage data={data} />
      
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