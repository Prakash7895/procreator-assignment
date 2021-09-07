import React from "react";
import { StyleSheet, View } from "react-native";
import Input from "./UI/Input";
import Card from "./UI/Card";
import HomeNavigator from "../navigation/HomeNavigator";

const StorageContent = () => {
  return (
    <Card style={styles.content}>
      <View style={styles.input}>
        <Input placeholder="Search" />
      </View>
      <HomeNavigator />
    </Card>
  );
};

export default StorageContent;

const styles = StyleSheet.create({
  content: {
    backgroundColor: "white",
    flex: 1,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  input: {
    padding: 25,
  },
});
