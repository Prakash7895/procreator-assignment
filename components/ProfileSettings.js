import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { icons } from "../assets";
import SwitchCard from "./UI/SwitchCard";

const ProfileSettings = ({ navigation }) => {
  return (
    <ScrollView style={styles.otherSettings}>
      <TouchableOpacity
        style={styles.setting}
        onPress={() => {
          navigation.navigate("StorageManagement");
        }}
      >
        <Text style={styles.settingName}>Storage Management</Text>
        <Image source={icons.caretRightIcon} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.setting}
        onPress={() => {
          navigation.navigate("Devices");
        }}
      >
        <View>
          <Text style={styles.settingName}>Devices</Text>
          <Text style={{ color: "#7e8494" }}>iPhone, Macbook, iPad</Text>
        </View>
        <Image source={icons.caretRightIcon} />
      </TouchableOpacity>
      <SwitchCard
        style={styles.setting}
        textStyle={styles.settingName}
        title="Camera uploads"
      />
      <SwitchCard
        style={styles.setting}
        textStyle={styles.settingName}
        title="Use data for file transfer"
      />
    </ScrollView>
  );
};

export default ProfileSettings;

const styles = StyleSheet.create({
  otherSettings: {
    // borderWidth: 1,
    // borderColor: "red",
    marginTop: 30,
  },
  setting: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 16,
    paddingVertical: 20,
    paddingRight: 27,
    backgroundColor: "#f5f7fc",
    borderRadius: 7,
    marginBottom: 15,
  },
  settingName: {
    color: "#242833",
    fontSize: 16,
  },
});
