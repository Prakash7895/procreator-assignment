import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { Entypo } from "@expo/vector-icons";
import { icons } from "../assets";
import ListItemFile from "./ListItemFile";

const StorageArea = ({ route }) => {
  const leastUsed = useSelector((state) => state.leastUsed);
  const largestFiles = useSelector((state) => state.largestFiles);
  const latestAccessed = useSelector((state) => state.latestAccessed);

  var toShow = [];
  if (route.params.fileType === "least-used") {
    toShow = leastUsed;
  } else if (route.params.fileType === "largest") {
    toShow = largestFiles;
  } else {
    toShow = latestAccessed;
  }

  return (
    <ScrollView style={styles.container}>
      {toShow.map((el) => {
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
            {route.params.fileType === "least-used"
              ? el.used + " times"
              : route.params.fileType === "largest"
              ? el.size
              : el.lastAccessed}
          </ListItemFile>
        );
      })}
    </ScrollView>
  );
};

export default StorageArea;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
  },
});
