import {View, StyleSheet} from "react-native";
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
      <StepIndicatorHeader currentStep={2} totalSteps={4} />
      <CardContainer>
        <ChoiceSegment title="Pick and translate">
          <SingleChoiceList items={source} />
        </ChoiceSegment>
        <ChoiceSegment title="Pick and translate2">
          <SingleChoiceList items={source} />
        </ChoiceSegment>
        <ChoiceSegment title="Pick and translate3">
          <SingleChoiceList items={source} />
        </ChoiceSegment>
        <ChoiceSegment
          title="Pick and translate with desc"
          description="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
        />
      </CardContainer>
    </View>
  );
};

const styles = StyleSheet.create({});
