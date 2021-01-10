import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
} from "react-native";
import { BottomTabNavigator } from "./Components/TabNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CATS } from "./Constants/constants";
import { clearStorage } from "./Utils/storage";

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
    cats: [CATS[0], CATS[1], CATS[2], CATS[3], CATS[4], CATS[5], CATS[6], CATS[7]],
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
    <SafeAreaView style={styles.area}>
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
  area: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: '#fff'
  },
  tab: {
    zIndex: -1,
  },
});
