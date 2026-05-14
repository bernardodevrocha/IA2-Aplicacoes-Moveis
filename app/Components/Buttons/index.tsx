import {
  Text,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";
import { styles } from "./styles";

type Props = {
  label: string;
  onPress?: (event: GestureResponderEvent) => void;
};

export function Button({ label, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
}
