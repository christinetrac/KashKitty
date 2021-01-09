import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import BudgetBar from "../Components/BudgetBar";
import { FontAwesome5 } from "@expo/vector-icons";

export const Entertainment = ({ navigation }) => {
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
              <FontAwesome5 name="utensils" size={35} color={"#E3E3E3"} />
            }
          />
          <Text>Entertainment</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
