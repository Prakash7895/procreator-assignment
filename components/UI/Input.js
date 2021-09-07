import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import Card from "./Card";

const Input = (props) => {
  const [inputText, setInputText] = useState("");

  return (
    <Card style={{ ...styles.searchSection, ...props.style }}>
      <Ionicons
        style={styles.searchIcon}
        name="ios-search"
        size={20}
        color="#959fba"
      />
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        value={inputText}
        onChangeText={(text) => setInputText(text)}
      />
    </Card>
  );
};

export default Input;

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#edf1fa",
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    flex: 1,
    fontSize: 18,
  },
});
