import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { THEME } from "../styles/constants";
import { Button } from "../Components/Buttons";
import { useRouter } from "expo-router";

export default function SucessoScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Convite criado com sucesso!</Text>
        <Text style={styles.subtitle}>
          Seu convite está pronto. Compartilhe com seus amigos e faça a festa!
        </Text>
      </View>

      <View style={styles.footerContainer}>
        <Button label="Voltar ao início" variant={"secondary"} onPress={() => router.replace("/")} />
      </View>
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
    gap: 12,
  },
  title: {
    color: THEME.colors.primary,
    fontWeight: "bold",
    fontSize: THEME.text.heading.h2,
    width: 200,
    textAlign: "center",
  },
  subtitle: {
    color: THEME.colors.subtitle,
    fontWeight: "400",
    fontSize: 16,
    width: 200,
    textAlign: "center",
  },
  footerContainer: {
    flexDirection: "column",
    gap: 12,
  },
});

