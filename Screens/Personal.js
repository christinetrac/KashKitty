import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Icon } from "react-native-elements";
import BottomSheet from "reanimated-bottom-sheet";
import TransactionsList from "../Components/TransactionsList";
import SheetHeader from "../Components/SheetHeader";
import { addUserBudgets, getStoredTransactions } from "../Utils/storage";

const PersonalList = () => {
  return <TransactionsList category="Personal"></TransactionsList>;
};

function getBarColor(percentage) {
  let rounded = Math.round(percentage * 100) / 100;
  if (rounded >= 0.0 && rounded < 0.2) {
    return "#109671";
  } else if (rounded >= 0.2 && rounded < 0.4) {
    return "#B7CC33";
  } else if (rounded >= 0.4 && rounded < 0.6) {
    return "#F8DC71";
  } else if (rounded >= 0.6 && rounded < 0.8) {
    return "#F8F290";
  } else {
    return "#DD6B6B";
  }
}

const Header = () => {
  let total = 1000;
  let used = 500;
  return (
    <SheetHeader
      icon={
        <FontAwesome
          name="heart"
          size={40}
          color={getBarColor(used / total)}
          style={styles.icons}
        />
      }
      total={total}
      used={used}
      color={getBarColor(used / total)}
    />
  );
};

export const Personal = ({ navigation }) => {
  const [transactions, setTransactions] = useState([]);
  const sheetRef = React.useRef(null);

  useEffect(() => {
    getStoredTransactions().then((res) => {
      setTransactions(res);
    });
  });
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/temp-background.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={{ alignItems: "center" }}>
          <Text>Personal</Text>
        </View>
        <BottomSheet
          ref={sheetRef}
          initialSnap={2}
          snapPoints={[800, 600, 190]}
          borderRadius={10}
          renderContent={PersonalList}
          renderHeader={Header}
          enabledContentGestureInteraction={false}
        />
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
        <Icon
          raised
          reverse
          onPress={() => setVisible(!visible)}
          name="edit"
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
    top: 0,
    right: 0,
    position: "absolute",
    marginBottom: 50,
  },
});
