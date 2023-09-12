import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {BowlTypeSelectionScreen} from "../screens/BowlTypeSelectionScreen";
import {OrderConfigurationScreen} from "../screens/OrderConfigurationScreen";
import {HomeStackNavigatorParamList} from "./types";

const Stack = createNativeStackNavigator<HomeStackNavigatorParamList>();

export const HomeStackNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen
      name="BowlTypeSelection"
      component={BowlTypeSelectionScreen}
    />
    <Stack.Screen
      name="OrderConfiguration"
      component={OrderConfigurationScreen}
    />
  </Stack.Navigator>
);
