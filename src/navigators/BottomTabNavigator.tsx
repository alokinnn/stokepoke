import {
  BottomTabBarButtonProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import {HomeStackNavigator} from "./HomeStackNavigator";
import {FavoritesScreen} from "../screens/FavoritesScreen";
import {BottomNavigatorParamList} from "./types";
import {CartScreen} from "../screens/CartScreen";
import Logo from "../../assets/logo.svg";
import HamburgerMenu from "../../assets/hamburger-menu.svg";
import {StyleSheet} from "react-native";
import {tabIconWithFocusedState} from "./helpers";
import Home from "../../assets/home.svg";
import Star from "../../assets/star.svg";
import ShoppingCart from "../../assets/shopping-cart.svg";
import {ColorPalette} from "../ColorPalette";

const Tab = createBottomTabNavigator<BottomNavigatorParamList>();

export const BottomTabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerTitle: "",
      headerRight: () => <Logo style={styles.logo} />,
      headerLeft: () => <HamburgerMenu style={styles.hamburgerMenu} />,
      tabBarActiveTintColor: ColorPalette.red,
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStackNavigator}
      options={{tabBarIcon: tabIconWithFocusedState(<Home />)}}
    />
    <Tab.Screen
      name="Favorites"
      component={FavoritesScreen}
      options={{tabBarIcon: tabIconWithFocusedState(<Star />)}}
    />
    <Tab.Screen
      name="Cart"
      component={CartScreen}
      options={{tabBarIcon: tabIconWithFocusedState(<ShoppingCart />)}}
    />
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
