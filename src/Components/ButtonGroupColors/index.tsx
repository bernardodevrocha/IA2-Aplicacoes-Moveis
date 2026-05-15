import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./styles";
import { useEffect, useState } from "react";

export type GroupItem = {
  id: string;
  name: string;
  code: string;
};

type Props = {
  group: Array<GroupItem>;
  onSelect: (code: string) => void;
};

export function ButtonGroupColors({ group, onSelect }: Props) {
  const [selected, setSelected] = useState<GroupItem | null>(null);

  function handleSelect(item: GroupItem) {
    setSelected(item);
    onSelect(item.id);
  }

  useEffect(() => {
    const firstItem = group.at(0);
    if (firstItem) {
      handleSelect(firstItem);
    }
  }, [group]);

  return (
    <View style={styles.buttonGroupContainer}>
      {group.map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => {
            handleSelect(item);
          }}
          style={[
            styles.buttonContainer,
            selected?.id === item.id && { borderColor: item.code },
          ]}
        >
          <View
            style={[
              styles.buttonGroupButtonColorIndicator,
              { backgroundColor: item.code },
            ]}
          />
          <Text
            style={[
              styles.buttonGroupButtonText,
              selected?.id === item.id && { color: item.code },
            ]}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
