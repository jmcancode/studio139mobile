import * as React from "react";
import { Surface, Text, Button, Divider, useTheme } from "react-native-paper";
import {
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  StatusBar,
  Image,
} from "react-native";

const width = Dimensions.get("window").width / 1.1;

const ShopLanding = ({ navigation }) => {
  const { colors } = useTheme();
  const theme = useTheme();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <StatusBar barStyle={theme.dark ? "light-content" : "dark-content"} />
      <View style={styles.container}>
        <Surface style={styles.surface}>
          <Button
            mode="text"
            onPress={() => {
              navigation.navigate("ShopAll");
            }}
            color={colors.text}
          >
            Shop All
          </Button>
        </Surface>
        <Surface style={styles.surface}>
          <Button
            mode="text"
            onPress={() => {
              navigation.navigate("TheRoyalGuard");
            }}
            color={colors.text}
          >
            footwear
          </Button>
        </Surface>
        <Surface style={styles.surface}>
          <Button
            mode="text"
            onPress={() => {
              navigation.navigate("StudioOne");
            }}
            color={colors.text}
          >
            Suits
          </Button>
        </Surface>
        <Surface style={styles.surface}>
          <Button
            mode="text"
            onPress={() => {
              navigation.navigate("ShopAll");
            }}
            color={colors.text}
          >
            bags
          </Button>
        </Surface>
        <Surface style={styles.surface}>
          <Button
            mode="text"
            onPress={() => {
              navigation.navigate("ShopAll");
            }}
            color={colors.text}
          >
            leather care
          </Button>
        </Surface>
        <Surface style={styles.surface}>
          <Button
            mode="text"
            onPress={() => {
              navigation.navigate("ShopAll");
            }}
            color={colors.text}
          >
            home goods
          </Button>
        </Surface>
      </View>
    </ScrollView>
  );
};

export default ShopLanding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  surface: {
    padding: 8,
    height: 180,
    width: width,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
  },
});
