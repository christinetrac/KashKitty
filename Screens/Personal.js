import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import BottomSheet from "reanimated-bottom-sheet";
import TransactionsList from "../Components/TransactionsList";

const PersonalList = () => {
  return (
    <TransactionsList
      catIcon={
        <FontAwesome
          name="heart"
          size={30}
          color={"#A8A8A8"}
          style={styles.icons}
        />
      }
      category="Personal"
    ></TransactionsList>
  );
};

export const Personal = ({ navigation }) => {
  const sheetRef = React.useRef(null);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/temp-background.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={{ alignItems: "center" }}>
          <Text>Personal</Text>
        </View>
      </ImageBackground>
      <BottomSheet
        ref={sheetRef}
        initialSnap={2}
        snapPoints={[600, 500, 130]}
        borderRadius={10}
        renderContent={PersonalList}
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
