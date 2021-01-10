import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity} from "react-native";
import {Icon, Overlay} from "react-native-elements";
import BudgetBar from "../Components/BudgetBar";
import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {addUserBudgets} from "../Utils/storage";

// const red = Math.min(2 - (2 * Fraction), 1) * 255; const green = Math.min(2 * Fraction, 1) * 255;

export const Home = ({ navigation, props }) => {
  const [user, setUser] = useState(null);
  const [visible, setVisible] = useState(false);
  const [overall, setOverall] = useState('');
  const [entertain, setEntertain] = useState('');
  const [necessity, setNecessity] = useState('');
  const [personal, setPersonal] = useState('');

  const save = () => {
    addUserBudgets(overall, entertain, necessity, personal).then();
    setVisible(!visible);
  };

  async function userInfo() {
    let storedUser = await AsyncStorage.getItem('@user_info');
    JSON.parse(storedUser);
    if(!storedUser) return;
    setUser(storedUser);
  }

  useEffect(()=> {
    userInfo().then();
  });

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
    bottom: 0,
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
  }
});
