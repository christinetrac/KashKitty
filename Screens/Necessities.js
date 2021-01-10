import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import BudgetBar from "../Components/BudgetBar";
import { FontAwesome5 } from "@expo/vector-icons";
import {Icon} from "react-native-elements";

export const Necessities = ({ navigation }) => {
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
              <FontAwesome5 name="toilet-paper" size={35} color={"#E3E3E3"} />
            }
          />
          <Text>Necessities</Text>
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
