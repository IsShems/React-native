import { StyleSheet, Text, Image } from "react-native";
import { useFonts, Poppins_700Bold, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import CustomButton from "../components/CustomButton";
import Layout from "../components/Layout";


export default function GetStarted({ route, navigation }) {
    let imageUrl = 'https://d31sxl6qgne2yj.cloudfront.net/wordpress/wp-content/uploads/20220629081646/Alice-Wonderland.jpg'
    let [fontsLoaded] = useFonts({
        Poppins_700Bold,
        Poppins_600SemiBold
    });


    if (!fontsLoaded) {
        return null;
    }

    const handleNavigateToRegister = () =>
    {
        navigation.navigate('SignUp')
    }
    return (
        <Layout>
            <Image style={styles.imageStyle} source={{ uri: 'https://assets-global.website-files.com/5f82ddcbaca6c9354bc485e1/5f8bc64ecc42beda4960ba9a_Artboard%201_150_V2.png' }} />
            <Text style={styles.boldBigText}>Gets things done with to do</Text>
            <Text style={styles.boldMediumText}>Lorem Ipsum dolor sit amet </Text>
            <CustomButton
                onPress={handleNavigateToRegister}
                textContent={route.name}
                navigation={navigation} />
        </Layout>

    )
}

const styles = StyleSheet.create({
    boldBigText:
    {
        fontFamily: 'Poppins_700Bold',
        fontSize: 22,
        alignSelf: 'center',
        marginTop: 30,
        marginBottom: 20
    },
    boldMediumText:
    {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 16,
        alignSelf: 'center',
        marginBottom: 50
    },
    imageStyle: {
        width: 322,
        height: 239,
    }
});