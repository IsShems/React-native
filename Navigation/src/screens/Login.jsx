import React from "react";
import { StyleSheet, View, Text, TextInput, Pressable, Image} from "react-native";
import { useFonts, Poppins_700Bold, Poppins_400Regular, Poppins_500Medium } from '@expo-google-fonts/poppins';
import Layout from "../components/Layout";
import CustomButton from "../components/CustomButton";

export default function Login({ route, navigation }) {

    let imageUrl = 'https://static.vecteezy.com/system/resources/previews/010/925/422/non_2x/ui-and-ux-design-mobile-app-ui-design-website-ux-user-interface-interaction-experience-web-development-menu-bar-studio-portfolio-page-flat-design-modern-illustration-vector.jpg'
    let [fontsLoaded] = useFonts({
        Poppins_700Bold,
        Poppins_500Medium,
        Poppins_400Regular
    });

    if (!fontsLoaded) {
        return null;
    }

    const handleNavigateToSignUp = () =>
    {
        navigation.navigate('SignUp')
    }
    return (
        <Layout>
           <Text style={styles.boldBigText}>Welcome back!</Text>
           <Image style={styles.imageStyle} source={{uri: imageUrl}}/>
            <TextInput
                style={styles.textInputStyle}
                placeholder="Enter your email"
            />
            <TextInput
                style={styles.textInputStyle}
                placeholder="Enter your password" />
            <Text style={styles.smallGreenTextAboutFP}>Forget Password</Text>
            <CustomButton textContent={route.name} />
            <View style={styles.rowContainer}>
                <Text style={styles.bottomBoldSmallText}>Don't have an account ? </Text>
                <Pressable onPress={handleNavigateToSignUp}>
                    <Text style={styles.smallGreenText}>Sign up.</Text>
                </Pressable>
            </View>
        </Layout>
    )
}

const styles = StyleSheet.create({
    boldBigText:
    {
        fontFamily: 'Poppins_700Bold',
        fontSize: 22,
        alignSelf: 'center',
        marginBottom: 10
    },
    rowContainer:
    {
        flexDirection: 'row',
        marginBottom: 30
    },
    textInputStyle:
    {
        fontFamily: 'Poppins_400Regular',
        fontSize: 13,
        paddingLeft: 20,
        backgroundColor: '#FFFFFF',
        width: 360,
        height: 49,
        borderRadius: 100,
        marginVertical: 10
    },
    bottomBoldSmallText:
    {
        fontFamily: 'Poppins_500Medium',
        fontSize: 13
    },
    smallGreenTextAboutFP:
    {
        fontFamily: 'Poppins_500Medium',
        fontSize: 13,
        color: '#1b51c4',
        marginTop: 30, 
        marginBottom: 10 
        
    },
    smallGreenText:
    {
        fontFamily: 'Poppins_500Medium',
        fontSize: 13,
        color: '#1b51c4'
    },
    imageStyle: {
        width: 322,
        height: 239,
        marginBottom: 20
    }
});
