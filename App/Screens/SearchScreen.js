import * as React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Searchbar, Button } from "react-native-paper";
import { AuthContext } from "../context";
import { useTheme } from "@react-navigation/native";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export const Search = () => {
  const { signOut } = React.useContext(AuthContext);
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <View style={{ margin: 5, paddingTop: 35 }}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={{ backgroundColor: "transparent" }}
        />
      </View>
      <View style={styles.contentcontainer}>
        <Text style={{ fontSize: 25, fontWeight: "900", color: colors.text }}>
          Find what you're looking for
        </Text>
        <Text style={{ paddingTop: 10, paddingLeft: 5, color: colors.text }}>
          Search for designers, categories, and products
        </Text>
      </View>
      <Button color={colors.text} mode="text" onPress={() => signOut()}>
        Sign Out
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignContent: "space-between",
  },
  contentcontainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Search;
