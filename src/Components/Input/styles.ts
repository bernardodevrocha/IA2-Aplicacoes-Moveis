import { StyleSheet } from "react-native";
import { THEME } from "../../styles/constants";

export const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  headerContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 4,
  },
  title: {
    color: THEME.colors.primary,
    fontWeight: "bold",
    fontSize: THEME.text.heading.h2,
  },
  subTitle: {
    color: THEME.colors.subtitle,
    fontWeight: "400",
    fontSize: 16,
    textAlign: "center",
  },
  footerContainer: {
    flexDirection: "column",
    gap: 12,
  },
  formGroup: {
    flexDirection: "column",
    gap: 4,
  },
  formLabel: {
    color: THEME.colors.heading,
    fontWeight: "bold",
  },
  formInput: {
    borderRadius: THEME.border.radius.md,
    borderWidth: 2,
    borderColor: THEME.colors.border.input,
  },
  formError: {
    color: THEME.colors.error,
    fontWeight: "bold",
  },
});
