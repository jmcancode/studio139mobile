import React, { useEffect } from "react";
// react-navigation v5
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// react native paper
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from "react-native-paper";
// react-native
import { ActivityIndicator } from "react-native";
// expo icons
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
// Auth Context
import { AuthContext } from "./context";
// Auth Screens
import SignIn from "./AuthScreens/SignInScreen";
import SignUpScreen from "./AuthScreens/SignUpScreen";
import OnboardingScreen from "./AuthScreens/OnBoardingScreens";
// main screens
import Home from "./Screens/HomeScreen";
import ShopAll from "./Screens/ShopAllScreen";
import ShopDetail from "./Screens/ShopDetailScreen";
import ShopLanding from "./Screens/ShopAllLanding";
import Discover from "./Screens/DiscoverScreen";
import DiscoverDetail from "./Screens/DiscoverDetailsScreen";
import Search from "./Screens/SearchScreen";
//Shop Screens
import StyleByJm from "../App/Screens/Brands/sbjm";
import StudioOne from "../App/Screens/Brands/139";
import TheRoyalGuard from "../App/Screens/Brands/trg";
// Bottom Sheets
import Modal from "./Screens/Modal";
import ShoppingModal from "./Screens/ShoppingModal";
import CreditEdit from "./Screens/Checkout/creditcard";
import Maps from "./Screens/Modal/MapScreen";
//modal screens
import StyleProfile from "./Screens/Modal/StyleProfile";

// google fonts
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import {
  PlayfairDisplay_400Regular,
  PlayfairDisplay_500Medium,
} from "@expo-google-fonts/playfair-display";
// redux
// import {createStore} from 'redux';
// import {Provider} from 'react-reudx';
// const store = createStore()

// const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();
const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const DiscoverStack = createStackNavigator();
const ShopStack = createStackNavigator();

const AuthStackScreen = ({ navigation }) => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="OnBoarding"
      component={OnboardingScreen}
      options={{ headerTransparent: true, headerTitle: "" }}
    />
    <AuthStack.Screen
      name="Sign-In"
      component={SignIn}
      options={{
        headerTransparent: true,
        headerTitle: "",
      }}
    />
    <AuthStack.Screen
      name="SignUp"
      component={SignUpScreen}
      options={{
        headerTransparent: true,
        headerTitle: "",
      }}
    />
  </AuthStack.Navigator>
);

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="STYLE BY JM"
      component={Home}
      options={{
        headerLeft: () => (
          <MaterialCommunityIcons
            name="account"
            size={24}
            color="#777"
            style={{ paddingLeft: 20 }}
            onPress={() => navigation.navigate("Modal")}
          />
        ),
        headerTitle: "STUDIO 139",
        headerRight: () => (
          <MaterialCommunityIcons
            name="briefcase-outline"
            size={24}
            color="#777"
            style={{ paddingRight: 20 }}
            onPress={() => navigation.navigate("ShopModal")}
          />
        ),
      }}
    />
  </HomeStack.Navigator>
);

const ShopStackScreen = ({ navigation }) => (
  <ShopStack.Navigator>
    <ShopStack.Screen
      name="ShopLanding"
      component={ShopLanding}
      options={{
        headerLeft: () => (
          <MaterialCommunityIcons
            name="account"
            size={24}
            color="#777"
            style={{ paddingLeft: 20 }}
            onPress={() => navigation.navigate("Modal")}
          />
        ),
        headerTitle: "STUDIO 139",
        headerRight: () => (
          <MaterialCommunityIcons
            name="briefcase-outline"
            size={24}
            color="#777"
            style={{ paddingRight: 20 }}
            onPress={() => navigation.navigate("ShopModal")}
          />
        ),
      }}
    />
    <ShopStack.Screen
      name="ShopAll"
      component={ShopAll}
      options={{
        headerLeft: () => (
          <MaterialCommunityIcons
            name="account"
            size={24}
            color="#777"
            style={{ paddingLeft: 20 }}
            onPress={() => navigation.navigate("Modal")}
          />
        ),
        headerTitle: "STUDIO 139",
        headerRight: () => (
          <MaterialCommunityIcons
            name="briefcase-outline"
            size={24}
            color="#777"
            style={{ paddingRight: 20 }}
            onPress={() => navigation.navigate("ShopModal")}
          />
        ),
      }}
    />
    <ShopStack.Screen
      name="ShopDetail"
      component={ShopDetail}
      options={{
        headerTransparent: true,
        headerTitle: null,
        headerBackTitleVisible: "false",
        headerLeft: null,
      }}
    />
    <ShopStack.Screen
      name="StyleByJM"
      component={StyleByJm}
      options={{
        headerTransparent: true,
        headerTitle: null,
        headerBackTitleVisible: "false",
        headerLeft: null,
      }}
    />
    <ShopStack.Screen
      name="TheRoyalGuard"
      component={TheRoyalGuard}
      options={{
        headerTransparent: true,
        headerTitle: null,
        headerBackTitleVisible: "false",
        headerLeft: null,
      }}
    />
    <ShopStack.Screen
      name="StudioOne"
      component={StudioOne}
      options={{
        headerTransparent: true,
        headerTitle: null,
        headerBackTitleVisible: "false",
        headerLeft: null,
      }}
    />
  </ShopStack.Navigator>
);

const DiscoverStackScreen = ({ navigation }) => (
  <DiscoverStack.Navigator>
    <DiscoverStack.Screen
      name="Discover"
      component={Discover}
      options={{
        headerLeft: () => (
          <MaterialCommunityIcons
            name="account"
            size={24}
            color="#777"
            style={{ paddingLeft: 20 }}
            onPress={() => navigation.navigate("Modal")}
          />
        ),
        headerTitle: "STUDIO 139",
        headerRight: () => (
          <MaterialCommunityIcons
            name="briefcase-outline"
            size={24}
            color="#777"
            style={{ paddingRight: 20 }}
            onPress={() => navigation.navigate("ShopModal")}
          />
        ),
      }}
    />
    <DiscoverStack.Screen
      name="DiscoverDetail"
      component={DiscoverDetail}
      options={{
        headerBackImage: ({ size, color }) => (
          <Ionicons name="md-chevron-back-sharp" size={size} color={color} />
        ),
        headerBackTitle: "Discover",
        headerLeft: () => (
          <MaterialCommunityIcons name="account" size={24} color="#777" />
        ),
        headerTitle: "STUDIO 139",
        headerRight: () => (
          <MaterialCommunityIcons
            name="briefcase-outline"
            size={24}
            color="#777"
            style={{ paddingRight: 20 }}
          />
        ),
      }}
    />
  </DiscoverStack.Navigator>
);

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      name="ACCOUNT"
      component={Search}
      options={{
        headerTransparent: true,
        headerTitle: null,
      }}
    />
    <ProfileStack.Screen
      name="CreditEdit"
      component={CreditEdit}
      options={{ headerTransparent: true, headerTitle: null }}
    />
  </ProfileStack.Navigator>
);

const TabsScreen = ({ navigation }) => (
  <Tabs.Navigator
    initialRouteName="Home"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "Home") {
          iconName = focused
            ? "ios-information-circle"
            : "ios-information-circle-outline";
        } else if (route.name === "Shop") {
          iconName = focused ? "ios-list-box" : "ios-list";
        }
        return <AntDesign name="shoppingcart" size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: "#B53737",
      inactiveTintColor: "grey",
    }}
  >
    <Tabs.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: "Home",
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="home" size={size} color={color} />
        ),
      }}
    />
    <Tabs.Screen
      name="Shop"
      component={ShopStackScreen}
      options={{
        tabBarLabel: "Shop",
        tabBarIcon: ({ color, size }) => (
          <Feather name="shopping-bag" size={size} color={color} />
        ),
      }}
    />
    <Tabs.Screen
      name="Discover"
      component={DiscoverStackScreen}
      options={{
        tabBarLabel: "Discover",
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="bulb1" size={size} color={color} />
        ),
      }}
    />
    <Tabs.Screen
      name="Search"
      component={ProfileStackScreen}
      onPress={() => navigation.toggleDrawer()}
      options={{
        tabBarLabel: "Search",
        tabBarIcon: ({ color, size }) => (
          <Octicons name="search" size={size} color={color} />
        ),
      }}
    />
  </Tabs.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = ({ userToken, navigation }) => (
  <RootStack.Navigator
    headerMode="none"
    screenOptions={{ animationEnabled: false }}
    mode="modal"
  >
    {userToken ? (
      <RootStack.Screen
        name="App"
        component={TabsScreen}
        options={{
          animationEnabled: false,
        }}
      />
    ) : (
      <RootStack.Screen
        name="Auth"
        component={AuthStackScreen}
        options={{
          animationEnabled: false,
        }}
      />
    )}
    <RootStack.Screen
      name="Modal"
      component={Modal}
      options={{ animationEnabled: true, headerTitle: "Account" }}
    />
    <RootStack.Screen
      name="ShopModal"
      component={ShoppingModal}
      options={{ animationEnabled: true, headerTitle: "Your Bag" }}
    />
    <RootStack.Screen
      name="Maps"
      component={Maps}
      options={{
        headerTransparent: true,
        headerBackTitle: "back",
        HeaderTitle: "Find a Tailor",
      }}
    />
    <RootStack.Screen
      name="StyleProfile"
      component={StyleProfile}
      options={{
        headerTransparent: true,
        headerBackTitle: "back",
        headerTitle: "Style Profile",
      }}
    />
  </RootStack.Navigator>
);

export default () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
    PlayfairDisplay_400Regular,
    PlayfairDisplay_500Medium,
  });

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: "#ffffff",
      backdrop: "#ffffff",
      text: "#333333",
      placeholder: "#333333",
    },
  };

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    dark: true,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: "#333333",
      backdrop: "#333333",
      text: "#ffffff",
      placeholder: "#ffffff",
    },
  };

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      },
      toggleTheme: () => {
        setIsDarkTheme((isDarkTheme) => !isDarkTheme);
      },
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
          <RootStackScreen userToken={userToken} />
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
};
