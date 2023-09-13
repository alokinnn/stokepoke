import {View, Text, StyleSheet, ViewProps, TextStyle} from "react-native";
import {ColorPalette} from "../ColorPalette";

type PriceSummaryLineProps = ViewProps & {
  label: string;
  price: number;
  isAccented?: boolean;
  isLabelBolded?: boolean;
};

export const PriceSummaryLine = ({
  label,
  price,
  isAccented,
  isLabelBolded,
  ...rootProps
}: PriceSummaryLineProps) => {
  const dynamicTextStyle: TextStyle = {
    color: isAccented ? ColorPalette.red : ColorPalette.black,
  };
  const dynamicLabelStyle: TextStyle = isLabelBolded
    ? styles.summaryLabelBolded
    : styles.summaryLabelRegular;

  return (
    <View {...rootProps} style={[styles.rootContainer, rootProps.style]}>
      <Text style={[styles.summaryLabel, dynamicTextStyle, dynamicLabelStyle]}>
        {label}
      </Text>
      <Text style={[styles.summaryPrice, dynamicTextStyle]}>${price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  summaryLabel: {
    lineHeight: 24,
  },
  summaryLabelBolded: {
    fontWeight: "700",
    fontSize: 20,
  },
  summaryLabelRegular: {
    fontSize: 16,
  },
  summaryPrice: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "700",
  },
});
