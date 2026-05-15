import { StyleSheet } from "react-native";
import { THEME } from "../../styles/constants";

export const styles = StyleSheet.create({
  buttonGroupContainer: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  buttonContainer: {
    borderWidth: 2,
    borderColor: THEME.colors.border.input,
    borderRadius: THEME.border.radius.md,
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    flex: 1,
  },
  buttonGroupButtonColorIndicator: {
    backgroundColor: "#3838cd",
    height: 24,
    width: 24,
    borderRadius: "100%",
  },
  buttonGroupButtonText: {
    color: "#7d7d7d",
    fontWeight: "bold",
  },
});
