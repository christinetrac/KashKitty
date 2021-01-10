import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, Image} from "react-native";
import {Icon, Overlay} from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { addUserBudgets } from "../Utils/storage";
import BottomSheet from "reanimated-bottom-sheet";
import TransactionsList from "../Components/TransactionsList";
import SheetHeader from "../Components/SheetHeader";
import {CATS} from "../Constants/constants";

export const Home = ({ navigation, props }) => {
  const sheetRef = React.useRef(null);
  const [visible, setVisible] = useState(false);
  const [overall, setOverall] = useState('');
  const [entertain, setEntertain] = useState('');
  const [necessity, setNecessity] = useState('');
  const [personal, setPersonal] = useState('');

  const save = () => {
    addUserBudgets(overall, entertain, necessity, personal).then();
    setVisible(!visible);
  };

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

  const froggy = (CATS[3].percent >= calculate()) ? (
      <Image source={require('../Cats/froggy.png')} style={[styles.cat, styles.froggy]} resizeMode="contain"/>
  ) : (
      <View/>
  );
  const creamsicle = (CATS[5].percent >= calculate()) ? (
      <Image source={require('../Cats/creamsicle.png')} style={[styles.cat, styles.creamsicle]} resizeMode="contain"/>
  ) : (
      <View/>
  );
  const raymond = (CATS[6].percent >= calculate()) ? (
      <Image source={require('../Cats/raymond.png')} style={[styles.cat, styles.raymond]} resizeMode="contain"/>
  ) : (
      <View/>
  );
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
  const oreo = (CATS[1].percent >= calculate()) ? (
      <Image source={require('../Cats/oreo.png')} style={[styles.cat, styles.oreo]} resizeMode="contain"/>
  ) : (
      <View/>
  );
  const duck = (CATS[7].percent >= calculate()) ? (
      <Image source={require('../Cats/duck.png')} style={[styles.cat, styles.duck]} resizeMode="contain"/>
  ) : (
      <View/>
  );
  const cocoa = (CATS[8].percent >= calculate()) ? (
      <Image source={require('../Cats/cocoa.png')} style={[styles.cat, styles.cocoa]} resizeMode="contain"/>
  ) : (
      <View/>
  );

  const HomeList = () => {
    return <TransactionsList category="Overall"></TransactionsList>;
  };

  const Header = () => {
    return (
      <SheetHeader
        icon={
          <FontAwesome
            name="paw"
            size={30}
            color={"#A8A8A8"}
            style={styles.icons}
          />
        }
        total={1000}
        used={55}
      />
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/overall.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={{ alignItems: "center", position: "relative" }}>
          <View style={styles.catContainer}>
            {leafy}
            {oreo}
            {meanie}
            {froggy}
            {floaty}
            {creamsicle}
            {raymond}
            {duck}
            {cocoa}
          </View>
          <View style={styles.centeredView}>
            <Overlay animationType="fade"
                     transparent={true}
                     isVisible={visible}
                     fullScreen={true}
                     overlayStyle={{backgroundColor: 'rgba(0, 0, 0, 0.45)'}}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <View style={styles.description}>
                    <Text style={{fontSize:24, fontWeight: '600'}}>This Month's Budget</Text>
                    <Text style={{fontSize:10, fontWeight: '600'}}>Your budget will reset every month.</Text>
                  </View>
                  <Text style={styles.inputLabel}>OVERALL BUDGET</Text>
                  <TextInput
                      value={overall}
                      onChangeText={(overall) => {
                        setOverall(overall)
                      }}
                      style={styles.input}
                  />
                  <Text style={styles.inputLabel}>ENTERTAINMENT BUDGET</Text>
                  <TextInput
                      value={entertain}
                      onChangeText={(entertain) => {
                        setEntertain(entertain)
                      }}
                      style={styles.input}
                  />
                  <Text style={styles.inputLabel}>NECESSITY BUDGET</Text>
                  <TextInput
                      value={necessity}
                      onChangeText={(necessity) => {
                        setNecessity(necessity)
                      }}
                      style={styles.input}
                  />
                  <Text style={styles.inputLabel}>PERSONAL BUDGET</Text>
                  <TextInput
                      value={personal}
                      onChangeText={(personal) => {
                        setPersonal(personal)
                      }}
                      style={styles.input}
                  />
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => save()} style={styles.saveButton}>
                      <Text style={{color: '#fff', fontSize:16, fontWeight: '600'}}>
                        Save
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Overlay>
          </View>
        </View>
        <BottomSheet
          ref={sheetRef}
          initialSnap={2}
          snapPoints={[600, 500, 160]}
          renderContent={HomeList}
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
    position: "relative",
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  modalView: {
    margin: 20,
    backgroundColor: "#F8EDEB",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    position: 'relative',
    maxHeight: 549,
    minWidth: 330,
  },
  saveButton: {
    alignItems: "center",
    backgroundColor: "#FEC89A",
    padding: 10,
    width: 160,
    height: 43,
    borderRadius: 30,
    textAlign: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  description: {
    textAlign: "left",
    paddingBottom: 20
  },
  input: {
    backgroundColor: '#fff',
    width: 290,
    height: 37,
    borderRadius: 5,
    marginBottom: 28,
    padding: 8
  },
  inputLabel: {
    fontSize: 10,
    paddingBottom: 6,
    textAlign: 'left',
    fontWeight: '600'
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
  leafy: {
    top: 35,
    left: 15,
    position: "absolute",
  },
  oreo: {
    bottom: 160,
    right: 10,
    position: "absolute",
  },
  meanie: {
    top: 75,
    right: 70,
    position: "absolute",
  },
  froggy: {
    top: 150,
    left: 50,
    position: "absolute",
  },
  floaty: {
    bottom: 250,
    left: 30,
    position: "absolute",
  },
  creamsicle: {
    top: 200,
    right: 75,
    position: "absolute",
  },
  raymond: {
    bottom: 180,
    left: 140,
    position: "absolute",
  },
  duck: {
    bottom: 340,
    right: 60,
    position: "absolute",
  },
  cocoa: {
    bottom: 380,
    left: 10,
    position: "absolute",
  },
});
