import {View, StyleSheet, ViewProps, ViewStyle} from "react-native";
import {ColorPalette} from "../ColorPalette";

type RadioButtonProps = ViewProps & {
  isSelected?: boolean;
};

export const RadioButton = ({isSelected, ...rootProps}: RadioButtonProps) => {
  const dynamicRootStyle: ViewStyle = {
    borderColor: isSelected ? ColorPalette.red : ColorPalette.black,
  };

  const dynamicSelectionIndicatorStyle: ViewStyle = {
    backgroundColor: isSelected ? ColorPalette.red : ColorPalette.black,
  };

  return (
    <View
      {...rootProps}
      style={[styles.rootContainer, rootProps.style, dynamicRootStyle]}
    >
      {isSelected ? (
        <View
          style={[styles.selectionIndicator, dynamicSelectionIndicatorStyle]}
        ></View>
      ) : null}
    </View>
  );
};

const size = 25;
const borderWidth = 2;
const padding = 3;
const innerCircleSize = size - (borderWidth + padding) * 2;
const styles = StyleSheet.create({
  rootContainer: {
    width: size,
    height: size,
    borderRadius: size / 2,
    borderWidth,
    alignItems: "center",
    justifyContent: "center",
  },
  selectionIndicator: {
    width: innerCircleSize,
    height: innerCircleSize,
    borderRadius: innerCircleSize / 2,
  },
});
