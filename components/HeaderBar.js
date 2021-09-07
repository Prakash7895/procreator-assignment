import React from "react";
import { Dimensions, Image } from "react-native";
import { images } from "../assets";

const HeaderBar = (props) => {
  return (
    <Image
      source={props.image ? props.image : images.wave1Image}
      resizeMode="contain"
      style={{
        width: Dimensions.get("window").width,
        overflow: "hidden",
        height: 85,
        backgroundColor: props.backgroundColor
          ? props.backgroundColor
          : "transparent",
        zIndex: -100,
        // borderWidth: 1,
        // borderColor: "red",
      }}
    />
  );
};

export default HeaderBar;
