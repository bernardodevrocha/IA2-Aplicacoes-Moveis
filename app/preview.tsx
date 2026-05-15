import React from "react";
import { SafeAreaView, Text, StyleSheet, View } from "react-native";
import { Button } from "./Components/Buttons";
import { CardConvite } from "./Components/CardConvite";
import { THEME } from "./styles/constants";

export default function PreviewScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Seu Convite</Text>
      </View>

      <CardConvite />

      <View style={styles.footerContainer}>
        <Button label="Editar" variant="outline" />
        <Button label="Finalizar" variant="secondary" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 24,
    backgroundColor: "#efefef",
  },
  headerContainer: {
    alignItems: "flex-start",
  },
  title: {
    color: THEME.colors.primary,
    fontWeight: "bold",
    fontSize: THEME.text.heading.h2,
  },
  footerContainer: {
    flexDirection: "column",
    gap: 12,
  },
});
