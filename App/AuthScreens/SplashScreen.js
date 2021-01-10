import React from "react";
import { Image, View, StyleSheet } from "react-native";

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

const Splash = () => (
  <ScreenContainer>
    <Image source={require("../../assets/splash.png")} />
  </ScreenContainer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Splash;
