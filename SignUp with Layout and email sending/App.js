import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUpPage from './src/screens/SignUpPage';
import Header from './src/screens/Header';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Header/> */}
      <SignUpPage />
      <StatusBar style="auto" />
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
