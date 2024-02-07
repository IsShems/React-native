import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import MainPage from "./components/MainPage";

const data = [
  {
    id: 1,
    name: "In Baku",
    description:
      "Presidential elections in Azerbaijan will be held on February 7, 2024",
    time: "8m",
    imageUrl:
      "https://images.unsplash.com/photo-1603555591682-edff5a42bf02?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXplcmJhaWphbiUyMGZsYWd8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    name: "Priscilla: Elvis and me",
    description: "Amazing movie, still in theaters",
    time: "2 hours",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/28/Priscilla_poster.jpeg",
  },
  {
    id: 3,
    name: "Blue",
    description: "Why so much people like this color?",
    time: "3m",
    imageUrl:
      "https://artstudiolife.com/wp-content/uploads/2020/07/how-to-make-blue-colour.jpg",
  },
  {
    id: 4,
    name: "Problem with music in Tik Tok",
    description: "Big conflict between TikTok and Universal Music Group",
    time: "3m",
    imageUrl:
      "https://sf-static.tiktokcdn.com/obj/eden-sg/uhtyvueh7nulogpoguhm/tiktok-icon2.png",
  },
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
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
});

export default App;
