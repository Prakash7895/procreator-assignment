import React from "react";
import { useSelector } from "react-redux";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { icons } from "../assets";
import ProfileSettings from "../components/ProfileSettings";
import { useIsFocused } from "@react-navigation/core";

const Profile = ({ navigation }) => {
  const spaceAvailable = useSelector((state) => state.spaceAvailable);
  const totalSpace = useSelector((state) => state.totalSpace);
  const focused = useIsFocused();

  return (
    <>
      {focused && (
        <StatusBar barStyle="light-content" backgroundColor="#e8efff" />
      )}
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Profile</Text>
          <TouchableOpacity>
            <Image source={icons.editPenIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.profileInfo}>
          <Image
            source={{
              uri: "https://goop-img.com/wp-content/uploads/2020/06/Mask-Group-2.png",
            }}
            style={styles.image}
          />
          <View style={styles.profileInfoInner}>
            <Text style={{ ...styles.headerText, fontSize: 18 }}>
              Jessie Roberts
            </Text>
            <Text style={{ color: "#7e8494", fontSize: 16 }}>
              1458 files . 25 folders
            </Text>
          </View>
        </View>
        <View style={styles.storageInfo}>
          <View style={styles.storageInfoInner}>
            <Text
              style={{ fontSize: 24, color: "#3c64c7", fontWeight: "bold" }}
            >
              {spaceAvailable.toString().split(".").join(",")} GB free
            </Text>
            <Text style={{ ...styles.text, fontSize: 18, fontWeight: "bold" }}>
              {" "}
              of {totalSpace} GB
            </Text>
          </View>
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
        <TouchableOpacity style={styles.increaseSpace}>
          <Text style={styles.btnText}>Increase storage space</Text>
        </TouchableOpacity>
        <ProfileSettings navigation={navigation} />
      </View>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    zIndex: 100,
    paddingHorizontal: 25,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  headerText: {
    fontSize: 34,
    color: "#345095",
    fontWeight: "bold",
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileInfoInner: {
    paddingLeft: 20,
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 30,
  },
  storageInfoInner: {
    display: "flex",
    flexDirection: "row",
  },
  storageInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  storageStatus: {
    marginTop: 10,
    height: 6,
    backgroundColor: "#dde6ff",
    borderRadius: 10,
    width: "100%",
  },
  text: {
    fontSize: 18,
    color: "#abc3fc",
    textAlignVertical: "bottom",
  },
  increaseSpace: {
    borderWidth: 2,
    borderColor: "#ff5998",
    borderRadius: 22,
    paddingVertical: 13,
    marginTop: 20,
  },
  btnText: {
    textAlign: "center",
    color: "#ff5998",
    fontSize: 16,
  },
});
