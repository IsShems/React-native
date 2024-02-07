import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleSignUp = () => {
    console.log("Signing up with:", username, password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.small1}>x</Text>
        <Text style={styles.big}>Sign Up</Text>
        <Text style={styles.small2}>Login</Text>
      </View>
      <View style={styles.inputs}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <View style={styles.passwordInputContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <Text style={styles.showColorText}>Show</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={[styles.checkbox, { backgroundColor: isChecked ? "#2f948a" : "#F5F5F5" }]}
            onPress={() => setIsChecked(!isChecked)}
          />
          <Text style={styles.checkText}>
            I would like to receive your newsletter and other promotional information.
          </Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={styles.forgetPassword}>
          Forgot your password?
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 80,
    alignItems: "center",
    top: 30,
  },
  small2: {
    fontSize: 16,
    lineHeight: 19.36,
    fontWeight: "500",
    color: "#2f948a",
  },
  small1: {
    fontSize: 16,
    lineHeight: 19.36,
    fontWeight: "500",
    color: "#a8a7a7",
  },
  big: {
    fontSize: 30,
    lineHeight: 36.31,
    fontWeight: "600",
  },
  inputs: {
    top: 60,
  },
  checkText: {
    marginBottom: 30,
    marginTop: 30,
    marginLeft: 10,
    width: 270,
  },
  passwordInputContainer: {
    position: "relative",
  },
  passwordInput: {
    padding: 8,
    width: 343,
    height: 50,
    borderRadius: 5,
    alignItems: "flex-start",
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    borderColor: "#ECECEC",
    borderWidth: 2,
    marginTop: 5,
    marginBottom: 5,
  },
  showColorText: {
    position: "absolute",
    top: 20,
    right: 10,
    color: "#2f948a",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderColor: "#ECECEC",
    borderWidth: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    padding: 8,
    width: 343,
    height: 50,
    borderRadius: 5,
    alignItems: "flex-start",
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    borderColor: "#ECECEC",
    borderWidth: 2,
    marginTop: 5,
    marginBottom: 5,
  },
  button: {
    backgroundColor: "#2f948a",
    padding: 10,
    borderRadius: 100,
    marginTop: 20,
    width: 343,
    height: 51,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  forgetPassword: {
    fontSize: 16,
    fontFamily: "Inter",
    lineHeight: 19.36,
    fontWeight: "600",
    color: "#2f948a",
    top: 10,
    left: 99,
  },
});

export default SignUpPage;
