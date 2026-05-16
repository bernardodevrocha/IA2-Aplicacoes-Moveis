import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { THEME } from "../styles/constants";
import { Button } from "../Components/Buttons";
import { useRouter } from "expo-router";

export default function IndexScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.logo}>ConvidaAI</Text>
        <Text style={styles.subtitle}>
          Seu App de convite para Eventos Inteligente
        </Text>
      </View>

      <Button
        label="Criar Convite"
        variant="primary"
        onPress={() => router.push("/cadastro")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  headerContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    gap: 8,
  },
  logo: {
    color: THEME.colors.primary,
    fontWeight: "bold",
    fontSize: 56,
  },
  subtitle: {
    color: THEME.colors.subtitle,
    fontWeight: "400",
    fontSize: 16,
    width: 200,
    textAlign: "center",
  },
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

