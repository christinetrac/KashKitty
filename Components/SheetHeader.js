import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ProgressBar from "react-native-progress/Bar";
import { MaterialIcons } from "@expo/vector-icons";

function calculatePercentage(used, total) {
  if (!total || !used) {
    return 0;
  }
  return used / total;
}

export default function SheetHeader({ icon, total, used, color }) {
  let percentage = calculatePercentage(used, total);
  let barColor = color ? color : "#B7CC33";

  return (
      <View style={{alignItems: "center"}}>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F8EDEB",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: 380
      }}
    >
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MaterialIcons name="keyboard-arrow-down" size={35} color="#888888" />
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
            <Text style={{ color: "#5E6472", fontWeight:"600", fontSize:13, paddingBottom:4 }}>${used}</Text>
            <View>
              <ProgressBar
                progress={percentage}
                width={250}
                height={15}
                borderRadius={10}
                color={barColor}
                unfilledColor={"white"}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
              }}
            >
              <Text style={{ color: "#B4B4B4", flex: 1, fontWeight:"600", fontSize:13, paddingTop:4 }}>$0</Text>
              <Text
                style={{
                  color: "#B4B4B4",
                  flex: 1,
                  textAlign: "right",
                    fontWeight: "600",
                    fontSize: 13,
                    paddingTop:4
                }}
              >
                ${total}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
      </View>
  );
}
