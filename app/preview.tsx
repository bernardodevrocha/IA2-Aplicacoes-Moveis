import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

export default function PreviewScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Tela de preview</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
  },
});
