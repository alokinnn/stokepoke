import {View, ScrollView, StyleSheet, ActivityIndicator} from "react-native";
import {CardContainer} from "../components/CardContainer";
import {ChoiceSegment} from "../components/ChoiceSegment";
import {StepIndicatorHeader} from "../components/StepIndicatorHeader";
import {SelectableItem, SingleChoiceList} from "../components/SingleChoiceList";
import {useCallback, useEffect, useMemo, useState} from "react";
import {Button} from "../components/Button";
import {useNavigation} from "@react-navigation/native";
import {useDispatch, useSelector} from "../../store/hooks";
import {getAllBowls} from "../../store/mealsSlice/selectors";
import {getAllBowlTypes} from "../../store/mealsSlice/actions";

export const BowlTypeSelectionScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [selectedId, setSelectedId] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const handleItemSelected = useCallback((item: SelectableItem) => {
    setSelectedId(item.id);
  }, []);

  const handleNextPress = () => {
    navigation.navigate("OrderConfiguration");
  };

  const bowls = useSelector(getAllBowls);
  const bowlsMapped = useMemo(
    () => bowls.map((bowl) => ({id: bowl.id.toString(), name: bowl.name})),
    [bowls]
  );

  const fetchBowlTypes = async () => {
    setIsLoading(true);
    await dispatch(getAllBowlTypes());
    setIsLoading(false);
  };

  useEffect(() => {
    fetchBowlTypes();
  }, []);

  return (
    <View>
      <ScrollView>
        <StepIndicatorHeader currentStep={1} totalSteps={4} />
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <>
            <CardContainer>
              <ChoiceSegment
                title="Test"
                description="Nulla facilisi. Integer sodales felis eget iaculis fermentum. Etiam id tempus ligula. Quisque semper malesuada est, ut efficitur lectus sollicitudin id. Suspendisse potenti."
              >
                <SingleChoiceList
                  onItemSelected={handleItemSelected}
                  items={bowlsMapped}
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
          </>
        )}
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
