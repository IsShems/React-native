import React, { useEffect } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import Header from "../components/Header";
import ListItems from "../components/containers/ListItems";
import CustomButton from "../components/CustomButton";
import ArrowLeftIcon from "../icons/ArrowLeftIcon";
import Layout from "../components/Layout";

export default function ToDoList({ route, navigation }) {
  let { todos } = route.params;

  useEffect(() => {
    todos = route.params.todos;
  }, [route.params.todos]);

  const handleSaveButtonPress = () => {
    navigation.navigate("Add New Task");
  };

  const handleGoBackPress = () => {
    navigation.navigate("Home Screen");
  };

  return (
    <Layout>
      <Header
        onPress={handleGoBackPress}
        svgIcon={"ArrowLeftIcon"}
        route={route}
        height={222}
      />
       {todos.length === 0 ? (
          <ScrollView style={styles.aboutMargin}>
          <Text style={styles.noTaskText}>There is no task yet</Text>
        
      </ScrollView>
      ) : (
          <ScrollView style={styles.aboutMargin}>
        
          <ListItems todos={todos} />
          
      </ScrollView>
        )}
     
      <CustomButton 
        onPress={handleSaveButtonPress}
        buttonText={"Add New Task"}
      />
    </Layout>
  );
}

const styles = StyleSheet.create({
  aboutMargin: {
    marginTop: -30,
  },
  noTaskText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 18,
    color: 'gray',
  },
});