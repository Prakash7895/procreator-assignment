import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MyContext from "../context/MyContext";
import Onboarding from "../screens/Onboarding";
import UploadOptions from "../screens/UploadOptions";
import TabNavigator from "./TabNavigator";

const MainNavigator = () => {
  const Stack = createNativeStackNavigator();
  const [isOnboarding, setIsOnboarding] = useState(false);

  const MyTheme = {
    ...DefaultTheme,
    ...DarkTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "white",
    },
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={MyTheme}>
        {isOnboarding ? (
          <MyContext.Provider
            value={{
              isOnboarding: isOnboarding,
              onChange: () => {
                setIsOnboarding(false);
              },
            }}
          >
            <Stack.Navigator initialRouteName="Onboarding">
              <Stack.Screen
                options={{ headerShown: false }}
                name="Onboarding"
                component={Onboarding}
              />
            </Stack.Navigator>
          </MyContext.Provider>
        ) : (
          <Stack.Navigator initialRouteName="TabNavigator">
            <Stack.Screen
              options={{ headerShown: false }}
              name="TabNavigator"
              component={TabNavigator}
            />
            <Stack.Screen
              options={{
                presentation: "transparentModal",
                headerShown: false,
              }}
              name="UploadOptions"
              component={UploadOptions}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default MainNavigator;
