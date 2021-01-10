import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Icon } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";
import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";
import TransactionsList from "./TransactionsList";

const TAB_BAR_HEIGHT = 49;

// const red = Math.min(2 - (2 * Fraction), 1) * 255; const green = Math.min(2 * Fraction, 1) * 255;

export const Home = ({ navigation, props }) => {
  const renderContent = () => (
    <View
      style={{
        backgroundColor: "white",
        padding: 16,
        height: 1000,
      }}
    >
      <Text>Swipe down to close</Text>
    </View>
  );

  const sheetRef = React.useRef(null);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/temp-background.jpg")}
        style={{ width: "100%", height: "100%" }}
      ></ImageBackground>
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
      <BottomSheet
        ref={sheetRef}
        initialSnap={0}
        snapPoints={[600, 500, 130]}
        borderRadius={10}
        renderContent={TransactionsList}
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
