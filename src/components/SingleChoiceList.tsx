import {View, ViewProps, Text, TouchableOpacity, FlatList} from "react-native";
import {RadioButton} from "./RadioButton";
import {useCallback} from "react";

type SelectableItem = {
  id: string;
  name: string;
  isSelected: boolean;
};

type SingleChoiceListProps = ViewProps & {
  items: SelectableItem[];
  onItemSelected: (item: SelectableItem) => void;
};

export const SingleChoiceList = ({
  items,
  onItemSelected,
  ...rootProps
}: SingleChoiceListProps) => {
  const renderItem = useCallback(
    ({item}: {item: SelectableItem}) => (
      <TouchableOpacity
        onPress={() => onItemSelected(item)}
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
        ItemSeparatorComponent={() => <View height={20} />}
        scrollEnabled={false}
        renderItem={renderItem}
      />
    </View>
  );
};
