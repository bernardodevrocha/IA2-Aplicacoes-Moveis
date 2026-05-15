import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { Button } from "./Components/Buttons";
import { CardConvite } from "./Components/CardConvite";
import { THEME } from "./styles/constants";
import { Input } from "./Components/Input";
import { ButtonGroupColors } from "./Components/ButtonGroupColors";

const CARD_COLORS = [
  {
    id: "1",
    name: "Azul",
    code: "#3838cd",
  },
  {
    id: "2",
    name: "Verde",
    code: "#15c432",
  },
  {
    id: "3",
    name: "Roxo",
    code: "#3f1072",
  },
  {
    id: "4",
    name: "Rose",
    code: "#970957",
  },
];

export default function CadastroScreen() {
  const [selectedColorId, setselectedColorId] = useState<string | null>();

  function handleSelectColor(colorId: string) {
    setselectedColorId(colorId);
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Cadastro</Text>
          <Text style={styles.subTitle}>Preencha seus dados</Text>
        </View>

        <View style={{ height: 700 }}>
          <View style={{ gap: 8, marginBottom: 12 }}>
            <Input label="Nome Pessoa" placeholder="João Caetano" />
            <Input label="Nome Festa" placeholder="Festa do João" />
            <Input label="Comidas" placeholder="Lanche Partilhado" />
            <Input label="Horario" placeholder="20:00" />
            <Input
              label="Localizacao"
              placeholder="Bairro Alecrim Dourado, Rua XYZ, 40"
            />
            <Input label="Data" placeholder="10/05/2026" />
            <Input
              label="Descrição"
              placeholder="Festa mais do que especial!"
            />
          </View>
          <ButtonGroupColors onSelect={handleSelectColor} group={CARD_COLORS} />
        </View>

        <Text>Cor Selecionada: {selectedColorId}</Text>
        <View style={styles.footerContainer}>
          <Button label="Cadastrar Convite" />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
});
