import {View, StyleSheet, ScrollView, Text} from "react-native";
import {StepIndicatorHeader} from "../components/StepIndicatorHeader";
import {CardContainer} from "../components/CardContainer";
import {ChoiceSegment} from "../components/ChoiceSegment";
import {MultiChoiceList} from "../components/MultiChoiceList";
import {Button} from "../components/Button";
import {useNavigation} from "@react-navigation/native";
import {PriceSummaryLine} from "../components/PriceSummaryLine";

export const ExtraIngredientSelectionScreen = () => {
  const source = [
    {id: "234", name: "meat", isSelected: true},
    {
      id: "4322423",
      name: "vegan",
      isSelected: false,
      additionalDetail: "adasd 53 cacas",
    },
    {id: "2341", name: "meat", isSelected: true},
    {id: "2342", name: "meat", isSelected: true},
    {id: "2343", name: "meat", isSelected: false},
    {id: "2344", name: "meat", isSelected: true},
    {id: "2345", name: "meat", isSelected: false},
  ];

  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View>
      <ScrollView>
        <StepIndicatorHeader currentStep={3} totalSteps={4} />
        <CardContainer>
          <ChoiceSegment
            title="Pick and translate"
            description="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
          >
            <MultiChoiceList items={source} />
          </ChoiceSegment>
        </CardContainer>

        <CardContainer style={styles.summaryContainer}>
          <PriceSummaryLine label="something" price={123} />
          <PriceSummaryLine
            label="something2"
            price={321}
            style={styles.totalPrice}
            isAccented
          />
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
  summaryContainer: {
    marginTop: 15,
  },
  totalPrice: {
    marginTop: 20,
  },
});
