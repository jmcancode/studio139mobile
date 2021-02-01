import * as React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  Alert,
  StatusBar,
} from "react-native";
import { Button, Divider } from "react-native-paper";
const { width } = Dimensions.get("screen");

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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          height: 50,
          paddingTop: 10,
        }}
      >
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
      <Divider />
      <View
        style={{
          flex: 1,
          width: 190,
          height: 250,
          // borderColor: "#777",
          // borderRadius: 5,
          // borderWidth: 1,
          margin: 5,
          marginTop: 55,
          justifyContent: "flex-end",
        }}
      >
        <TouchableOpacity onPress={() => Alert.alert("Product Page")}>
          <Image
            source={require("../../../assets/images/crocskin.jpg")}
            style={{
              resizeMode: "cover",
              height: 214,
              width: 190,
              borderRadius: 5,
            }}
          />
          <Text
            adjustsFontSizeToFit
            numberOfLines={1}
            style={styles.producttitle}
          >
            Product title
          </Text>
          <Text
            adjustsFontSizeToFit
            numberOfLines={1}
            style={styles.productdescription}
          >
            Product Description
          </Text>
          <Text adjustsFontSizeToFit numberOfLines={1} style={styles.cost}>
            $399.00
          </Text>
        </TouchableOpacity>
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
  cost: {
    paddingLeft: 10,
    paddingTop: 15,
  },
  producttitle: {
    textTransform: "uppercase",
    paddingLeft: 10,
    paddingTop: 10,
  },
  productdescription: {
    paddingLeft: 10,
  },
});

export default TheRoyalGuard;
