import {ScrollView, View, StyleSheet, Text, FlatList} from "react-native";
import {CardContainer} from "../components/CardContainer";
import {StepIndicatorHeader} from "../components/StepIndicatorHeader";
import {PriceSummaryLine} from "../components/PriceSummaryLine";
import {SummaryLine} from "../components/SummaryLine";
import {Separator} from "../components/Separator";
import {Button} from "../components/Button";
import Star from "../../assets/star.svg";
import {ColorPalette} from "../ColorPalette";
import {useNavigation} from "@react-navigation/native";

export const OrderSummaryScreen = () => {
  const includedIngredients = [
    "Cucumber",
    "Spring Onion",
    "Carrot",
    "Corn",
    "Pineapple",
    "Green Salad",
  ];

  const joinedIngredients = includedIngredients.join("\n");

  const extraIngredients = [
    {
      name: "Wakame something",
      price: 5.44,
    },
    {
      name: "Salmon +50",
      price: 1.33,
    },
  ];

  const navigation = useNavigation();

  const handleAddToCart = () => {
    //TODO: Rest of the logic
    navigation.navigate("BowlTypeSelection");
  };

  return (
    <View>
      <ScrollView>
        <StepIndicatorHeader currentStep={4} totalSteps={4} />
        <CardContainer>
          <PriceSummaryLine
            label="Salmon something"
            price={4.22}
            isLabelBolded
          />

          <SummaryLine style={styles.bowlSizeLine}>
            Medium something
          </SummaryLine>
          <SummaryLine hasTopSpacing>Rice</SummaryLine>
          <SummaryLine hasTopSpacing>Some sauce</SummaryLine>
          <SummaryLine hasTopSpacing>Added test:</SummaryLine>

          <Text style={styles.includedIngredients}>{joinedIngredients}</Text>

          <FlatList
            scrollEnabled={false}
            ItemSeparatorComponent={() => (
              <View style={styles.extraIngredientsSeparator} />
            )}
            data={extraIngredients}
            renderItem={({item: {name, price}}) => (
              <PriceSummaryLine label={name} price={price} />
            )}
            style={styles.extraIngredients}
          />

          <Separator />

          <PriceSummaryLine label="Full translate" price={3.14} isAccented />
        </CardContainer>

        <View style={styles.primaryActionContainer}>
          <View style={styles.favoritesAndCartRow}>
            <View style={styles.addToFavoritesButton}>
              <Star width={24} height={24} color={ColorPalette.black} />
            </View>
            <Button label="Add to Cart translate" onPress={handleAddToCart} />
          </View>
          <Button
            label="Go to checkout"
            type="secondary"
            style={styles.goToCheckoutButton}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  bowlSizeLine: {
    marginTop: 20,
  },
  includedIngredients: {
    fontSize: 16,
    lineHeight: 24,
    marginStart: 20,
    marginTop: 5,
  },
  extraIngredients: {
    marginTop: 10,
  },
  extraIngredientsSeparator: {
    height: 15,
  },
  primaryActionContainer: {
    marginVertical: 30,
    marginHorizontal: 15,
  },
  goToCheckoutButton: {
    marginTop: 15,
  },
  addToFavoritesButton: {
    padding: 8,
    borderWidth: 1,
    borderColor: ColorPalette.black,
    marginEnd: 15,
    borderRadius: 4,
  },
  favoritesAndCartRow: {
    flexDirection: "row",
  },
});
