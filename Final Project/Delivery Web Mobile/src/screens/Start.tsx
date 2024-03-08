import { StyleSheet } from "react-native";
import LogoIcon from "../icons/LogoIcon";
import BackDrop from "../components/Unknown/BackDrop";
import { BaseText } from "../components/Unknown/DesignSystem";
import CustomButton from "../components/Unknown/CustomButton";
import Layout from "../components/Layouts/Layout";
import { ImageBackground } from "react-native";

interface StartProps {
  route?: any;
  navigation?: any;
}

export default function Start({ route, navigation }: StartProps) {
  
  const handleNavToMain = () => {
    navigation.navigate("AdditionalStackNavigation", { screen: "Main" });
  };
  
  return (
    <Layout backgroundColor="#A259FF">
      <ImageBackground
          source={require("../icons/MainBack.jpeg")}
          style={styles.imageBackground}
          resizeMode="cover"
        >
      
      <BackDrop
        height={564}
        backgroundColor="transparent"
        borderRadius={30}
        marginTop={70}
      >
        <LogoIcon />
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
       
        <CustomButton
          onPress={() => handleNavToMain()}
          width={100}
          marginTop={30}
          height={50}
          backgroundColor="#0BCE83"
          borderRadius={8}
        >
          <BaseText
            text="Start"
            fontSize={18}
            alignSelf="center"
            color="#FFFFFF"
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
