import React, { useState } from "react";
// react native
import {
  View,
  Alert,
  StyleSheet,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
// react navigation
import { useTheme } from "@react-navigation/native";
// custom components
import FeatureCard from "../Components/FeatureCard";
import ShopFeature from "../Components/ShopFeatureCard";
import ShopNewCard from "../Components/ShopNewCard";
import StoryOne from "../Components/StoryOneCard";
import StyleCard from "../Components/StyleCard";

const Home = ({ navigation }) => {
  const { colors } = useTheme();
  const theme = useTheme();
  return (
    <>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <StatusBar barStyle={theme.dark ? "light-content" : "dark-content"} />
          <FeatureCard />
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ShopLanding");
              }}
            >
              <ShopFeature />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <ShopNewCard />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <StoryOne />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <StyleCard />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
});

export default Home;
