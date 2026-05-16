import { StyleSheet } from "react-native";
import { THEME } from "../../styles/constants";

export const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: THEME.colors.primary,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: THEME.border.radius.md,
  },
  buttonText: {
    color: THEME.colors.primary_foreground,
    fontWeight: "500",
    fontSize: 24,
  },
});

export const styleSecondary = StyleSheet.create({
  buttonContainer: {
    ...styles.buttonContainer,
    backgroundColor: "transparent",
  },
  buttonText: {
    ...styles.buttonText,
    color: THEME.colors.primary,
  },
});

export const styleOutline = StyleSheet.create({
  buttonContainer: {
    ...styles.buttonContainer,
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: THEME.colors.primary,
  },
  buttonText: {
    ...styles.buttonText,
    color: THEME.colors.primary,
  },
});

export const styleVariant = {
  primary: styles,
  secondary: styleSecondary,
  outline: styleOutline,
} as const;
