import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { images } from "../assets";

const Notifications = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#e8efff" />
      <Text style={styles.header}>Notifications</Text>
      <ImageBackground
        source={images.notificationBackground}
        resizeMode="contain"
        style={styles.image}
      >
        <Text style={styles.text}>No notifications yet</Text>
        <Text style={styles.text1}>
          Here you will see the external changes in your shared folders, tags
          from your peers and other updates
        </Text>
      </ImageBackground>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 25,
    zIndex: 10,
  },
  header: {
    fontSize: 34,
    color: "#345095",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    margin: 10,
    flexDirection: "column",
    alignItems: "center",
  },
  text: {
    color: "#345095",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 8,
  },
  text1: {
    textAlign: "center",
    paddingHorizontal: 15,
    marginBottom: 80,
    color: "#5d6373",
    fontSize: 15,
  },
});
