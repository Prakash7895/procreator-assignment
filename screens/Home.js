import { useIsFocused } from "@react-navigation/core";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StorageContent from "../components/StorageContent";
import Welcome from "../components/Welcome";

const Home = () => {
  const focused = useIsFocused();
  return (
    <View style={styles.home}>
      {focused && (
        <StatusBar barStyle="light-content" backgroundColor="#89aafa" />
      )}
      <Welcome />
      <StorageContent />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: "rgb(66, 116, 235)",
    // zIndex: 10,
  },
});
