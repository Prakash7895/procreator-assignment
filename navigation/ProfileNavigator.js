import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LoggedInDevices from "../components/LoggedInDevices";
import Profile from "../screens/Profile";
import StorageManagement from "../screens/StorageManagement";

const ProfileNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        options={{
          headerShown: false,
          title: "",
        }}
        name="Profile"
        component={Profile}
      />
      <Stack.Screen
        options={{
          headerShadowVisible: false,
        }}
        name="StorageManagement"
        component={StorageManagement}
      />
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          title: "Logged In Devices",
        }}
        name="Devices"
        component={LoggedInDevices}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
