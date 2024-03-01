import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GetStarted from "../screens/GetStarted";
import SignUp from "../screens/SignUp";
import Login from "../screens/Login";

const Stack = createNativeStackNavigator()
export default function RootNavigation() {
    return (
        
        <Stack.Navigator>
            <Stack.Screen
                options={{ headerShown: false }}
                name="Get Started"
                component={GetStarted} />
            <Stack.Screen
                options={{ headerShown: false }}
                name="Login"
                component={Login} />
            <Stack.Screen
                options={{ headerShown: false }}
                name="SignUp"
                component={SignUp} />
        </Stack.Navigator>
    )
}