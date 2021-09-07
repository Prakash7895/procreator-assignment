import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { icons } from "../assets";
import Card from "./UI/Card";

const ListItemFolder = (props) => {
  //   console.log("PROPS : ", props);
  return (
    <Card style={styles.listItem}>
      <View style={styles.head}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 16,
            flexWrap: "wrap",
            paddingRight: 5,
          }}
        >
          {props.name}
        </Text>
        <Image source={icons.threeDots} />
      </View>
      <View style={styles.folderInfo}>
        <Text style={styles.folderInfoText}>{props.fileAvailable + " f"}</Text>
        <Entypo color="#7e8494" name="dot-single" size={13} />
        <Text style={styles.folderInfoText}>{props.spaceUsed}</Text>
      </View>
      <View style={styles.sharedIcons}>
        {props.sharedWith.map((el, idx) => {
          let styll = { ...styles.sharedImage };
          if (idx > 3) return null;
          if (idx > 0) {
            styll = {
              ...styll,
              right: 14 * idx,
            };
          }
          if (idx === 3) {
            return (
              <Text
                key={el.id.toString()}
                style={{
                  ...styll,
                  backgroundColor: "#242833",
                  color: "white",
                  textAlign: "center",
                  textAlignVertical: "center",
                }}
              >
                {"+" + (props.sharedWith.length - idx)}
              </Text>
            );
          }
          return (
            <Image
              style={styll}
              key={el.id.toString()}
              source={{ uri: el.image }}
            />
          );
        })}
      </View>
    </Card>
  );
};

export default ListItemFolder;

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "#f5f7fc",
    padding: 20,
    margin: "auto",
    minWidth: "40%",
    maxWidth: "40%",
  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    // borderWidth: 1,
    // borderColor: "green",
  },
  folderInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  folderInfoText: {
    color: "#7e8494",
  },
  sharedIcons: {
    flexDirection: "row",
    paddingTop: 20,
  },
  sharedImage: {
    borderWidth: 1,
    borderColor: "green",
    width: 28,
    height: 28,
    borderRadius: 50,
  },
  overlap: {
    right: 14,
  },
});
