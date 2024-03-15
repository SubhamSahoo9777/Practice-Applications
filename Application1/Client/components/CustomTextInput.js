import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const CustomTextInput = ({
  title,
  secureTextEntry = false,
  keyboardType = "default",
  onChangeText,
  value,
}) => {
  return (
    <View style={{ width: "100%", marginTop: 10 }}>
      <Text>{title || "Name"}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        value={value}
        style={{
          borderWidth: 1,
          width: "100%",
          marginTop: 8,
          borderRadius: 5,
          padding: 5,
        }}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({});
