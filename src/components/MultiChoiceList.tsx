import {useCallback} from "react";
import {FlatList, View, StyleSheet, ViewProps} from "react-native";
import {ChoiceRow} from "./ ChoiceRow";
import {Checkbox} from "./Checkbox";
import {ColorPalette} from "../ColorPalette";

type SelectableItem = {
  id: string;
  name: string;
  isSelected: boolean;
};

type MultiChoiceListProps = ViewProps & {
  items: SelectableItem[];
  onSelectionChanged?: (id: string, isChecked: boolean) => void;
};

export const MultiChoiceList = ({
  items,
  onSelectionChanged,
  ...rootProps
}: MultiChoiceListProps) => {
  const renderItem = useCallback(({item}: {item: SelectableItem}) => {
    const dynamicLabelStyle = {
      color: item.isSelected ? ColorPalette.red : ColorPalette.black,
    };
    return (
      <ChoiceRow
        label={item.name}
        onPress={() => onSelectionChanged?.(item.id, !item.isSelected)}
        labelPadding={8}
        labelStyle={dynamicLabelStyle}
      >
        <Checkbox isChecked={item.isSelected} />
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
