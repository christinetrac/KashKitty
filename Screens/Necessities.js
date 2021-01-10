import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import BottomSheet from "reanimated-bottom-sheet";
import TransactionsList from "../Components/TransactionsList";

const NecessitiesList = () => {
  return (
    <TransactionsList
      catIcon={
        <FontAwesome5
          name="toilet-paper"
          size={30}
          color={"#A8A8A8"}
          style={styles.icons}
        />
      }
      category="Necessities"
    ></TransactionsList>
  );
};
export const Necessities = ({ navigation }) => {
  const sheetRef = React.useRef(null);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/temp-background.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={{ alignItems: "center" }}>
          <Text>Necessities</Text>
        </View>
      </ImageBackground>
      <BottomSheet
        ref={sheetRef}
        initialSnap={2}
        snapPoints={[600, 500, 130]}
        borderRadius={10}
        renderContent={NecessitiesList}
      />
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
