import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {BowlTypeSelectionScreen} from "../screens/BowlTypeSelectionScreen";

const Stack = createNativeStackNavigator();

export const HomeStackNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen
      name="BowlTypeSelection"
      component={BowlTypeSelectionScreen}
    />
  </Stack.Navigator>
);
