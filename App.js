import React from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import MainNavigator from "./navigation/MainNavigator";
import MainReducer from "./store/reducer";

const store = createStore(MainReducer);

export default function App() {
  return (
    <Provider store={store}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <MainNavigator />
      </TouchableWithoutFeedback>
    </Provider>
  );
}
