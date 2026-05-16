import React from "react";
import { SafeAreaView, Text, StyleSheet, View, ScrollView } from "react-native";
import { Button } from "../Components/Buttons";
import { CardConvite } from "../Components/CardConvite";
import { THEME } from "../styles/constants";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Form } from "./cadastro";

export default function PreviewScreen() {
  const router = useRouter();
  const params = useLocalSearchParams() as unknown as Form;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Seu Convite</Text>
        </View>

        <CardConvite data={params} />

        <View style={styles.footerContainer}>
          <Button label="Editar" variant="outline" onPress={() => router.back()} />
          <Button
            label="Finalizar"
            variant="secondary"
            onPress={() => router.push("/sucesso")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 24,
    backgroundColor: "#efefef",
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
    gap: 24,
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

