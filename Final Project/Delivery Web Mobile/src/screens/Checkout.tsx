import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import CustomButton from "../components/Unknown/CustomButton";
import { BaseText } from "../components/Unknown/DesignSystem";
import HomeIcon from "../icons/HomeIcon";
import DroneIcon from "../icons/DroneIcon";
import PersonIcon from "../icons/PersonIcon";
import DeliveryIcon from "../icons/DeliveryIcon";
import { useAuth } from "../context/AuthContext";
import { Settings } from "../types/Settings";

interface CheckoutProps {
  route?: any;
  navigation?: any;
}

const Checkout: React.FC<CheckoutProps> = ({ route, navigation }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const { userSettings, setSettings } = useAuth();

  const handleToggleNonContactDelivery = () => {
    if (userSettings) {
      const updatedSettings: Settings = {
        ...userSettings,
        nonContactDelivery: !userSettings.nonContactDelivery,
      };

      setSettings(updatedSettings);
    }
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const isOptionSelected = (option: string) => {
    return selectedOption === option;
  };

  const handleNavToCart = () => {
    navigation.navigate("AdditionalStackNavigation", { screen: "Cart" });
  };

  const handleNavToPayment = () => {
    navigation.navigate("AdditionalStackNavigation", { screen: "Payment" });
  };

  const handleNavToDeliveryAddress = () => {
    navigation.navigate("AdditionalStackNavigation", {
      screen: "DeliveryAddress",
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.paymentRow}>
        <BaseText
          marginTop={20}
          fontSize={24}
          weight="semiBold"
          text="Payment method"
          color="#2D0C57"
        />
        <Pressable onPress={() => handleNavToPayment()}>
          <BaseText
            marginTop={10}
            fontSize={15}
            weight="semiBold"
            text="CHANGE"
            color="#6C0EE4"
          />
        </Pressable>
      </View>
      <View style={styles.creditCardRow}>
        <Image
          source={require("C:/Users/shems/Downloads/React-Native-ProjectMarket/project-market-react-native/src/icons/credit-card.png")}
          style={styles.creditCardImage}
        />
        <BaseText
          marginTop={0}
          fontSize={15}
          weight="semiBold"
          text={`**** **** **** ${
            userSettings?.cardDetails.cardNumber.slice(-4) || "4747"
          }`}
          color="#9586A8"
        />
      </View>
      <View style={styles.paymentRow}>
        <BaseText
          marginTop={20}
          fontSize={24}
          weight="semiBold"
          text="Delivery address"
          color="#2D0C57"
        />
        <Pressable onPress={() => handleNavToDeliveryAddress()}>
          <BaseText
            marginTop={10}
            fontSize={15}
            weight="semiBold"
            text="CHANGE"
            color="#6C0EE4"
          />
        </Pressable>
      </View>
      <View style={styles.creditCardRow}>
        <HomeIcon />
        <BaseText
          marginLeft={10}
          marginTop={0}
          fontSize={15}
          weight="semiBold"
          text={`${userSettings?.deliveryAddress}`}
          color="#9586A8"
        />
      </View>
      <View style={styles.paymentRow}>
        <BaseText
          marginTop={20}
          fontSize={24}
          weight="semiBold"
          text="Delivery options"
          color="#2D0C57"
        />
      </View>
      <View style={styles.OptionsRow}>
        <TouchableOpacity onPress={() => handleOptionSelect("pickup")}>
          <View
            style={[
              styles.optionItem,
              isOptionSelected("pickup") && styles.selectedOption,
              !selectedOption && styles.defaultOption, 
            ]}
          >
            <PersonIcon />
            <BaseText
              marginLeft={10}
              marginTop={0}
              fontSize={15}
              weight="semiBold"
              text="I'll pick it up myself"
              color={isOptionSelected("pickup") ? "#6C0EE4" : "#9586A8"}
            />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.OptionsRow}>
        <TouchableOpacity onPress={() => handleOptionSelect("courier")}>
          <View
            style={[
              styles.optionItem,
              isOptionSelected("courier") && styles.selectedOption,
            ]}
          >
            <DeliveryIcon />
            <BaseText
              marginLeft={10}
              marginTop={0}
              fontSize={15}
              weight="semiBold"
              text="By courier"
              color={isOptionSelected("courier") ? "#6C0EE4" : "#9586A8"}
            />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.OptionsRow}>
        <TouchableOpacity onPress={() => handleOptionSelect("drone")}>
          <View
            style={[
              styles.optionItem,
              isOptionSelected("drone") && styles.selectedOption,
            ]}
          >
            <DroneIcon />
            <BaseText
              marginLeft={10}
              marginTop={0}
              fontSize={15}
              weight="semiBold"
              text="By Drone"
              color={isOptionSelected("drone") ? "#6C0EE4" : "#9586A8"}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.paymentRow}>
        <BaseText
          marginTop={10}
          fontSize={24}
          weight="semiBold"
          text="Non-contact-delivery"
          color="#2D0C57"
        />
        <TouchableOpacity onPress={handleToggleNonContactDelivery}>
          <BaseText
            marginTop={20}
            fontSize={15}
            weight="semiBold"
            text={userSettings?.nonContactDelivery ? "Yes" : "No"}
            color="#6C0EE4"
          />
        </TouchableOpacity>
      </View>
      <CustomButton
        onPress={handleNavToCart}
        marginTop={15}
        width={200}
        height={40}
        alignSelf="center"
        borderRadius={10}
        backgroundColor="#6C0EE4"
      >
        <BaseText
          weight="semiBold"
          color="#FFFFFF"
          fontSize={18}
          text="GO TO CART"
        />
      </CustomButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  OptionsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  optionItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  selectedOption: {
    backgroundColor: "#F6F5F5",
  },
  defaultOption: {
    backgroundColor: "#6C0EE4", 
  },
  paymentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  creditCardRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 40,
  },
  creditCardImage: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});

export default Checkout;
