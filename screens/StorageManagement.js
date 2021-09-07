import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import PieChart from "../components/PieChart";
import StorageArea from "../components/StorageArea";

const StorageManagement = () => {
  const Tab = createMaterialTopTabNavigator();

  const spaceInfo = useSelector((state) => state.spaceInfo);
  return (
    <View style={styles.container}>
      <PieChart />
      <View style={{ paddingHorizontal: 25, marginBottom: 24 }}>
        <ScrollView horizontal>
          {spaceInfo.map((el) => {
            let style = {
              height: 16,
              width: 16,
              backgroundColor: "",
              borderRadius: 4,
              marginBottom: 6,
            };
            if (el.name.toLowerCase().includes("music")) {
              style.backgroundColor = "#2196f3";
            } else if (el.name.toLowerCase().includes("image")) {
              style.backgroundColor = "#ffc107";
            } else if (el.name.toLowerCase().includes("archive")) {
              style.backgroundColor = "#4ac367";
            } else if (el.name.toLowerCase().includes("document")) {
              style.backgroundColor = "#8d6e63";
            } else if (el.name.toLowerCase().includes("video")) {
              style.backgroundColor = "#00bcd4";
            } else if (el.name.toLowerCase().includes("other")) {
              style.backgroundColor = "#da5df5";
            }
            return (
              <View key={el.id} style={styles.spaceType}>
                <View style={style}></View>
                <Text>{el.name}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <NavigationContainer independent={true}>
        <Tab.Navigator
          initialRouteName="FOLDERS"
          sceneContainerStyle={{
            backgroundColor: "transparent",
          }}
        >
          <Tab.Screen
            name="LEAST USED"
            component={StorageArea}
            initialParams={{ fileType: "least-used" }}
          />
          <Tab.Screen
            name="LARGEST"
            component={StorageArea}
            initialParams={{ fileType: "largest" }}
          />
          <Tab.Screen
            name="LATEST ACCESSED"
            component={StorageArea}
            initialParams={{ fileType: "latest-accessed" }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default StorageManagement;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    // borderWidth: 1,
    // borderColor: "red",
  },
  spaceType: {
    marginRight: 20,
    flexDirection: "column",
    alignItems: "center",
  },
});
