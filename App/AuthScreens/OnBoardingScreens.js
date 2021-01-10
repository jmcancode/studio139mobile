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
          backgroundColor: "#303030",
          image: <Image source={require("../../assets/test.png")} />,
          title: "SHOP WITH CONFIDENCE",
          titleStyles: { fontWeight: "bold", color: "#f5f5f5" },
          subtitle: "Hand-chosen products from trusted brands.",
          subTitleStyles: { color: "#f5f5f5" },
        },
        {
          backgroundColor: "#2b2b2b",
          image: <Image source={require("../../assets/test.png")} />,
          title: "Lifestyle",
          titleStyles: { fontWeight: "bold", color: "#ffffff" },
          subtitle:
            "Learn tricks of the trade from style pros in JM's Journal.",
          subTitleStyles: { color: "#ffffff" },
        },
        {
          backgroundColor: "#1f1f1f1f",
          image: <Image source={require("../../assets/test.png")} />,
          title: "Personal Profile",
          titleStyles: { fontWeight: "bold", color: "#777777" },
          subtitle:
            "Where timless style meets strategy. Build the wardrobe of your dreams with our stylist program.",
          subTitleStyles: { color: "#777777" },
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
