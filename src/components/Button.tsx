import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";
import {ColorPalette} from "../ColorPalette";
import Chevron from "../../assets/chevron.svg";

type PrimaryButtonProps = TouchableOpacityProps & {
  label: string;
  showChevron?: boolean;
  type?: "primary" | "secondary";
};

export const Button = ({
  label,
  showChevron,
  type = "primary",
  ...rootProps
}: PrimaryButtonProps) => {
  const dynamicContainerStyle: ViewStyle =
    type === "primary" ? styles.primary : styles.secondary;
  const dynamicLabelStyle: TextStyle = {
    color: type === "primary" ? ColorPalette.plainWhite : ColorPalette.black,
  };

  return (
    <TouchableOpacity
      {...rootProps}
      style={[styles.rootContainer, dynamicContainerStyle, rootProps.style]}
    >
      <Text style={[styles.label, dynamicLabelStyle]}>{label}</Text>
      {showChevron ? <Chevron style={styles.chevron} /> : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    height: 40,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "700",
  },
  chevron: {
    position: "absolute",
    end: 15,
  },
  primary: {
    backgroundColor: ColorPalette.black,
  },
  secondary: {
    borderWidth: 1,
    color: ColorPalette.black,
  },
});
