import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

const LogInPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleLogin = () => {
    console.log("Logging in with:", username, password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.big}>Log In</Text>
      </View>
      <View style={styles.inputs}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={username}
          onChangeText={(text) => setUsername(text)}
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
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <Text style={styles.forgotPassword}>
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
  showColorText: {
    position: "absolute",
    top: 20,
    right: 10,
    color: "#2f948a",
  },
  big: {
    fontSize: 30,
    lineHeight: 36.31,
    fontWeight: "600",
  },
  inputs: {
    top: 60,
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
    marginTop: 200,
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
  forgotPassword: {
    fontSize: 16,
    fontFamily: "Inter",
    lineHeight: 19.36,
    fontWeight: "600",
    color: "#2f948a",
    top: 10,
    left: 99,
  },
});

export default LogInPage;
