import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import FilesInStorage from "../screens/FilesInStorage";
import FoldersInStorage from "../screens/FoldersInStorage";

const HomeNavigator = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="FOLDERS"
      sceneContainerStyle={{
        backgroundColor: "transparent",
      }}
    >
      <Tab.Screen name="FILES" component={FilesInStorage} />
      <Tab.Screen name="FOLDERS" component={FoldersInStorage} />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
