import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { icons } from "../assets";

const UploadOptions = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.options}>
        <View style={styles.subOptions}>
          <TouchableOpacity>
            <Image source={icons.scanIcon} />
            <Text style={styles.text}>Scan</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              position: "relative",
              top: -30,
            }}
          >
            <Image source={icons.cameraIcon} />
            <Text style={styles.text}>Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={icons.uploadIcon} />
            <Text style={styles.text}>Upload</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image source={icons.closeIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UploadOptions;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  options: {
    padding: 30,
    paddingTop: 70,
    backgroundColor: "white",
    width: "100%",
    alignItems: "center",
    borderTopRightRadius: 150,
    borderTopLeftRadius: 150,
  },
  subOptions: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  text: {
    textAlign: "center",
    marginTop: 10,
  },
});
