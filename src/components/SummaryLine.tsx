import {Text, StyleSheet, TextProps, TextStyle} from "react-native";

type SummaryLineProps = TextProps & {
  hasTopSpacing?: boolean;
};

export const SummaryLine = ({hasTopSpacing, ...props}: SummaryLineProps) => {
  const dynamicTextStyle: TextStyle = hasTopSpacing ? styles.textSpacing : {};

  return (
    <Text {...props} style={[styles.root, dynamicTextStyle, props.style]} />
  );
};

const styles = StyleSheet.create({
  root: {
    fontSize: 16,
    lineHeight: 24,
  },
  textSpacing: {
    marginTop: 10,
  },
});
