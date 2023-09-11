import {View, Text} from "react-native";
import {CardContainer} from "../components/CardContainer";
import {ChoiceSegment} from "../components/ChoiceSegment";
import {StepIndicatorHeader} from "../components/StepIndicatorHeader";

export const BowlTypeSelectionScreen = () => {
  return (
    <View>
      <StepIndicatorHeader currentStep={1} totalSteps={4} />
      <CardContainer>
        <ChoiceSegment
          title="Test"
          description="Nulla facilisi. Integer sodales felis eget iaculis fermentum. Etiam id tempus ligula. Quisque semper malesuada est, ut efficitur lectus sollicitudin id. Suspendisse potenti."
        >
          <Text>BowlTypeSelection</Text>
        </ChoiceSegment>
      </CardContainer>
    </View>
  );
};
