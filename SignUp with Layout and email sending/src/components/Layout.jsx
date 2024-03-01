import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from "../screens/Header";


const Layout = ({ children, title }) => {
    return (
      <View style={styles.container}>
        <Header title={title} />
        {children}
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});

export default Layout;
