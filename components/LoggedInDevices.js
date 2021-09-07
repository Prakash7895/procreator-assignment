import React from "react";
import { StyleSheet, Text, View } from "react-native";

const LoggedInDevices = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        List Of logged In devices and other functionalties
      </Text>
    </View>
  );
};

export default LoggedInDevices;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
  },
});
