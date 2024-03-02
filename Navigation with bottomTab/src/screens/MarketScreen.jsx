import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const data2 = [
  {
    id: 1,
    name: "Butterfly ",
    description: "White necklace",
    price: 39.99,
    info: "1 left",
    imageUrl: "https://cdn1.ozone.ru/s3/multimedia-j/6580706131.jpg",
  },
  {
    id: 2,
    name: "Fish",
    description: "Some earings",
    price: 10.99,
    info: "23 left",
    imageUrl:
      "https://ae04.alicdn.com/kf/Sc7ea4e393d57437ebe5e0f29f7adfcb8t.jpg",
  },
  {
    id: 3,
    name: "Blues",
    description: "8 braclets",
    price: 24.99,
    info: "11 left",
    imageUrl:
      "https://style.pibig.info/thumb.php?src=https://style.pibig.info/uploads/posts/2023-03/thumbs/1679414027_style-pibig-info-p-brasleti-iz-kamnei-zhenskie-pinterest-41.jpg&w=298&h=198",
  },
  {
    id: 4,
    name: "Circle",
    description: "Necklace with circle",
    price: 43.99,
    info: "5 left",
    imageUrl: "https://ir-3.ozone.ru/s3/multimedia-n/c500/6709114751.jpg",
  },
  {
    id: 5,
    name: "Magic Bfly",
    description: "Magic neclace",
    price: 104.99,
    info: "41 left",
    imageUrl:
      "https://ae04.alicdn.com/kf/S6dd353d8dd0d499fa566a897a31fca74a.jpg",
  },
];

export default function MarketPage() {
  const authContext = useContext(AuthContext)

  const signOut = async () => {
    await authContext.signOut()
  }

  return (
    <ScrollView>
      <SearchBar />
      <Pressable style={styles.buttonStyle} onPress={signOut}><Text style={styles.buttonText}>Log Out</Text></Pressable>
      <MarketPage data2={data2} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    backgroundColor: 'green',
    width: 100,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#FFFFFF',
  },
});