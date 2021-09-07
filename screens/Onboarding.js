import React, { useContext } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { icons, images } from "../assets";
import MyContext from "../context/MyContext";

const Onboarding = () => {
  const context = useContext(MyContext);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={images.onBoardingImage}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.text}>Your cloud storage</Text>
        <Text style={styles.text}>safe and sound</Text>
        <TouchableOpacity
          onPress={() => {
            context.onChange();
          }}
        >
          <Image source={icons.goHomeIcon} style={styles.goHome} />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  text: {
    color: "#3c65c7",
    marginRight: 25,
    fontSize: 24,
    fontWeight: "bold",
  },
  goHome: {
    marginTop: 17,
    marginRight: 45,
    marginBottom: 32,
  },
});
