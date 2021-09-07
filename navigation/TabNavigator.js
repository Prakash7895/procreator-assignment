import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import LocalStorage from "../screens/LocalStorage";
import Notifications from "../screens/Notifications";
import { Image, Keyboard, View } from "react-native";
import ProfileNavigator from "./ProfileNavigator";
import { icons, images } from "../assets";
import HeaderBar from "../components/HeaderBar";

const CreatePlaceholder = () => (
  <View style={{ flex: 1, backgroundColor: "blue" }} />
);

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerBackground: () => {
          return <HeaderBar />;
        },
        tabBarStyle: {
          height: 83,
        },
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? icons.homeSelectedIcon : icons.homeIcon;
          } else if (route.name === "LocalStorage") {
            iconName = focused
              ? icons.localstorageSelectedIcon
              : icons.localstorageIcon;
          } else if (route.name === "CreatePlaceholder") {
            iconName = icons.plusIcon;
          } else if (route.name === "Notifications") {
            iconName = focused
              ? icons.notificationSelectedIcon
              : icons.notificationIcon;
          } else if (route.name === "ProfileNavigator") {
            iconName = focused ? icons.profileSelectedIcon : icons.profileIcon;
          }
          return <Image source={iconName} />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "",
          headerBackground: () => (
            <HeaderBar image={images.wave2Image} backgroundColor={"#4274eb"} />
          ),
        }}
      />
      <Tab.Screen
        name="LocalStorage"
        component={LocalStorage}
        options={{
          title: "",
        }}
      />
      <Tab.Screen
        name="CreatePlaceholder"
        component={CreatePlaceholder}
        options={{
          title: "",
        }}
        listeners={({ navigation }) => ({
          tabPress: (event) => {
            event.preventDefault();
            Keyboard.dismiss();
            navigation.navigate("UploadOptions");
          },
        })}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          title: "",
        }}
      />
      <Tab.Screen
        name="ProfileNavigator"
        component={ProfileNavigator}
        options={{
          title: "",
          headerBackground: () => <HeaderBar />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
