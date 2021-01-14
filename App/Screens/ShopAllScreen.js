import * as React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
} from "react-native";

import { SectionGrid } from "react-native-super-grid";
import { useTheme } from "@react-navigation/native";
import { Alert } from "react-native";
const { width, height } = Dimensions.get("window") / 0.75;
// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

const ShopAll = ({ navigation }) => {
  const { colors } = useTheme();
  const theme = useTheme();
  const viewRef = React.useRef < View > null;
  const [items, setItems] = React.useState([
    {
      name: "STYLE BY JM",
      subtitle: "Stacey Slip-on",
      price: "$298.00",
      code: "transparent",
      availability: "EXCLUSIVE",
      image: require("../../assets/images/Diegoboot1902.jpg"),
      id: "1",
    },
    {
      name: "STYLE BY JM",
      subtitle: "Jean-Michelle Cap-toe",
      price: "$398.00",
      code: "transparent",
      availability: "EXCLUSIVE",
      image: "../../assets/images/Diegoboot1902.jpg",
      id: "2",
    },
    {
      name: "STYLE BY JM",
      subtitle: "Diego Chelsea Boot",
      price: "$398.00",
      code: "transparent",
      availability: "EXCLUSIVE",
      image: "../../assets/images/Diegoboot1902.jpg",
      id: "3",
    },
    {
      name: "STYLE BY JM",
      subtitle: "Russey Desert Boot",
      price: "$398.00",
      code: "transparent",
      availability: "EXCLUSIVE",
      image: "../../assets/images/Diegoboot1902.jpg",
      id: "4",
    },
    {
      name: "STYLE BY JM",
      subtitle: "Matthew Chuka Boot",
      price: "$298.00",
      code: "transparent",
      availability: "EXCLUSIVE",
      image: "../../assets/images/Diegoboot1902.jpg",
      id: "5",
    },
    {
      name: "STYLE BY JM",
      subtitle: "David Loafers",
      price: "$298.00",
      code: "transparent",
      availability: "EXCLUSIVE",
      image: "../../assets/images/Diegoboot1902.jpg",
      id: "6",
    },
    {
      name: "STYLE BY JM",
      subtitle: "Louis Smoking Slipper",
      code: "transparent",
      price: "198.00",
      availability: "EXCLUSIVE",
      id: "7",
    },
    {
      name: "THE ROYAL GUARD",
      subtitle: "Single Breast Navy Blue Suit",
      price: "$980.00",
      code: "transparent",
      availability: "EXCLUSIVE TO STUDIO 139",
      id: "8",
    },
    {
      name: "THE ROYAL GUARD",
      subtitle: "Single Breast Grey Suit",
      price: "$980.00",
      code: "transparent",
      availability: "EXCLUSIVE TO STUDIO 139",
      id: "9",
    },
    {
      name: "THE ROYAL GUARD",
      subtitle: "Zegna Tuxedo",
      price: "$1,980.00",
      code: "transparent",
      availability: "EXCLUSIVE TO STUDIO 139",
      id: "10",
    },
    {
      name: "THE ROYAL GUARD",
      subtitle: "Loro Pina Dinner Jacket",
      price: "$980.00",
      code: "transparent",
      availability: "EXCLUSIVE TO STUDIO 139",
      id: "11",
    },
    {
      name: "THE ROYAL GUARD",
      subtitle: "Single Breast Navy Blue Suit",
      price: "$980.00",
      code: "transparent",
      availability: "EXCLUSIVE",
      id: "12",
    },
    {
      name: "139",
      subtitle: "White T-Shirt",
      price: "$58.00",
      code: "transparent",
      availability: "DESIGNED BY STUDIO 139",
      id: "13",
    },
    {
      name: "139",
      subtitle: "Denim Chore Coat",
      price: "$298.00",
      code: "transparent",
      availability: "DESIGNED BY STUDIO 139",
      id: "14",
    },
    {
      name: "139",
      subtitle: "5-pocket Denim",
      price: "$198.00",
      code: "transparent",
      availability: "DESIGNED BY STUDIO 139",
      id: "15",
    },
    {
      name: "139",
      subtitle: "Cotton Blazer",
      price: "$298.00",
      code: "transparent",
      availability: "DESIGNED BY STUDIO 139",
      id: "16",
    },
    {
      name: "139",
      subtitle: "Unlined Wool Blazer",
      price: "$298.00",
      code: "transparent",
      availability: "DESIGNED BY STUDIO 139",
      id: "17",
    },
    {
      name: "139",
      subtitle: "Track Suit",
      price: "$298.00",
      code: "transparent",
      availability: "DESIGNED BY STUDIO 139",
      id: "18",
    },
    {
      name: "139",
      subtitle: "Jake Sneakers",
      price: "$198.00",
      code: "transparent",
      availability: "DESIGNED BY STUDIO 139",
      id: "19",
    },
    {
      name: "139",
      subtitle: "139 x SBJM Loafers",
      price: "$298.00",
      code: "transparent",
      availability: "DESIGNED BY STUDIO 139",
      id: "20",
    },
  ]);

  return (
    <SectionGrid
      itemDimension={120}
      fixed
      spacing={10}
      style={{ color: colors.text }}
      sections={[
        {
          title: "STYLE BY JM",
          data: items.slice(0, 7),
        },
        {
          title: "THE ROYAL GUARD",
          data: items.slice(7, 12),
        },
        {
          title: "139",
          data: items.slice(12, 20),
        },
      ]}
      style={[styles.gridView, { color: colors.text }]}
      renderItem={({ item }) => (
        <View ref={viewRef}>
          <TouchableOpacity onPress={() => navigation.navigate("StyleByJM")}>
            <Text
              adjustsFontSizeToFit
              numberOfLines={1}
              style={[styles.itemName, { color: colors.text }]}
              onPress={() => item.id}
            >
              {item.name}
            </Text>
            <Text
              adjustsFontSizeToFit
              numberOfLines={1}
              style={[styles.itemCode, { color: colors.text }]}
            >
              {item.subtitle}
            </Text>
            <Text
              adjustsFontSizeToFit
              numberOfLines={1}
              style={[styles.itemPrice, { color: colors.text }]}
            >
              {item.price}
            </Text>
            <Text
              adjustsFontSizeToFit
              numberOfLines={1}
              style={[styles.itemCode, { color: colors.text }]}
            >
              {item.availability}
            </Text>
          </TouchableOpacity>
        </View>
      )}
      renderSectionHeader={({ section }) => (
        <TouchableOpacity onPress={() => {}}>
          <Text
            adjustsFontSizeToFit
            numberOfLines={1}
            style={styles.sectionHeader}
          >
            {section.title}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  gridView: {
    flex: 1,
    marginTop: 5,
  },
  itemContainer: {
    height: height,
    width: width,
  },
  itemName: {
    fontSize: 16,
    color: "#000",
    fontWeight: "600",
    paddingTop: 15,
  },
  itemPrice: {
    paddingTop: 10,
  },
  subtitle: { color: "#000" },
  itemCode: {
    fontWeight: "600",
    fontSize: 12,
    color: "#777",
  },
  sectionHeader: {
    flex: 1,
    fontSize: 15,
    fontWeight: "700",
    color: "#fff",
    backgroundColor: "#d3d3d3",
    padding: 5,
    paddingLeft: 5,
  },
  titleimage: {
    width: 150,
    height: 150,
    resizeMode: "cover",
  },
});

export default ShopAll;
