import React from "react";
import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import { Card, Button, Title, Paragraph } from "react-native-paper";
import { useTheme } from "@react-navigation/native";

const { width } = Dimensions.get("screen");
const { height } = Dimensions.get("screen");

const Discover = ({ navigation }) => {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Card style={styles.card}>
          <Card.Cover
            style={{ resizeMode: "contain" }}
            source={{ uri: "https://picsum.photos/700" }}
          />
          <Card.Title
            style={{ color: colors.text }}
            title="Whats New"
            subtitle="New story subtitle"
          />
          <Card.Actions>
            <Button
              color={colors.text}
              onPress={() => {
                navigation.navigate("DiscoverDetail");
              }}
            >
              Read More
            </Button>
          </Card.Actions>
        </Card>
        <Card style={styles.card}>
          <Card.Cover
            style={{ resizeMode: "contain" }}
            source={{ uri: "https://picsum.photos/701" }}
          />
          <Card.Title
            style={{ color: colors.text }}
            title="Menswear"
            subtitle="New story subtitle"
          />
          <Card.Actions>
            <Button
              color={colors.text}
              onPress={() => {
                navigation.navigate("DiscoverDetail");
              }}
            >
              Read More
            </Button>
          </Card.Actions>
        </Card>
        <Card style={styles.card}>
          <Card.Cover
            style={{ resizeMode: "contain" }}
            source={{ uri: "https://picsum.photos/702" }}
          />
          <Card.Title
            style={{ color: colors.text }}
            title="Grooming"
            subtitle="New story subtitle"
          />
          <Card.Actions>
            <Button
              color={colors.text}
              onPress={() => {
                navigation.navigate("DiscoverDetail");
              }}
            >
              Read More
            </Button>
          </Card.Actions>
        </Card>
        <Card style={styles.card}>
          <Card.Cover
            style={{ resizeMode: "contain" }}
            source={{ uri: "https://picsum.photos/703" }}
          />
          <Card.Title
            style={{ color: colors.text }}
            title="Watches"
            subtitle="New story subtitle"
          />
          <Card.Actions>
            <Button
              color={colors.text}
              onPress={() => {
                navigation.navigate("DiscoverDetail");
              }}
            >
              Read More
            </Button>
          </Card.Actions>
        </Card>
        <Card style={styles.card}>
          <Card.Cover
            style={{ resizeMode: "contain" }}
            source={{ uri: "https://picsum.photos/704" }}
          />
          <Card.Title
            style={{ color: colors.text }}
            title="Lifestyle"
            subtitle="New story subtitle"
          />
          <Card.Actions>
            <Button
              color={colors.text}
              onPress={() => {
                navigation.navigate("DiscoverDetail");
              }}
            >
              Read More
            </Button>
          </Card.Actions>
        </Card>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    margin: 5,
    width: width / 1.1,
    height: 320,
  },
});

export default Discover;
