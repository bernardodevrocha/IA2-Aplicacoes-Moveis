import { Text, TouchableOpacity, GestureResponderEvent } from "react-native";
import { styleVariant } from "./styles";

type Props = {
  label: string;
  variant?: "primary" | "secondary" | "outline";
  onPress?: (event: GestureResponderEvent) => void;
};

export function Button({ label, variant = "primary", onPress }: Props) {
  return (
    <TouchableOpacity
      style={styleVariant[variant].buttonContainer}
      onPress={onPress}
    >
      <Text style={styleVariant[variant].buttonText}>{label}</Text>
    </TouchableOpacity>
  );
}
