import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import BottomSheet from "reanimated-bottom-sheet";
import TransactionsList from "../Components/TransactionsList";
import SheetHeader from "../Components/SheetHeader";
import { Icon } from "react-native-elements";
import { addUserBudgets, getStoredTransactions } from "../Utils/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CATS } from "../Constants/constants";

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
const EntertainList = () => {
  return <TransactionsList category="Entertainment"></TransactionsList>;
};
const Header = () => {
  let total = 1000;
  let used = 800;
  return (
    <SheetHeader
      icon={
        <FontAwesome5
          name="utensils"
          size={30}
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
export const Entertainment = ({ navigation }) => {
  const [transactions, setTransactions] = useState([]);
  const sheetRef = React.useRef(null);

  useEffect(() => {
    getStoredTransactions().then((res) => {
      setTransactions(res);
    }, []);
  });
  const [user, setUser] = useState(null);

  async function userInfo() {
    let storedUser = await AsyncStorage.getItem("@user_info");
    // if(!storedUser) return;
    setUser(JSON.parse(storedUser));
  }

  useEffect(() => {
    userInfo().then();
  }, []);
  function calculate() {
    if (user) {
      return (
        +Math.round((user.totalTransactions * 100.0) / user.totalBudget) / 100
      );
    }
  }

  const oreo =
    CATS[1].percent >= calculate() ? (
      <Image
        source={require("../Cats/oreo.png")}
        style={[styles.cat, styles.oreo]}
        resizeMode="contain"
      />
    ) : (
      <View />
    );
  const duck =
    CATS[7].percent >= calculate() ? (
      <Image
        source={require("../Cats/duck.png")}
        style={[styles.cat, styles.duck]}
        resizeMode="contain"
      />
    ) : (
      <View />
    );
  const cocoa =
    CATS[8].percent >= calculate() ? (
      <Image
        source={require("../Cats/cocoa.png")}
        style={[styles.cat, styles.cocoa]}
        resizeMode="contain"
      />
    ) : (
      <View />
    );
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/entertain.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.catContainer}>
          {oreo}
          {duck}
          {cocoa}
        </View>
        <BottomSheet
          ref={sheetRef}
          initialSnap={2}
          snapPoints={[600, 500, 190]}
          borderRadius={10}
          renderContent={EntertainList}
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
    right: 10,
    position: "absolute",
    marginBottom: 50,
  },
  catContainer: {
    position: "relative",
    height: 100 + "%",
    width: 100 + "%",
  },
  cat: {
    marginTop: 50,
    width: 130,
    height: 130,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    position: "absolute",
  },
  duck: {
    bottom: 265,
    left: 85,
    position: "absolute",
  },
  cocoa: {
    bottom: 190,
    right: 60,
    position: "absolute",
  },
  oreo: {
    bottom: 265,
    left: 0,
    position: "absolute",
  },
});
