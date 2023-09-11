import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {HomeStackNavigator} from "./HomeStackNavigator";
import {FavoritesScreen} from "../screens/FavoritesScreen";
import {BottomNavigatorParamList} from "./types";
import {CartScreen} from "../screens/CartScreen";

const Tab = createBottomTabNavigator<BottomNavigatorParamList>();

export const BottomTabNavigator = () => (
  <Tab.Navigator screenOptions={{headerTitle: ""}}>
    <Tab.Screen name="Home" component={HomeStackNavigator} />
    <Tab.Screen name="Favorites" component={FavoritesScreen} />
    <Tab.Screen name="Cart" component={CartScreen} />
  </Tab.Navigator>
);
