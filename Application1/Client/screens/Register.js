import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CustomTextInput from "../components/CustomTextInput";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        padding: 16,
        backgroundColor: "#f1f1f1",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "500" }}>Register</Text>
      <CustomTextInput
        title={"Name"}
        value={name}
        onChangeText={(t) => setName(t)}
      />
      <CustomTextInput
        title={"Email"}
        value={email}
        onChangeText={(t) => setEmail(t)}
      />
      <CustomTextInput
        title={"Password"}
        secureTextEntry={true}
        value={password}
        onChangeText={(t) => setPassword(t)}
      />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
