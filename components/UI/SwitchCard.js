import React, { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";

const SwitchCard = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View style={props.style}>
      <Text style={props.textStyle}>{props.title}</Text>
      <Switch
        trackColor={{ true: "#5786f8", false: "#959fba" }}
        thumbColor="white"
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => setIsEnabled((prevState) => !prevState)}
        value={isEnabled}
      />
    </View>
  );
};

export default SwitchCard;

const styles = StyleSheet.create({});
