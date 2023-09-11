import {View, ViewProps, StyleSheet} from "react-native";
import {ColorPalette} from "../ColorPalette";

export const CardContainer = (props: ViewProps) => (
  <View {...props} style={styles.root} />
);

const styles = StyleSheet.create({
  root: {
    borderColor: ColorPalette.gray,
    borderWidth: 1,
    padding: 15,
    marginHorizontal: 15,
    backgroundColor: ColorPalette.plainWhite,
  },
});
