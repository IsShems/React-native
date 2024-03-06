import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryPage from "../../screens/CategoryPage";
import Item from "../../screens/Item";
import Payment from "../../screens/Payment";
import DeliveryAddress from "../../screens/DeliveryAddress";
import Cart from "../../screens/Cart";
import SignUp from "../../screens/SignUp";
import Start from "../../screens/Start";
import Main from "../../screens/Main";
import LogIn from "../../screens/LogIn";

const Stack = createNativeStackNavigator();

export default function AdditionalStackNavigation() {
  return (
    <Stack.Navigator initialRouteName="Something">
      <Stack.Screen name="CategoryPage" component={CategoryPage} />
      <Stack.Screen name="Item" component={Item} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="DeliveryAddress" component={DeliveryAddress} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
  );
}
