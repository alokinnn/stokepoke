import {View, Text, ScrollView} from "react-native";
import {CardContainer} from "../components/CardContainer";
import {ChoiceSegment} from "../components/ChoiceSegment";
import {StepIndicatorHeader} from "../components/StepIndicatorHeader";
import {SingleChoiceList} from "../components/SingleChoiceList";
import {useState} from "react";

export const BowlTypeSelectionScreen = () => {
  const source = [
    {id: "234", name: "meat", isSelected: false},
    {id: "4322423", name: "vegan", isSelected: false},
  ];
  const [items, setItems] = useState(source);

  return (
    <View>
      <ScrollView>
        <StepIndicatorHeader currentStep={1} totalSteps={4} />
        <CardContainer>
          <ChoiceSegment
            title="Test"
            description="Nulla facilisi. Integer sodales felis eget iaculis fermentum. Etiam id tempus ligula. Quisque semper malesuada est, ut efficitur lectus sollicitudin id. Suspendisse potenti."
          >
            <SingleChoiceList
              onItemSelected={(item) => {
                const matchedItemIndex = source.findIndex(
                  (originItem) => originItem.id === item.id
                );
                source[matchedItemIndex].isSelected = true;
                setItems(source);
              }}
              items={items}
            />
          </ChoiceSegment>
        </CardContainer>
      </ScrollView>
    </View>
  );
};
