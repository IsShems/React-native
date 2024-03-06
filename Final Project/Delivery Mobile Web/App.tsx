import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import BottomTabNavigation from './src/navigation/BottomTabNavigation';
import { NavigationContainer } from "@react-navigation/native";
import AuthProvider from "./src/context/AuthContext";
import RootNavigation from "./src/navigation/RootNavigation";
import { SettingsProvider } from "./src/context/SettingsContext";
import { CartProvider } from "./src/context/CartContext";


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AuthProvider>
        <SettingsProvider>
          <NavigationContainer>
            {/* <BottomTabNavigation /> */}
            <RootNavigation />
          </NavigationContainer>
        </SettingsProvider>
      </AuthProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
