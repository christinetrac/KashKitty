import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View, ImageBackground, Image} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import BottomSheet from "reanimated-bottom-sheet";
import TransactionsList from "../Components/TransactionsList";
import SheetHeader from "../Components/SheetHeader";
import { Icon } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {CATS} from "../Constants/constants";

const NecessitiesList = () => {
  return <TransactionsList category="Necessities"></TransactionsList>;
};
const Header = () => {
  return (
    <SheetHeader
      icon={
        <FontAwesome5
          name="toilet-paper"
          size={30}
          color={"#A8A8A8"}
          style={styles.icons}
        />
      }
    />
  );
};
export const Necessities = ({ navigation }) => {
  const sheetRef = React.useRef(null);
  const [user, setUser] = useState(null);

    async function userInfo() {
        let storedUser = await AsyncStorage.getItem('@user_info');
        // if(!storedUser) return;
        setUser(JSON.parse(storedUser));
    }

    useEffect(() => {
        userInfo().then();
    });
    function calculate() {
        if(user){
            return +Math.round(user.totalTransactions*100.0 / user.totalBudget)/100;
        }
    }

    const meanie = (CATS[2].percent >= calculate()) ? (
        <Image source={require('../Cats/meanie.png')} style={[styles.cat, styles.meanie]} resizeMode="contain"/>
    ) : (
        <View/>
    );
    const leafy = (CATS[0].percent >= calculate()) ? (
        <Image source={require('../Cats/leafy.png')} style={[styles.cat, styles.leafy]} resizeMode="contain"/>
    ) : (
        <View/>
    );
    const floaty = (CATS[4].percent >= calculate()) ? (
        <Image source={require('../Cats/floaty.png')} style={[styles.cat, styles.floaty]} resizeMode="contain"/>
    ) : (
        <View/>
    );

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/necessities.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.catContainer}>
            {meanie}
            {leafy}
            {floaty}
        </View>
        <BottomSheet
          ref={sheetRef}
          initialSnap={2}
          snapPoints={[600, 500, 160]}
          borderRadius={10}
          renderContent={NecessitiesList}
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
        height: 100+'%',
        width: 100+'%',
    },
    cat: {
        marginTop: 50,
        width: 130,
        height: 130,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        position: 'absolute',
    },
    meanie: {
        top: 80,
        left: 160,
        position: "absolute",
    },
    leafy: {
        bottom: 210,
        right: 120,
        position: "absolute",
    },
    floaty: {
        top: 160,
        right: 0,
        position: "absolute",
    },
});
