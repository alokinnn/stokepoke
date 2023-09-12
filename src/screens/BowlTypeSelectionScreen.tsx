import {View, ScrollView, StyleSheet} from "react-native";
import {CardContainer} from "../components/CardContainer";
import {ChoiceSegment} from "../components/ChoiceSegment";
import {StepIndicatorHeader} from "../components/StepIndicatorHeader";
import {SelectableItem, SingleChoiceList} from "../components/SingleChoiceList";
import {useCallback, useState} from "react";
import {Button} from "../components/Button";
import {useNavigation} from "@react-navigation/native";

export const BowlTypeSelectionScreen = () => {
  const source = [
    {id: "234", name: "meat"},
    {id: "4322423", name: "vegan"},
  ];

  const navigation = useNavigation();

  const [selectedId, setSelectedId] = useState("");

  const handleItemSelected = useCallback((item: SelectableItem) => {
    setSelectedId(item.id);
  }, []);

  const handleNextPress = () => {
    navigation.navigate("OrderConfiguration");
  };

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
              onItemSelected={handleItemSelected}
              items={source}
              selectedId={selectedId}
            />
          </ChoiceSegment>
        </CardContainer>
        <Button
          label="Nexttt"
          style={style.buttonContainer}
          onPress={handleNextPress}
          showChevron
        />
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  buttonContainer: {
    marginHorizontal: 15,
    marginTop: 30,
  },
});
