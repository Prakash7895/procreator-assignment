import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ListItemFile = (props) => {
  return (
    <View style={styles.fileItems}>
      {props.fileIcon ? (
        <Image style={{ width: 52, height: 52 }} source={props.fileIcon} />
      ) : (
        <Text style={{ width: 52, height: 52, textAlign: "center" }}>
          No Image
        </Text>
      )}
      <View style={styles.fileItemInner}>
        <View style={styles.fileInfo}>
          <Text style={styles.fileName}>{props.name}</Text>
          <Text style={styles.fileTypeAndSize}>{props.children}</Text>
        </View>
        <TouchableOpacity
          style={{
            paddingHorizontal: 5,
          }}
        >
          <Image source={props.moreIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ListItemFile;

const styles = StyleSheet.create({
  fileItems: {
    // borderWidth: 1,
    // borderColor: "red",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
  },
  fileItemInner: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  fileInfo: {
    paddingHorizontal: 16,
  },
  fileName: {
    fontWeight: "bold",
  },
  fileTypeAndSize: {
    color: "#7e8494",
  },
});
