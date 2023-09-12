import {View, StyleSheet, ViewProps, ViewStyle} from "react-native";
import Checkmark from "../../assets/checkmark.svg";
import {ColorPalette} from "../ColorPalette";

type CheckboxProps = ViewProps & {
  isChecked: boolean;
};

export const Checkbox = ({isChecked, ...rootProps}: CheckboxProps) => {
  const dynamicContainerStyle: ViewStyle = isChecked
    ? style.checkedState
    : style.uncheckedState;

  return (
    <View
      {...rootProps}
      style={[style.rootContainer, dynamicContainerStyle, rootProps.style]}
    >
      {isChecked ? <Checkmark /> : null}
    </View>
  );
};

const size = 24;
const style = StyleSheet.create({
  rootContainer: {
    height: size,
    width: size,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 2,
  },
  checkedState: {
    backgroundColor: ColorPalette.red,
  },
  uncheckedState: {
    backgroundColor: ColorPalette.paleRed,
    borderColor: ColorPalette.mediumRed,
    borderWidth: 1,
  },
});
