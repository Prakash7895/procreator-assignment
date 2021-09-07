import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { Entypo } from "@expo/vector-icons";
import { icons } from "../assets";
import ListItemFile from "../components/ListItemFile";

const FilesInStorage = () => {
  const leastUsed = useSelector((state) => state.leastUsed);
  const largestFiles = useSelector((state) => state.largestFiles);
  const latestAccessed = useSelector((state) => state.latestAccessed);

  var filesToShow = [...leastUsed, ...largestFiles, ...latestAccessed];

  return (
    <View style={styles.container}>
      <ScrollView>
        {filesToShow.map((el) => {
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

export default FilesInStorage;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 30,
  },
});
