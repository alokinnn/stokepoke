import {ScrollView, View} from "react-native";
import {CardContainer} from "../components/CardContainer";
import {StepIndicatorHeader} from "../components/StepIndicatorHeader";
import {PriceSummaryLine} from "../components/PriceSummaryLine";

export const OrderSummaryScreen = () => {
  return (
    <View>
      <ScrollView>
        <StepIndicatorHeader currentStep={3} totalSteps={4} />
        <CardContainer>
          <PriceSummaryLine
            label="Salmon something"
            price={4.22}
            isLabelBolded
          />
        </CardContainer>
      </ScrollView>
    </View>
  );
};
