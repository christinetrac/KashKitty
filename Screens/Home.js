import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Icon } from "react-native-elements";
import BudgetBar from "../Components/BudgetBar";
import { FontAwesome } from "@expo/vector-icons";

// const red = Math.min(2 - (2 * Fraction), 1) * 255; const green = Math.min(2 * Fraction, 1) * 255;

export const Home = ({ navigation, props }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/temp-background.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={{ alignItems: "center" }}>
          <BudgetBar
            navigation={navigation}
            categoryIcon={
              <FontAwesome name="paw" size={35} color={"#E3E3E3"} />
            }
          />
          <Text>Home</Text>
        </View>
      </ImageBackground>
      <View style={styles.addButtonContainer}>
        <Icon
          raised
          reverse
          onPress={() => navigation.navigate("TransactionPage")}
          name="add"
          color="#FEC89A"
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
    marginBottom: 50,
  },
});
