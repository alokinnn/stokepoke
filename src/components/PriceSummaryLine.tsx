import {View, Text, StyleSheet, ViewProps, TextStyle} from "react-native";
import {ColorPalette} from "../ColorPalette";

type PriceSummaryLineProps = ViewProps & {
  label: string;
  price: number;
  isAccented?: boolean;
};

export const PriceSummaryLine = ({
  label,
  price,
  isAccented,
  ...rootProps
}: PriceSummaryLineProps) => {
  const dynamicTextStyle: TextStyle = {
    color: isAccented ? ColorPalette.red : ColorPalette.black,
  };

  return (
    <View {...rootProps} style={[styles.rootContainer, rootProps.style]}>
      <Text style={[styles.summaryLabel, dynamicTextStyle]}>{label}</Text>
      <Text style={[styles.summaryPrice, dynamicTextStyle]}>{price} $</Text>
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
    fontSize: 16,
    lineHeight: 24,
  },
  summaryPrice: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "700",
  },
});
