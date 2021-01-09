import React from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import ProgressBar from "react-native-progress/Bar";
import { MaterialIcons } from "@expo/vector-icons";
import { withNavigation } from "react-navigation";

export default function BudgetBar({ navigation, categoryIcon }) {
  const fraction = 90 / 100; //TODO: Make this a prop
  let color = "#109671";

  function showAlert() {
    alert(`hi${navigation}`);
  }

  return (
    <View
      style={{
        width: "90%",
        height: 140,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("TransactionsList")}
      >
        <View
          style={{
            width: "100%",
            height: "100%",
            alignItems: "center",
            backgroundColor: "#F5F3F3",
            borderRadius: 20,
            justifyContent: "flex-end",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {categoryIcon}
            <ProgressBar
              style={{ marginLeft: 20 }}
              progress={fraction}
              width={250}
              height={15}
              borderRadius={10}
              color={color}
              unfilledColor={"white"}
            />
          </View>
          <MaterialIcons name="keyboard-arrow-down" size={30} color="#A8A8A8" />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
