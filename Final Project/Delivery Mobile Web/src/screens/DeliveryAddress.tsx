import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import SearchIcon from "../icons/SearchIcon";
import ProductCard from "../components/Unknown/ProductCard";
import CustomButton from "../components/Unknown/CustomButton";
import ShoppingCartIcon from "../icons/ShoppingCartIcon";
import { BaseText } from "../components/Unknown/DesignSystem";
import CustomTextInput from "../components/Unknown/CustomTextInput";
import { useSettings } from "../context/SettingsContext";
import { useAuth } from "../context/AuthContext";
import { WebService } from "../services/WebService";
import { Settings } from "../types/Settings";
//   interface Payment {
//     id: number;
//     name: string;
//     price: number;
//     weight: string;
//     country: string;
//     description: string;
//     category: string;
//     photo: string;
//   }

interface DeliveryAddressProps {
  route: any;
  navigation: any;
}

const DeliveryAddress: React.FC<DeliveryAddressProps> = ({
  route,
  navigation,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const { settings, setSettings } = useSettings();

  const handleChange = () => {
    const newAddress: string = "ваш новый адрес";
  
    // setSettings((prevSettings: Settings | null) => ({
    //   ...(prevSettings || {}),
    //   deliveryAddress: newAddress,
    // }));
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
        value={"your adress here"}
        // onChangeText={(value) => setEmail(value)}
        // onChangeText={(value) => setEmail(value)}
        height={40}
        placeholder="Email"
        borderRadius={6}
        backgroundColor="#ffffff"
      />
      {/* {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null} */}
      <CustomButton
        onPress={handleChange}
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
