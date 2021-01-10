import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { BottomTabNavigator } from "./Components/TabNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CATS } from "./Constants/constants";

export default function App() {
  const newUser = {
    totalBudget: 0,
    entertainmentBudget: 0,
    necessitiesBudget: 0,
    personalBudget: 0,
    totalTransactions: 0,
    entertainmentTransactions: 0,
    necessitiesTransactions: 0,
    personalTransactions: 0,
    cats: [CATS[0], CATS[3], CATS[7]],
  };

  async function userInfo() {
    let storedUser = await AsyncStorage.getItem("@user_info");
    JSON.parse(storedUser);
    if (!storedUser) {
      storedUser = JSON.stringify(newUser);
    }
    await AsyncStorage.setItem("@user_info", storedUser);
  }

  useEffect(() => {
    userInfo().then();
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <BottomTabNavigator style={styles.tab} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tab: {
    zIndex: -1,
  },
});
