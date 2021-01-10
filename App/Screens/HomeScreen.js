import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  StatusBar,
} from "react-native";
import { Card, Title, Paragraph, Avatar, Button } from "react-native-paper";
import { useTheme } from "@react-navigation/native";
import FeatureCard from "../Components/FeatureCard";

// const { width, height } = Dimensions.get("window");

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
            <Card>
              <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
              <Card.Content>
                <Title>SHOP WHATS NEW IN THE STUDIO</Title>
                <Paragraph>Hand chosen just for you.</Paragraph>
              </Card.Content>
              <Card.Actions>
                <Button
                  mode="text"
                  color={colors.text}
                  onPress={() => navigation.navigate("ShopAll")}
                >
                  Shop Now
                </Button>
              </Card.Actions>
            </Card>
          </View>
          <View>
            <Card>
              <Card.Cover source={{ uri: "https://picsum.photos/701" }} />
              <Card.Content>
                <Title>WHY WE BUY MADE IN THE USA</Title>
                <Paragraph>About the Brand: The Royal Guard</Paragraph>
              </Card.Content>
              <Card.Actions>
                <Button
                  mode="text"
                  color={colors.text}
                  OnPress={() => navigation.navigate("DiscoverDetail")}
                >
                  Read More
                </Button>
              </Card.Actions>
            </Card>
          </View>
          <View>
            <Card>
              <Card.Cover source={{ uri: "https://picsum.photos/702" }} />
              <Card.Content>
                <Title>200 YEARS OF EXCELLENCE</Title>
                <Paragraph>Spanish made footwear from SBJM</Paragraph>
              </Card.Content>
              <Card.Actions>
                <Button
                  mode="text"
                  color={colors.text}
                  OnPress={() => navigation.navigate("ShopAll")}
                >
                  Shop Now
                </Button>
              </Card.Actions>
            </Card>
          </View>
          <View>
            <Card>
              <Card.Cover source={{ uri: "https://picsum.photos/703" }} />
              <Card.Content>
                <Title>CASUAL, COOL, COLLECTED</Title>
                <Paragraph>The latest selection from 139</Paragraph>
              </Card.Content>
              <Card.Actions>
                <Button
                  mode="text"
                  color={colors.text}
                  OnPress={() => navigation.navigate("ShopAll")}
                >
                  Shop Now
                </Button>
              </Card.Actions>
            </Card>
          </View>
          <View>
            <Card>
              <Card.Cover source={{ uri: "https://picsum.photos/704" }} />
              <Card.Content>
                <Title>WHAT WE'RE WEARING IN 2021</Title>
                <Paragraph>
                  Direction from a Director, how to wear ... in the new year!
                </Paragraph>
              </Card.Content>
              <Card.Actions>
                <Button
                  mode="text"
                  color={colors.text}
                  OnPress={() => navigation.navigate("DiscoverDetail")}
                >
                  Read More
                </Button>
              </Card.Actions>
            </Card>
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
