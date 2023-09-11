import {View, ViewProps, Text, StyleSheet} from "react-native";

type ChoiceSegmentProps = ViewProps & {
  title: string;
  description?: string;
};

export const ChoiceSegment = ({
  title,
  description,
  children,
  ...rootProps
}: ChoiceSegmentProps) => {
  return (
    <View {...rootProps}>
      <Text style={styles.title}>{title}</Text>
      {description ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
      <View style={styles.childrenContainer}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 24,
  },
  description: {
    paddingTop: 10,
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
  },
  childrenContainer: {
    paddingTop: 20,
  },
});
