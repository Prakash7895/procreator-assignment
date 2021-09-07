import React from "react";
import { useSelector } from "react-redux";
import { Image, StyleSheet, Text, View } from "react-native";
import { icons } from "../assets";
import { TouchableOpacity } from "react-native-gesture-handler";

const Welcome = () => {
  const userName = useSelector((state) => state.userName);
  const spaceAvailable = useSelector((state) => state.spaceAvailable);
  const totalSpace = useSelector((state) => state.totalSpace);

  return (
    <View style={styles.welcome}>
      <Text style={styles.greeting}>{"Hello " + userName + ","}</Text>
      <Text style={styles.text}>at the moment you have</Text>
      <View style={styles.storageInfo}>
        <View style={styles.storageInfoInner}>
          <Text style={{ fontSize: 24, color: "white" }}>
            {spaceAvailable.toString().split(".").join(",")} GB
          </Text>
          <Text style={{ ...styles.text, fontSize: 18 }}>
            {" "}
            of {totalSpace} GB free
          </Text>
        </View>
        <TouchableOpacity>
          <Image source={icons.arrowUpIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.storageStatus}>
        <View
          style={{
            width: ((totalSpace - spaceAvailable) / totalSpace) * 100 + "%",
            backgroundColor: "#ff6aa2",
            borderRadius: 10,
            height: 6,
          }}
        ></View>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  welcome: {
    padding: 30,
  },
  greeting: {
    fontSize: 34,
    color: "white",
  },
  text: {
    fontSize: 20,
    color: "#abc3fc",
    textAlignVertical: "bottom",
  },
  storageInfoInner: {
    display: "flex",
    flexDirection: "row",
  },
  storageInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  storageStatus: {
    marginTop: 10,
    height: 6,
    backgroundColor: "#3c64c7",
    borderRadius: 10,
    width: "100%",
  },
});
