import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ImageBackground,
} from "react-native";
import { Icon } from "react-native-elements";
import BudgetBar from "../Components/BudgetBar";

// const red = Math.min(2 - (2 * Fraction), 1) * 255; const green = Math.min(2 * Fraction, 1) * 255;

export const Home = ({ navigation, props }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/temp-background.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <BudgetBar style={{ position: "absolute", zIndex: 4 }} />
        <Text>Home</Text>
      </ImageBackground>
      <View style={styles.addButtonContainer}>
        <Icon
          raised
          reverse
          onPress={() => navigation.navigate("TransactionPage")}
          name="add"
          color="#000"
          style={styles.addButton}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  addButton: {
    zIndex: 5,
    flex: 1,
  },
  addButtonContainer: {
    zIndex: 5,
    bottom: 0,
    position: "absolute",
    marginBottom: 0,
  },
});
