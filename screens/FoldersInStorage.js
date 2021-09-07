import React from "react";
import { useSelector } from "react-redux";
import { FlatList, StyleSheet } from "react-native";
import ListItemFolder from "../components/ListItemFolder";

const FoldersInStorage = () => {
  var folders = useSelector((state) => state.folders);
  return (
    <FlatList
      contentContainerStyle={styles.list}
      numColumns={2}
      columnWrapperStyle={{
        justifyContent: "space-evenly",
        width: "100%",
        marginTop: 25,
      }}
      data={folders}
      keyExtractor={(item) => item.id.toString()}
      renderItem={(item) => <ListItemFolder {...item.item} />}
    />
  );
};

export default FoldersInStorage;

const styles = StyleSheet.create({
  list: {
    flexDirection: "column",
    alignItems: "center",
  },
});
