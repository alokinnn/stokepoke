import {View, ViewProps, Text, FlatList, StyleSheet} from "react-native";
import {RadioButton} from "./RadioButton";
import {useCallback} from "react";
import {ChoiceRow} from "./ ChoiceRow";
import {ColorPalette} from "../ColorPalette";

export type SelectableItem = {
  id: string;
  name: string;
  additionalDetail?: string;
};

type SingleChoiceListProps = ViewProps & {
  items: SelectableItem[];
  selectedId: string;
  onItemSelected?: (item: SelectableItem) => void;
};

export const SingleChoiceList = ({
  items,
  selectedId,
  onItemSelected,
  ...rootProps
}: SingleChoiceListProps) => {
  const renderItem = useCallback(({item}: {item: SelectableItem}) => {
    const isSelected = item.id === selectedId;
    const dynamicLabelStyle = {
      color: isSelected ? ColorPalette.red : ColorPalette.black,
    };

    return (
      <ChoiceRow
        label={item.name}
        onPress={() => onItemSelected?.(item)}
        detailLabel={item.additionalDetail}
        labelStyle={dynamicLabelStyle}
      >
        <RadioButton isSelected={isSelected} />
      </ChoiceRow>
    );
  }, []);

  return (
    <View {...rootProps}>
      <FlatList
        data={items}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        scrollEnabled={false}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 15,
  },
  cellContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    paddingStart: 15,
  },
});
