import React from "react";
import { useSelector } from "react-redux";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Pie from "react-native-pie";

const PieChart = () => {
  const spaceInfo = useSelector((state) => state.spaceInfo);
  let totalUsedSpace = spaceInfo.reduce(
    (prevSum, currValue) => currValue.space + prevSum,
    0
  );

  return (
    <View style={styles.container}>
      <Pie
        radius={100}
        innerRadius={90}
        sections={spaceInfo.map((el) => {
          let backgroundColor = "";
          if (el.name.toLowerCase().includes("music")) {
            backgroundColor = "#2196f3";
          } else if (el.name.toLowerCase().includes("image")) {
            backgroundColor = "#ffc107";
          } else if (el.name.toLowerCase().includes("archive")) {
            backgroundColor = "#4ac367";
          } else if (el.name.toLowerCase().includes("document")) {
            backgroundColor = "#8d6e63";
          } else if (el.name.toLowerCase().includes("video")) {
            backgroundColor = "#00bcd4";
          } else if (el.name.toLowerCase().includes("other")) {
            backgroundColor = "#da5df5";
          }
          return {
            percentage: (el.space / totalUsedSpace) * 100,
            color: backgroundColor,
          };
        })}
        dividerSize={6}
        strokeCap={"butt"}
      />

      <View style={styles.gauge}>
        <Text style={styles.gaugeText}>{totalUsedSpace + " GB"}</Text>
      </View>
    </View>
  );
};

export default PieChart;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").width * 0.75,
    width: Dimensions.get("window").width * 0.75,
    alignSelf: "center",
    // marginVertical: 24
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  gauge: {
    position: "absolute",
    // width: 100,
    // height: 160,
    alignItems: "center",
    justifyContent: "center",
  },
  gaugeText: {
    backgroundColor: "transparent",
    color: "#345095",
    fontSize: 20,
    fontWeight: "bold",
  },
});
