import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { THEME } from "../../styles/constants";
import { Form } from "../../app/cadastro";

type Props = {
  data: Form;
};

export function CardConvite({ data }: Props) {
  const fullName = data.fullName ?? "Joao";
  const avatarInitial = fullName.trim().charAt(0).toUpperCase() || "?";

  return (
    <View
      style={[
        styles.cardContainer,
        { backgroundColor: data.cardColor || THEME.colors.primary },
      ]}
    >
      <Text style={styles.cardLocalization}>{avatarInitial}</Text>
      <Text style={styles.cardAvatar}>{fullName}</Text>

      <Text style={styles.cardMeeting}>{data.partyName ?? "Festa do Joao"}</Text>
      <Text style={styles.cardFood}>{data.food ?? "Lanche Partilhado"}</Text>
      <Text style={styles.cardHours}>{data.hours ?? "20:00"}</Text>
      <Text style={styles.cardHours}>
        Local: {data.localization ?? "Bairro Alecrim Dourado, Rua XYZ, 40"}
      </Text>
      <Text style={styles.cardDate}>{data.date ?? "10/05/2026"}</Text>

      <View style={styles.cardSeparator} />

      <Text style={styles.cardDescription}>
        {data.description ?? "Festa mais do que especial"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: THEME.colors.primary,
    borderRadius: THEME.border.radius.xl,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  cardAvatar: {
    backgroundColor: "rgba(193, 220, 255, 0.4)",
    color: "#f8fbff",
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 999,
  },
  cardLocalization: {
    backgroundColor: "#f8fbff",
    borderRadius: 999,
    color: "#1f1f1f",
    textAlign: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  cardMeeting: {
    color: "#f8fbff",
    fontSize: THEME.text.heading.h2,
    fontWeight: "bold",
    textAlign: "center",
  },
  cardFood: {
    color: "#f8fbff",
    fontSize: THEME.text.heading.h2,
    fontWeight: "bold",
    textAlign: "center",
  },
  cardHours: {
    color: "#f7faff",
    fontSize: 16,
  },
  cardDate: {
    color: "#d5e5ff",
    fontSize: 14,
  },
  cardSeparator: {
    backgroundColor: "rgba(248,251,255,0.35)",
    height: 1,
    width: "100%",
  },
  cardDescription: {
    color: "#eef6ff",
    fontSize: 14,
    textAlign: "center",
  },
});
