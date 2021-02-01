import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  Dimensions,
  View,
  Text,
  StatusBar,
  Alert,
  Image,
  TouchableOpacity,
} from "react-native";
import { Button, Divider } from "react-native-paper";

const { width } = Dimensions.get("screen").width;

const StyleByJm = () => {
  return (
    <>
      <ScrollView style={styles.container}>
        <StatusBar hidden />
        <View style={styles.heroimage}>
          <Text adjustsFontSizeToFit numberOfLines={1} style={styles.text}>
            Style by JM{" "}
          </Text>
          <View>
            <Text
              adjustsFontSizeToFit
              numberOfLines={3}
              style={styles.description}
            >
              Designed in San Antonio, Texas and handmade in Almansa, Spain.
              Style by JM is a baddass leather goods brand.
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
        <View>
          <Divider />
        </View>
        <View
          style={{
            flex: 1,
            width: 190,
            height: 250,
            // borderColor: "#777",
            // borderRadius: 5,
            // borderWidth: 1,
            margin: 5,
            marginTop: 25,
            justifyContent: "flex-end",
          }}
        >
          <TouchableOpacity onPress={() => Alert.alert("Product Page")}>
            <Image source={require("../../../assets/images/crocskin.jpg")} style={{resizeMode:"cover", height: 214, width: 190, borderRadius: 5 }}/>
            <Text
              adjustsFontSizeToFit
              numberOfLines={1}
              style={styles.producttitle}
            >
              Product title
            </Text>
            <Text adjustsFontSizeToFit numberOfLines={1} style={styles.cost}>
              $399.00
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
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
  producttitle: {
    textTransform: "uppercase",
    paddingLeft: 10,
    paddingTop: 10,
  },
  cost: {
    paddingLeft: 10,
  },
});

export default StyleByJm;
