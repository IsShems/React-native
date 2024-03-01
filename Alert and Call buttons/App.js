import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DeviceInfoPage from './src/pages/DeviceInfoPage';

export default function App() {
  return (
    <View style={styles.container}>
      <DeviceInfoPage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
