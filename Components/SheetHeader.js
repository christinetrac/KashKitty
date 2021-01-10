import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ProgressBar from "react-native-progress/Bar";
import { MaterialIcons } from "@expo/vector-icons";
export default function SheetHeader({ icon, total, used }) {
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
          <View style={{ width: 40, height: 40 }}>{icon}</View>

          <View
            style={{
              alignItems: "center",
              padding: 10,
            }}
          >
            <Text style={{ color: "#5E6472" }}>${used}</Text>
            <View>
              <ProgressBar
                progress={1}
                width={250}
                height={15}
                borderRadius={10}
                color={"red"}
                unfilledColor={"white"}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
              }}
            >
              <Text style={{ color: "#B4B4B4", flex: 1 }}>$0</Text>
              <Text
                style={{
                  color: "#B4B4B4",
                  flex: 1,
                  textAlign: "right",
                }}
              >
                ${total}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dollar: { color: "#B4B4B4", flex: 1 },
});
