import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import AuthProvider from "./src/context/AuthContext";
import RootNavigation from "./src/navigation/RootNavigation";
import { CartProvider } from "./src/context/CartContext";


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AuthProvider>
          <NavigationContainer>
            <RootNavigation />
          </NavigationContainer>
      </AuthProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
