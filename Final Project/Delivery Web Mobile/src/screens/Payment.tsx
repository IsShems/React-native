import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import CustomTextInput from "../components/Unknown/CustomTextInput";
import CustomButton from "../components/Unknown/CustomButton";
import { BaseText } from "../components/Unknown/DesignSystem";
import CardBackIcon from "../icons/CardBackIcon";
import SmallMasterCardIcon from "../icons/SmallMasterCardIcon";
import MasterCardIcon from "../icons/MasterCardIcon";
import { useAuth } from "../context/AuthContext";
import { Settings } from "../types/Settings";

interface PaymentProps {
  route: any;
  navigation: any;
}

const Payment: React.FC<PaymentProps> = ({ route, navigation }) => {
  const [newСardNumber, setnewCardNumber] = useState(""); 
  const [newСardName, setnewСardName] = useState(""); 
  const [newExpirationDate, setnewExpirationDate] = useState(""); 
  const [newСardCVC, setnewСardCVC] = useState(""); 
  const { userSettings, setSettings } = useAuth();

  const handleSave = () => {
    if (userSettings) {
      let updatedSettings: Settings = { ...userSettings };

      if (newСardNumber.trim() !== "") {
        updatedSettings.cardDetails.cardNumber = newСardNumber.trim();
      }
      if (newСardName.trim() !== "") {
        updatedSettings.cardDetails.cardHolder = newСardName.trim();
      }
      if (newExpirationDate.trim() !== "") {
        updatedSettings.cardDetails.expirationDate = newExpirationDate.trim();
      }
      if (newСardCVC.trim() !== "") {
        updatedSettings.cardDetails.cvc = newСardCVC.trim();
      }

      setSettings(updatedSettings);
    }
    navigation.navigate("Checkout");
  };


  return (
    <View>
      <ScrollView>
      <BaseText
        marginTop={20}
        fontSize={30}
        marginLeft={20}
        weight="semiBold"
        text="Credit / Debit card"
        color="#2D0C57"
      />
      <View style={styles.card}>
        <CardBackIcon />
        <View style={styles.cardDetails}>
          <View style={styles.masterCard}>
          <MasterCardIcon/>
          </View>
          <Text style={styles.cardNumber}>{`${userSettings?.cardDetails.cardNumber}`}</Text>
          <View style={styles.cardbottom} >
          <Text style={styles.cardText}>{`${userSettings?.cardDetails.cardHolder.toUpperCase()}`}</Text>
          <Text style={styles.cardExpireDate}>{`${userSettings?.cardDetails.expirationDate}`}</Text>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <BaseText
          marginTop={10}
          fontSize={18}
          weight="normal"
          text="Name"
          color="#2D0C57"
        />
        <CustomTextInput
          alignSelf="center"
          width={363}
          value={newСardName}
          onChangeText={(value) => setnewСardName(value)}
          marginLeft={30}
          height={50}
          placeholder={`${userSettings?.cardDetails.cardHolder}`}
          borderRadius={10}
          backgroundColor="#ffffff"
        />
        <BaseText
          marginTop={10}
          fontSize={18}
          weight="normal"
          text="Card Number"
          color="#2D0C57"
        />
        <View>
          <CustomTextInput
            alignSelf="center"
            width={363}
            height={50}
            value={newСardNumber}
            onChangeText={(value) => setnewCardNumber(value)}
            marginLeft={30}
            placeholder={`${userSettings?.cardDetails.cardNumber}`}
            borderRadius={10}
            backgroundColor="#FFFFFF"
          />
          <View style={styles.showButton}>
            <SmallMasterCardIcon />
          </View>
        </View>

        <View>
          <View style={styles.bottomContainer}>
            <View>
              <BaseText
                marginTop={10}
                fontSize={18}
                weight="normal"
                text="Expiry date"
                color="#2D0C57"
              />
              <CustomTextInput
                alignSelf="center"
                width={150}
                height={50}
                value={newExpirationDate}
                onChangeText={(value) => setnewExpirationDate(value)}
                placeholder={`${userSettings?.cardDetails.expirationDate}`}
                borderRadius={6}
                backgroundColor="#FFFFFF"
              />
            </View>
            <View>
              <BaseText
                marginTop={10}
                marginLeft={30}
                fontSize={18}
                weight="normal"
                text="CVC"
                color="#2D0C57"
              />
              <CustomTextInput
                alignSelf="center"
                width={150}
                marginLeft={30}
                height={50}
                value={newСardCVC}
                onChangeText={(value) => setnewСardCVC(value)}
                placeholder={`${userSettings?.cardDetails.cvc}`}
                borderRadius={6}
                backgroundColor="#FFFFFF"
              />
            </View>
          </View>
        </View>
        <CustomButton
          onPress={handleSave}
          marginTop={40}
          width={363}
          height={50}
          marginLeft={30}
          alignSelf="center"
          borderRadius={10}
          backgroundColor="#0BCE83"
        >
          <BaseText
            fontSize={15}
            alignSelf="center"
            weight="semiBold"
            text="USE THIS CARD"
            color="#FFFFFF"
          />
        </CustomButton>
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 0,
    paddingLeft: 20,
    paddingRight: 50,
    marginTop: 10,
  },
  card: {
    width: 300,
    marginLeft: 10,
    marginTop: 10,
  },
  masterCard: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 270,
  },
  showButton: {
    position: "absolute",
    bottom: 15,
    left: 300,
  },
  bottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    justifyContent: "space-between",
  },
  cardDetails: {
    position: "absolute",
    top: 10,
    left: 10,
    right: 10,
  },
  cardText: {
    color: "#FFFFFF",
    fontSize: 18,
    marginBottom: 5,
    marginLeft: 5,
  },
  cardNumber: {
    color: "#FFFFFF",
    fontSize: 25,
    marginTop: 30,
    marginLeft: 30,
    marginBottom: 50,
  },
  cardExpireDate: {
    color: "#FFFFFF",
    fontSize: 18,
    marginBottom: 5,
    marginLeft: 120,
  },
  cardbottom: {
    flexDirection: "row",
  },
  numberInput: {
    flexDirection: "row",
  }
});

export default Payment;
