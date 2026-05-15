import React, { useEffect, useState } from "react";
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

type Form = {
  fullName: string;
  partyName: string;
  food: string;
  hours: string;
  localization: string;
  date: string;
  description: string;
  cardColor: string;
};

type Error = {
  fullName?: string;
  partyName?: string;
  food?: string;
  hours?: string;
  localization?: string;
  date?: string;
  description?: string;
  cardColor?: string;
};

export default function CadastroScreen() {
  const [form, setForm] = useState<{ data: Form; errors: Error }>({
    data: {
      fullName: "",
      partyName: "",
      food: "",
      hours: "",
      localization: "",
      date: "",
      description: "",
      cardColor: "",
    },
    errors: {},
  });

  function handleInputChange(fieldName: keyof Form, text: string) {
    setForm((currentForm) => {
      return {
        ...currentForm,
        data: {
          ...currentForm.data,
          [fieldName]: text,
        },
      };
    });

    handleInputValidation(fieldName);
  }

  function handleSetOrRemoveInputError(
    field: keyof Form,
    error: string | undefined,
  ) {
    setForm((currentForm) => {
      return {
        ...currentForm,
        errors: {
          ...currentForm.errors,
          [field]: error,
        },
      };
    });
  }

  function handleInputValidation(fields: keyof Form) {
    switch (fields) {
      case "fullName":
        if (form.data.fullName.length < 3) {
          handleSetOrRemoveInputError("fullName", "Informe o nome completo");
        }

        if (form.data.fullName.length >= 3) {
          handleSetOrRemoveInputError("fullName", undefined);
        }
        break;
      case "partyName":
        if (form.data.partyName.length === 0) {
          handleSetOrRemoveInputError("partyName", "Digite o nome da festa");
        }
        if (form.data.partyName.length > 0) {
          handleSetOrRemoveInputError("partyName", undefined);
        }
        break;
      case "food":
        if (form.data.food.length === 0) {
          handleSetOrRemoveInputError(
            "food",
            "Informe qual tipo de comida tera",
          );
        }
        if (form.data.food.length > 0) {
          handleSetOrRemoveInputError("food", undefined);
        }
        break;
      case "hours":
        if (form.data.hours.length === 0) {
          handleSetOrRemoveInputError("hours", "Digite um horario");
        }
        if (form.data.hours.length > 0) {
          handleSetOrRemoveInputError("hours", undefined);
        }
        break;
      case "localization":
        if (form.data.localization.length === 0) {
          handleSetOrRemoveInputError(
            "localization",
            "Coloque a localizacao da festa",
          );
        }
        if (form.data.localization.length > 0) {
          handleSetOrRemoveInputError("localization", undefined);
        }
        break;
      case "date":
        if (form.data.date.length === 0) {
          handleSetOrRemoveInputError(
            "date",
            "Informe para seus convidados qual dia sera",
          );
        }
        if (form.data.date.length > 0) {
          handleSetOrRemoveInputError("date", undefined);
        }
        break;
      case "description":
        if (form.data.description.length === 0) {
          handleSetOrRemoveInputError(
            "description",
            "Descreva como sera a festa para seus convidados",
          );
        }
        if (form.data.description.length > 0) {
          handleSetOrRemoveInputError("description", undefined);
        }
        break;
      case "cardColor":
        if (form.data.cardColor.length === 0) {
          handleSetOrRemoveInputError(
            "cardColor",
            "Selecione uma cor do convite",
          );
        }
        if (form.data.cardColor.length > 0) {
          handleSetOrRemoveInputError("cardColor", undefined);
        }
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    Object.keys(form.errors).length;
  }, [form.errors]);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Cadastro</Text>
          <Text style={styles.subTitle}>
            Preencha seus dados {JSON.stringify(form.errors)}
          </Text>
        </View>

        <View style={{ height: 700 }}>
          <View style={{ gap: 8, marginBottom: 12 }}>
            <Input
              onChangeText={(text) => handleInputChange("fullName", text)}
              label="Nome Pessoa"
              placeholder="João Caetano"
              onChange={() => {
                handleInputValidation("fullName");
              }}
              errorMessage={form.errors["fullName"]}
            />
            <Input
              onChangeText={(text) => handleInputChange("partyName", text)}
              label="Nome Festa"
              placeholder="Festa do João"
              errorMessage={form.errors["partyName"]}
            />
            <Input
              onChangeText={(text) => handleInputChange("food", text)}
              label="Comidas"
              placeholder="Lanche Partilhado"
              errorMessage={form.errors["food"]}
            />
            <Input
              onChangeText={(text) => handleInputChange("hours", text)}
              label="Horario"
              placeholder="20:00"
              errorMessage={form.errors["hours"]}
            />
            <Input
              onChangeText={(text) => handleInputChange("localization", text)}
              label="Localizacao"
              placeholder="Bairro Alecrim Dourado, Rua XYZ, 40"
              errorMessage={form.errors["localization"]}
            />
            <Input
              onChangeText={(text) => handleInputChange("date", text)}
              label="Data"
              placeholder="10/05/2026"
              errorMessage={form.errors["date"]}
            />
            <Input
              onChangeText={(text) => handleInputChange("description", text)}
              label="Descrição"
              placeholder="Festa mais do que especial!"
              errorMessage={form.errors["description"]}
            />
          </View>
          <ButtonGroupColors
            onSelect={(code) => handleInputChange("cardColor", code)}
            group={CARD_COLORS}
          />
        </View>

        <Text>Cor Selecionada: {form.data.cardColor}</Text>
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
