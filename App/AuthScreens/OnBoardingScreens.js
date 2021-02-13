import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

import Onboarding from "react-native-onboarding-swiper";

const Dots = ({ selected }) => {
  let backgroundColor;

  backgroundColor = selected ? "rgba(0, 0, 0, 0.3)" : "rgba(0, 0, 0, 0.1)";

  return (
    <View
      style={{
        width: 6,
        height: 6,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};

const Skip = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={{ fontSize: 16, color: "#ffffff" }}>Skip</Text>
  </TouchableOpacity>
);

const Next = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={{ fontSize: 16, color: "#ffffff" }}>Next</Text>
  </TouchableOpacity>
);

const Done = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={{ fontSize: 16, color: "#ffffff" }}>Done</Text>
  </TouchableOpacity>
);

const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={() => navigation.replace("Sign-In")}
      onDone={() => navigation.navigate("SignUp")}
      pages={[
        {
          backgroundColor: "#d3d3d3",
          image: <Image source={require("../../assets/test.png")} />,
          title: "PREMIUM MENSWEAR",
          titleStyles: { fontWeight: "bold", color: "#f5f5f5" },
          subtitle: "Hand-chosen products from trusted brands.",
          subTitleStyles: { color: "#f5f5f5" },
        },
        {
          backgroundColor: "#3f3f3f",
          image: <Image source={require("../../assets/test.png")} />,
          title: "TIMELESS SELECTION",
          titleStyles: { fontWeight: "bold", color: "#ffffff" },
          subtitle:
            "Learn tricks of the trade from style pros in JM's Journal.",
          subTitleStyles: { color: "#ffffff" },
        },
        {
          backgroundColor: "#151515",
          image: <Image source={require("../../assets/test.png")} />,
          title: "TAILORED PROFILES",
          titleStyles: { fontWeight: "bold", color: "#f5f5f5" },
          subtitle:
            "Where timless style meets strategy. Build the wardrobe of your dreams with our stylist program.",
          subTitleStyles: { color: "#f5f5f5" },
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
