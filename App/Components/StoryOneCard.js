import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: width,
    height: height / 6,
    backgroundColor: "transparent",
    marginBottom: 10,
  },
  text: {
    textAlign: "center",
    fontSize: 28,
    textTransform: "uppercase",
    color: "#000",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    padding: 4,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    marginBottom: 5,
  },
});

const image = {
  uri: "https://picsum.photos/702",
};

const StoryOne = () => {
  return (
    <ScrollView>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.container}>
          <Text adjustsFontSizeToFit numberOfLines={2} style={styles.text}>
            Behind the Brand
          </Text>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default StoryOne;
