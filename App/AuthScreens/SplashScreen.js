import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
// import firebase from "../../firebase"




const Splash = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" />
  </View>
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
