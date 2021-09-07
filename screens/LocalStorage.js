import React from "react";
import { useSelector } from "react-redux";
import { Image, StyleSheet, ScrollView, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import Input from "../components/UI/Input";
import { icons } from "../assets/index";
import ListItemFile from "../components/ListItemFile";
import { StatusBar } from "expo-status-bar";

const LocalStorage = () => {
  const fileTypes = useSelector((state) => state.fileTypes);
  const localStorageFiles = useSelector((state) => state.localStorageFiles);

  return (
    <View style={styles.localStorage}>
      <StatusBar barStyle="light-content" backgroundColor="#e8efff" />
      <Text style={styles.header}>Local storage</Text>
      <View style={styles.input}>
        <Input placeholder="Search" />
      </View>
      <View
        style={{
          marginTop: 34,
          marginBottom: 29,
        }}
      >
        <ScrollView horizontal>
          {fileTypes.map((el) => {
            let src = null;
            if (el.name.toLowerCase().includes("image")) {
              src = icons.imageIcon;
            } else if (el.name.toLowerCase().includes("video")) {
              src = icons.videoIcon;
            } else if (el.name.toLowerCase().includes("music")) {
              src = icons.musicIcon;
            } else if (el.name.toLowerCase().includes("archive")) {
              src = icons.archiveIcon;
            }
            return (
              <View key={el.id} style={styles.typeItem}>
                <Image
                  style={{
                    height: 72,
                    width: 72,
                  }}
                  source={src}
                />
                <Text style={{ textAlign: "center" }}>{el.name}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <ScrollView>
        {localStorageFiles.map((el) => {
          return (
            <ListItemFile
              key={el.id}
              id={el.id}
              fileIcon={el.icon}
              name={el.name}
              moreIcon={icons.threeDots}
            >
              {el.fileExtension}
              <Entypo color="#7e8494" name="dot-single" size={13} />
              {el.size}
            </ListItemFile>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default LocalStorage;

const styles = StyleSheet.create({
  localStorage: {
    paddingHorizontal: 30,
    flex: 1,
    backgroundColor: "white",
    zIndex: 100,
  },
  header: {
    fontSize: 34,
    color: "#345095",
  },
  input: {
    paddingTop: 25,
  },
  typeItem: {
    padding: 13,
  },
});
