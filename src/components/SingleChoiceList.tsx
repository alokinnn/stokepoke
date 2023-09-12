import {
  View,
  ViewProps,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import {RadioButton} from "./RadioButton";
import {useCallback} from "react";

export type SelectableItem = {
  id: string;
  name: string;
  isSelected: boolean;
};

type SingleChoiceListProps = ViewProps & {
  items: SelectableItem[];
  onItemSelected?: (item: SelectableItem) => void;
};

export const SingleChoiceList = ({
  items,
  onItemSelected,
  ...rootProps
}: SingleChoiceListProps) => {
  const renderItem = useCallback(
    ({item}: {item: SelectableItem}) => (
      <TouchableOpacity
        onPress={() => onItemSelected?.(item)}
        style={{flexDirection: "row", alignItems: "center"}}
      >
        <RadioButton isSelected={item.isSelected} />
        <Text style={{paddingStart: 15}}>{item.name}</Text>
      </TouchableOpacity>
    ),
    []
  );

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
});
