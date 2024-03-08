import { StyleSheet } from "react-native";
import LogoIcon from "../icons/LogoIcon";
import BackDrop from "../components/Unknown/BackDrop";
import BoxIcon from "../icons/BoxIcon";
import { BaseText } from "../components/Unknown/DesignSystem";
import CustomButton from "../components/Unknown/CustomButton";
import Layout from "../components/Layouts/Layout";
import { ImageBackground } from "react-native";

interface MainProps {
  route?: any;
  navigation?: any;
}

export default function Main({ route, navigation }: MainProps) {
  
  const handleNavToSignUp = () => {
    navigation.navigate("AdditionalStackNavigation", { screen: "SignUp" });
  };
  
  const handleNavToStart = () => {
    navigation.navigate("AdditionalStackNavigation", { screen: "Start" });
  };
  
  return (
    <Layout backgroundColor="#A259FF">
      <ImageBackground
          source={require("../icons/MainBack.jpeg")}
          style={styles.imageBackground}
          resizeMode="cover"
        >
      <LogoIcon />
      <BackDrop
        height={564}
        backgroundColor="#F6F5F5"
        borderRadius={30}
        marginTop={70}
      >
        <BoxIcon />
        <BaseText
          text="Non-Contact"
          marginTop={10}
          fontSize={30}
          color="#2D0C57"
          weight="semiBold700"
        />
        <BaseText
          marginTop={0}
          text="Deliveries"
          fontSize={30}
          color="#2D0C57"
          weight="semiBold700"
        />
        <BaseText
          marginTop={10}
          text="When placing an order, select the option"
          fontSize={18}
          alignSelf="center"
          numberOfLines={1}
          marginHorizontal={30}
          color="#9586A8"
          weight="normal"
        />
        <BaseText
          text="“Contactless delivery” and the courier will leave"
          fontSize={18}
          alignSelf="center"
          color="#9586A8"
          weight="normal"
        />
        <BaseText
          text="your order at the door."
          fontSize={18}
          alignSelf="center"
          color="#9586A8"
          weight="normal"
        />
        <CustomButton
          onPress={() => handleNavToSignUp()}
          width={350}
          marginTop={30}
          height={50}
          backgroundColor="#0BCE83"
          borderRadius={8}
        >
          <BaseText
            text="ORDER NOW"
            fontSize={16}
            alignSelf="center"
            color="#FFFFFF"
            weight="semiBold"
          />
        </CustomButton>
        <CustomButton onPress={() => handleNavToStart()} width={64} height={18} marginTop={10}>
          <BaseText
            text="DISMISS"
            fontSize={16}
            alignSelf="center"
            color="#9586A8"
            weight="semiBold"
          />
        </CustomButton>
      </BackDrop>
      </ImageBackground>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
