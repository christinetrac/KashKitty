import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ProgressBar from "react-native-progress/Bar";
import { MaterialIcons } from "@expo/vector-icons";
export default function SheetHeader({ icon, total, remaining }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MaterialIcons name="drag-handle" size={40} color="black" />
        <View
          style={{
            flexDirection: "row",
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {icon}
          <ProgressBar
            style={{ marginLeft: 20 }}
            progress={1}
            width={250}
            height={15}
            borderRadius={10}
            color={"red"}
            unfilledColor={"white"}
          />
        </View>
      </View>
    </View>
  );
}
