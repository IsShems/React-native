import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Layout from "../components/Layout";

const Header = ({ title }) => {
  return (
    
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20, 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Header;
