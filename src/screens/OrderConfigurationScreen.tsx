import {View, StyleSheet, ScrollView} from "react-native";
import {StepIndicatorHeader} from "../components/StepIndicatorHeader";
import {CardContainer} from "../components/CardContainer";
import {ChoiceSegment} from "../components/ChoiceSegment";
import {SingleChoiceList} from "../components/SingleChoiceList";

export const OrderConfigurationScreen = () => {
  const source = [
    {id: "234", name: "meat", isSelected: false},
    {id: "4322423", name: "vegan", isSelected: false},
  ];

  return (
    <View>
      <ScrollView>
        <StepIndicatorHeader currentStep={2} totalSteps={4} />
        <CardContainer>
          <ChoiceSegment title="Pick and translate">
            <SingleChoiceList items={source} />
          </ChoiceSegment>
          <ChoiceSegment
            title="Pick and translate2"
            style={styles.segmentSpacing}
          >
            <SingleChoiceList items={source} />
          </ChoiceSegment>
          <ChoiceSegment
            title="Pick and translate3"
            style={styles.segmentSpacing}
          >
            <SingleChoiceList items={source} />
          </ChoiceSegment>
          <ChoiceSegment
            title="Pick and translate with desc"
            description="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
            style={styles.segmentSpacing}
          />
        </CardContainer>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  segmentSpacing: {
    paddingTop: 30,
  },
});
