import React from "react";
import { Button, View } from "react-native";
import ProgressBar from "react-native-progress/Bar";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function BudgetBar() {
  const fraction = 90 / 100;
  let color = "#109671";
  return (
    <View
      style={{
        backgroundColor: "#E5E5E5",
        padding: 10,
        height: 130,
        borderRadius: 20,
        alignItems: "center",
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
        <FontAwesome name="heart" size={35} color={"#A8A8A8"} />
        {/* TODO Pass in icon name? */}
        <ProgressBar
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
  );
}
