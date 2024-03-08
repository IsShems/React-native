import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigation from "../BottomTabNavigation";
import AdditionalStackNavigation from "../AdditionalStackNavigation";


const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <Stack.Navigator initialRouteName="BottomTabNavigation">
      <Stack.Screen
        options={{ headerShown: false }}
        name="BottomTabNavigation"
        component={BottomTabNavigation}
      />
       <Stack.Screen
        options={{ headerShown: false }}
        name="AdditionalStackNavigation"
        component={AdditionalStackNavigation}
      />
    </Stack.Navigator>
  );
}