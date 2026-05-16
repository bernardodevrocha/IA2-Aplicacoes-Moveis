import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { Button } from "../Components/Buttons";
import { THEME } from "../styles/constants";
import { Input } from "../Components/Input";
import { ButtonGroupColors } from "../Components/ButtonGroupColors";
import { useRouter } from "expo-router";

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

export type Form = {
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
  const router = useRouter();
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

  function handleSubmit() {
    router.push({
      pathname: "/preview",
      params: form.data,
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
      <KeyboardAvoidingView style={styles.keyboardContainer}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Cadastro</Text>
          <Text style={styles.subTitle}>Preencha seus dados</Text>
        </View>

        <View style={styles.formContainer}>
          <View style={{ gap: 8, marginBottom: 12 }}>
            <Input
              onChangeText={(text) => handleInputChange("fullName", text)}
              label="Nome Pessoa"
              placeholder="João Caetano"
              defaultValue={form.data.fullName}
              onChange={() => {
                handleInputValidation("fullName");
              }}
              onBlur={() => {
                handleInputValidation("fullName");
              }}
              errorMessage={form.errors["fullName"]}
            />
            <Input
              onChangeText={(text) => handleInputChange("partyName", text)}
              label="Nome Festa"
              placeholder="Festa do João"
              defaultValue={form.data.partyName}
              errorMessage={form.errors["partyName"]}
              onChange={() => {
                handleInputValidation("partyName");
              }}
              onBlur={() => {
                handleInputValidation("partyName");
              }}
            />
            <Input
              onChangeText={(text) => handleInputChange("food", text)}
              label="Comidas"
              placeholder="Lanche Partilhado"
              defaultValue={form.data.food}
              onChange={() => {
                handleInputValidation("food");
              }}
              onBlur={() => {
                handleInputValidation("food");
              }}
              errorMessage={form.errors["food"]}
            />
            <Input
              onChangeText={(text) => handleInputChange("hours", text)}
              label="Horario"
              placeholder="20:00"
              defaultValue={form.data.hours}
              onChange={() => {
                handleInputValidation("hours");
              }}
              onBlur={() => {
                handleInputValidation("hours");
              }}
              errorMessage={form.errors["hours"]}
            />
            <Input
              onChangeText={(text) => handleInputChange("localization", text)}
              label="Localizacao"
              placeholder="Bairro Alecrim Dourado, Rua XYZ, 40"
              defaultValue={form.data.localization}
              onChange={() => {
                handleInputValidation("localization");
              }}
              onBlur={() => {
                handleInputValidation("localization");
              }}
              errorMessage={form.errors["localization"]}
            />
            <Input
              onChangeText={(text) => handleInputChange("date", text)}
              label="Data"
              placeholder="10/05/2026"
              defaultValue={form.data.date}
              onChange={() => {
                handleInputValidation("date");
              }}
              onBlur={() => {
                handleInputValidation("date");
              }}
              errorMessage={form.errors["date"]}
            />
            <Input
              onChangeText={(text) => handleInputChange("description", text)}
              label="Descrição"
              placeholder="Festa mais do que especial!"
              defaultValue={form.data.description}
              onChange={() => {
                handleInputValidation("description");
              }}
              onBlur={() => {
                handleInputValidation("description");
              }}
              errorMessage={form.errors["description"]}
            />
          </View>
          <ButtonGroupColors
            onSelect={(code) => handleInputChange("cardColor", code)}
            group={CARD_COLORS}
          />
        </View>

        <View style={styles.footerContainer}>
          <Button onPress={handleSubmit} label="Cadastrar Convite" />
        </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 12,
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  keyboardContainer: {
    flex: 1,
  },
  scrollContent: {
    gap: 16,
    paddingBottom: 24,
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
  formContainer: {
    gap: 12,
  },
});
