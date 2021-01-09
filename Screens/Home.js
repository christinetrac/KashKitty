import React from "react";
import { StyleSheet, Text, View } from "react-native";

import BudgetBar from "../Components/BudgetBar";

// const red = Math.min(2 - (2 * Fraction), 1) * 255; const green = Math.min(2 * Fraction, 1) * 255;
export const Home = (props) => {
  return (
    <View style={styles.container}>
      <BudgetBar style={{ alignSelf: "flex-start" }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
