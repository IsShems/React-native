import {
  StyleSheet,
  View,
} from "react-native";
import React, { useState } from "react";
import CustomButton from "../components/Unknown/CustomButton";
import { BaseText } from "../components/Unknown/DesignSystem";
import CustomTextInput from "../components/Unknown/CustomTextInput";
import { useAuth } from "../context/AuthContext";
import { Settings } from "../types/Settings";

interface DeliveryAddressProps {
  route: any;
  navigation: any;
}

const DeliveryAddress: React.FC<DeliveryAddressProps> = ({
  route,
  navigation,
}) => {
  const { userToken, userSettings, setSettings } = useAuth();
  const [newAddress, setNewAddress] = useState("");

  const handleSave = () => {
    if (userSettings) {
      const updatedSettings: Settings = {
        ...userSettings,
        deliveryAddress: newAddress,
      };
  
      setSettings(updatedSettings);
    }
    navigation.navigate("Checkout");
  };
  

  return (
    <View>
      <BaseText
        marginTop={250}
        marginBottom={20}
        text="Enter new address:"
        fontSize={20}
        alignSelf="center"
        numberOfLines={1}
        marginHorizontal={30}
        color="black"
        weight="normal"
      />
      <CustomTextInput
        alignSelf="center"
        width={280}
        value={newAddress}
        onChangeText={(value) => setNewAddress(value)}
        height={40}
        placeholder="new address here"
        borderRadius={6}
        backgroundColor="#ffffff"
      />
      <CustomButton
        onPress={handleSave}
        marginTop={15}
        width={200}
        height={50}
        alignSelf="center"
        borderRadius={16}
        backgroundColor="#0BCE83"
      >
        <BaseText weight="semiBold" color="#FFFFFF" fontSize={18} text="Save" />
      </CustomButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 70,
  },
  searchContainer: {
    flexDirection: "row",
    padding: 10,
    width: 374,
    height: 48,
    borderRadius: 25,
    alignItems: "flex-start",
    backgroundColor: "#FFFFFF",
    justifyContent: "flex-start",
    borderColor: "#ECECEC",
    borderWidth: 2,
    marginTop: 30,
    marginBottom: 20,
    marginLeft: 8,
  },
  searchInput: {
    fontSize: 18,
    color: "#2D0C57",
    marginLeft: 12,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "500",
    lineHeight: 30,
    marginBottom: 10,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginRight: 15,
  },
});

export default DeliveryAddress;
