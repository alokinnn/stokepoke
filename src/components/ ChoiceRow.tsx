import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet,
  TextStyle,
} from "react-native";

type ChoiceRowProps = TouchableOpacityProps & {
  label: string;
  labelPadding?: number;
  labelStyle?: TextStyle;
};

export const ChoiceRow = ({
  children,
  label,
  labelPadding,
  labelStyle,
  ...rootProps
}: ChoiceRowProps) => {
  const dynamicLabelStyle: TextStyle = {paddingStart: labelPadding ?? 15};
  return (
    <TouchableOpacity
      {...rootProps}
      style={[styles.cellContainer, rootProps.style]}
    >
      {children}
      <Text style={[styles.labelStyle, dynamicLabelStyle, labelStyle]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cellContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  labelStyle: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "700",
  },
});
