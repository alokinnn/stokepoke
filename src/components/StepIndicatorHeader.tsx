import {View, Text, ViewProps, StyleSheet, DimensionValue} from "react-native";
import {ColorPalette} from "../ColorPalette";

type StepIndicatorHeaderProps = ViewProps & {
  currentStep: number;
  totalSteps: number;
};

export const StepIndicatorHeader = ({
  currentStep,
  totalSteps,
  ...rootProps
}: StepIndicatorHeaderProps) => {
  const progressPercentage = (currentStep / totalSteps) * 100;
  const progressPercentageAsWidth: DimensionValue = `${progressPercentage}%`;

  return (
    <View {...rootProps} style={[styles.rootContainer, rootProps.style]}>
      <Text style={styles.spannableTitleRoot}>
        <Text style={styles.titleCurrentStep}>Step {currentStep} </Text>
        <Text style={styles.titleTotalSteps}>of {totalSteps}</Text>
      </Text>
      <View style={styles.progressBarRoot}>
        <View
          style={[
            styles.progressBarProgress,
            {width: progressPercentageAsWidth},
          ]}
        ></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    paddingVertical: 30,
    paddingHorizontal: 15,
  },
  spannableTitleRoot: {
    fontSize: 16,
    lineHeight: 24,
    color: ColorPalette.black,
  },
  titleCurrentStep: {
    fontWeight: "600",
  },
  titleTotalSteps: {
    fontWeight: "400",
    opacity: 0.5,
  },
  progressBarRoot: {
    marginTop: 8,
    height: 1,
    backgroundColor: ColorPalette.red,
    opacity: 0.2,
  },
  progressBarProgress: {
    height: 2,
    backgroundColor: ColorPalette.red,
    position: "absolute",
    bottom: -1,
    start: 0,
  },
});
