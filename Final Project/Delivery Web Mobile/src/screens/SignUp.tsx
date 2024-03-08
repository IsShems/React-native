import { View, Text, StyleSheet, Pressable, ImageBackground } from "react-native";
import Layout from "../components/Layouts/Layout";
import BackDrop from "../components/Unknown/BackDrop";
import { BaseText } from "../components/Unknown/DesignSystem";
import CustomTextInput from "../components/Unknown/CustomTextInput";
import CustomButton from "../components/Unknown/CustomButton";
import { useState } from "react";
import { checkEmailValidation, checkPasswordValidation, checkPasswordsMatch } from "../validation";
import { User, useAuth } from "../context/AuthContext";

interface SignUpProps {
    route?: any;
    navigation?: any;
}

export default function SignUp({ route, navigation }: SignUpProps) {

    const authContext = useAuth();
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
        repeatPassword: ''
    });

    const [errors, setErrors] = useState({
        email: '',
        password: '',
        repeatPassword: ''
    });

    const [showPassword, setShowPassword] = useState(true);
    const [showRepeatPassword, setShowRepeatPassword] = useState(true);

    const clearErrors = () => {
        setErrors({
            email: '',
            password: '',
            repeatPassword: ''
        });
    };

    const handleSignUp = async () => {
        clearErrors();

        let emailValidationResult = checkEmailValidation(credentials.email);
        let passwordValidationResult = checkPasswordValidation(credentials.password);

        if (checkPasswordsMatch(credentials.password, credentials.repeatPassword)) {
            if (emailValidationResult && passwordValidationResult) {
                let user: User = {
                    email: credentials.email,
                    password: credentials.password
                }
                await authContext.signUp(user);
                navigation.navigate("Categories");
                return;
            }
        }

        if (!emailValidationResult) {
            setErrors(prevErrors => ({ ...prevErrors, email: 'Invalid email format' }));
        }

        if (!passwordValidationResult) {
            setErrors(prevErrors => ({ ...prevErrors, password: "Length shouldn't be less than 8 symbols" }));
        }

        setErrors(prevErrors => ({
            ...prevErrors,
            password: 'Passwords must match',
            repeatPassword: 'Passwords must match'
        }));
    };

    const handleShowPassword = () => {
        setShowPassword(prev => !prev);
    };

    const handleShowRepeatPassword = () => {
        setShowRepeatPassword(prev => !prev);
    };

    const handleNavToLogin = () => {
        navigation.navigate("AdditionalStackNavigation", { screen: "LogIn" });
    };

    return (
        <Layout backgroundColor='#A259FF' justifyContent='center'>
            <ImageBackground
              source={require("../icons/MainBack.jpeg")}
              style={styles.imageBackground}
              resizeMode="cover"
            >
                <BackDrop
                    width={350}
                    height={500}
                    alignItems="flex-start"
                    backgroundColor="transparent"
                    borderRadius={16}
                    marginTop={90}
                >
                    <View style={styles.container}>
                        <BaseText
                            fontSize={28}
                            weight="semiBold"
                            alignSelf="center"
                            text="Sign Up"
                            color="#FFFFFF"
                        />
                        <BaseText
                            marginTop={10}
                            fontSize={18}
                            weight="normal"
                            text="Email"
                            color="#FFFFFF"
                        />
                        <CustomTextInput
                            alignSelf="center"
                            width={300}
                            value={credentials.email}
                            onChangeText={(value) => setCredentials(prevCred => ({ ...prevCred, email: value }))}
                            height={50}
                            placeholder="Email"
                            borderRadius={16}
                            backgroundColor="#ffffff"
                        />
                        {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}
                        <BaseText
                            marginTop={10}
                            fontSize={18}
                            weight="normal"
                            text="Password"
                            color="#FFFFFF"
                        />
                        <View >
                            <CustomTextInput
                                alignSelf="center"
                                width={300}
                                height={50}
                                value={credentials.password}
                                onChangeText={(value) => setCredentials(prevCred => ({ ...prevCred, password: value }))}
                                placeholder="Password"
                                secureTextEntry={showPassword}
                                borderRadius={16}
                                backgroundColor="#FFFFFF"
                            />
                            <Pressable style={styles.showButton} onPress={handleShowPassword}>
                                <BaseText
                                    text={showPassword ? 'Show' : 'Hide'}
                                    fontSize={14}
                                    weight="normal"
                                    color="#2D0C57"
                                />
                            </Pressable>
                        </View>
                        {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}
                        <BaseText
                            marginTop={10}
                            fontSize={18}
                            weight="normal"
                            text="Repeat"
                            color="#FFFFFF"
                        />
                        <View>
                            <CustomTextInput
                                alignSelf="center"
                                width={300}
                                height={50}
                                value={credentials.repeatPassword}
                                onChangeText={(value) => setCredentials(prevCred => ({ ...prevCred, repeatPassword: value }))}
                                placeholder="Repeat password"
                                secureTextEntry={showRepeatPassword}
                                borderRadius={16}
                                backgroundColor="#FFFFFF"
                            />
                            <Pressable style={styles.showButton} onPress={handleShowRepeatPassword}>
                                <BaseText
                                    text={showRepeatPassword ? 'Show' : 'Hide'}
                                    fontSize={14}
                                    weight="normal"
                                    color="#2D0C57"
                                />
                            </Pressable>
                        </View>
                        {errors.repeatPassword ? <Text style={styles.errorText}>{errors.repeatPassword}</Text> : null}
                        <CustomButton
                            onPress={handleSignUp}
                            marginTop={50}
                            width={300}
                            height={50}
                            alignSelf="center"
                            borderRadius={16}
                            backgroundColor="#0BCE83"
                        >
                            <BaseText
                                fontSize={18}
                                alignSelf="center"
                                weight="semiBold"
                                text="Sign Up"
                                color="#FFFFFF"
                            />
                        </CustomButton>
                        <View style={styles.linkContainer}>
                            <BaseText
                                fontSize={16}
                                marginTop={10}
                                weight="normal"
                                alignSelf="center"
                                text="Already have an account? "
                                color="#FFFFFF"
                            />
                            <Pressable onPress={handleNavToLogin}>
                                <BaseText
                                    fontSize={16}
                                    marginTop={10}
                                    textStyles={{ textDecorationLine: 'underline' }}
                                    weight="normal"
                                    alignSelf="center"
                                    text="Log In"
                                    color="#FFFFFF"
                                />
                            </Pressable>
                        </View>
                    </View>
                </BackDrop>
            </ImageBackground>
        </Layout>
    );
}

const styles = StyleSheet.create({
    container:
    {
        alignSelf: 'center'
    },
    imageBackground: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    linkContainer:
    {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    errorText:
    {
        color: 'red',
        fontSize: 14,
    },
    showButton:
    {
        position: 'absolute',
        right: 20,
        bottom: 15
    }
});
