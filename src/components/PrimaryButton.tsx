import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
} from "react-native";
import {ColorPalette} from "../ColorPalette";
import Chevron from "../../assets/frame.svg";

type PrimaryButtonProps = TouchableOpacityProps & {
  label: string;
};

export const PrimaryButton = ({label, ...rootProps}: PrimaryButtonProps) => {
  return (
    <TouchableOpacity
      {...rootProps}
      style={[styles.rootContainer, rootProps.style]}
    >
      <Text style={styles.label}>{label}</Text>
      <Chevron style={styles.chevron} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: ColorPalette.black,
    flex: 1,
    height: 40,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    color: ColorPalette.plainWhite,
    fontSize: 14,
    lineHeight: 24,
  },
  chevron: {
    position: "absolute",
    end: 15,
  },
});
