import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

const ShoppingModal = ({ navigation }) => {
  const { colors } = useTheme();
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.headercontainer}>
        <TouchableOpacity onPress={() => alert("This is your wish list page")}>
          <MaterialIcons name="favorite-border" size={24} color={colors.text} />
        </TouchableOpacity>
        <Text style={([styles.texttitle], { color: colors.text })}>
          {" "}
          Your Bag{" "}
        </Text>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Ionicons name="close-outline" size={24} color={colors.text} />
        </TouchableOpacity>
      </View>

      <View style={styles.shopcontainer}>
        <SimpleLineIcons
          style={{ paddingBottom: 25 }}
          name="bag"
          size={64}
          color={colors.text}
        />
        <Text style={([styles.shoptext], { color: colors.text })}>
          Add items to your Shopping Bag
        </Text>
        <Button
          title="Shop What's New"
          color={colors.text}
          onPress={() => {
            navigation.navigate("ShopAll");
          }}
          style={{ borderRadius: 4, borderColor: "#000" }}
        />
      </View>
    </View>
  );
};
export default ShoppingModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    paddingTop: 20,
  },
  texttitle: {
    fontSize: 24,
    fontWeight: "bold",
    alignItems: "center",
  },
  headercontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    margin: 20,
    paddingTop: 10,
  },
  shopcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  shoptext: {
    margin: 5,
    fontSize: 20,
  },
});
