import {View, ViewProps, StyleSheet} from "react-native";
import {ColorPalette} from "../ColorPalette";

export const Separator = (props: ViewProps) => (
  <View {...props} style={[styles.root, props.style]} />
);

const styles = StyleSheet.create({
  root: {
    marginVertical: 20,
    height: 1,
    backgroundColor: ColorPalette.gray,
  },
});
