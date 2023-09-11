import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {HomeStackNavigator} from "./HomeStackNavigator";
import {FavoritesScreen} from "../screens/FavoritesScreen";
import {BottomNavigatorParamList} from "./types";
import {CartScreen} from "../screens/CartScreen";
import Logo from "../../assets/logo.svg";
import HamburgerMenu from "../../assets/hamburger-menu.svg";
import {StyleSheet} from "react-native";

const Tab = createBottomTabNavigator<BottomNavigatorParamList>();

export const BottomTabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerTitle: "",
      headerRight: () => <Logo style={styles.logo} />,
      headerLeft: () => <HamburgerMenu style={styles.hamburgerMenu} />,
    }}
  >
    <Tab.Screen name="Home" component={HomeStackNavigator} />
    <Tab.Screen name="Favorites" component={FavoritesScreen} />
    <Tab.Screen name="Cart" component={CartScreen} />
  </Tab.Navigator>
);

const padding = 15;
const styles = StyleSheet.create({
  logo: {
    marginEnd: padding,
  },
  hamburgerMenu: {
    marginStart: padding,
  },
});
