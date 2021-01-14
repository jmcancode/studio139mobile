import * as React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  View,
  Text,
  StatusBar,
} from "react-native";
import { Button } from "react-native-paper";
const { width } = Dimensions.get("screen").width;

const TheRoyalGuard = () => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar hidden />
      <View style={styles.heroimage}>
        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.text}>
          The Royal Guard{" "}
        </Text>
        <View>
          <Text
            adjustsFontSizeToFit
            numberOfLines={3}
            style={styles.description}
          >
            Easy pieces. Smart details. Enduring style. Like your own wardrobe,
            Studio 139's in-house line139 is always evolving. We are pleased to
            introduce our new collection, which includes an array of timeless
            luxury pieces, sourced from the most sought-after craftspeople in
            the world.
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Button
          color="#1f1f1f"
          mode="text"
          onPress={() => console.log("Refine your search")}
        >
          {" "}
          Refine
        </Button>
        <Button
          color="#1f1f1f"
          mode="text"
          onPress={() => console.log("Sort by: Size, Color, etc")}
        >
          {" "}
          Sort by
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heroimage: {
    flex: 1,
    width: width,
    height: 250,
    backgroundColor: "#1f1f1f",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 150,
    paddingLeft: 10,
    textTransform: "uppercase",
  },
  description: {
    fontSize: 10,
    paddingLeft: 10,
    paddingTop: 10,
    color: "#777",
  },
});

export default TheRoyalGuard;
