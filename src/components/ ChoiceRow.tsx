import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet,
  TextStyle,
} from "react-native";

type ChoiceRowProps = TouchableOpacityProps & {
  label: string;
  detailLabel?: string;
  labelPadding?: number;
  labelStyle?: TextStyle;
};

export const ChoiceRow = ({
  children,
  label,
  detailLabel,
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
      <Text style={[styles.rootLabelSpannable, dynamicLabelStyle]}>
        <Text style={[styles.label, labelStyle]}>{label}</Text>
        {detailLabel ? <Text> ({detailLabel})</Text> : null}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cellContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rootLabelSpannable: {
    fontSize: 16,
    lineHeight: 24,
  },
  label: {
    fontWeight: "700",
  },
});
