import {View, StyleSheet, ScrollView} from "react-native";
import {StepIndicatorHeader} from "../components/StepIndicatorHeader";
import {CardContainer} from "../components/CardContainer";
import {ChoiceSegment} from "../components/ChoiceSegment";
import {SingleChoiceList} from "../components/SingleChoiceList";
import {MultiChoiceList} from "../components/MultiChoiceList";
import {Button} from "../components/Button";
import {useNavigation} from "@react-navigation/native";

export const OrderConfigurationScreen = () => {
  const source = [
    {id: "234", name: "meat", isSelected: true},
    {id: "4322423", name: "vegan", isSelected: false},
  ];

  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View>
      <ScrollView>
        <StepIndicatorHeader currentStep={2} totalSteps={4} />
        <CardContainer>
          <ChoiceSegment title="Pick and translate">
            <SingleChoiceList items={source} onItemSelected={() => {}} />
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
          >
            <MultiChoiceList items={source} onSelectionChanged={() => {}} />
          </ChoiceSegment>
        </CardContainer>

        <View style={styles.buttonContainer}>
          <Button label="Backkk" type="secondary" onPress={handleBackPress} />
          <Button label="Nextt" style={styles.nextButton} showChevron />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  segmentSpacing: {
    paddingTop: 30,
  },
  buttonContainer: {
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 30,
  },
  nextButton: {
    marginStart: 15,
  },
});
