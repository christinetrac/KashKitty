import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Icon, Overlay } from "react-native-elements";
import BudgetBar from "../Components/BudgetBar";
import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { addUserBudgets } from "../Utils/storage";
import BottomSheet from "reanimated-bottom-sheet";
import TransactionsList from "../Components/TransactionsList";
import ProgressBar from "react-native-progress/Bar";
import { MaterialIcons } from "@expo/vector-icons";

const HomeList = () => {
  return <TransactionsList category="Overall"></TransactionsList>;
};

const Header = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MaterialIcons name="drag-handle" size={40} color="black" />
        <View
          style={{
            flexDirection: "row",
            padding: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesome
            name="paw"
            size={30}
            color={"#A8A8A8"}
            style={styles.icons}
          />
          <ProgressBar
            style={{ marginLeft: 20 }}
            progress={1}
            width={250}
            height={15}
            borderRadius={10}
            color={"red"}
            unfilledColor={"white"}
          />
        </View>
      </View>
    </View>
  );
};
export const Home = ({ navigation, props }) => {
  const sheetRef = React.useRef(null);
  const [user, setUser] = useState(null);
  const [visible, setVisible] = useState(false);
  const [overall, setOverall] = useState("");
  const [entertain, setEntertain] = useState("");
  const [necessity, setNecessity] = useState("");
  const [personal, setPersonal] = useState("");

  const save = () => {
    addUserBudgets(overall, entertain, necessity, personal).then();
    setVisible(!visible);
  };

  async function userInfo() {
    let storedUser = await AsyncStorage.getItem("@user_info");
    JSON.parse(storedUser);
    if (!storedUser) return;
    setUser(storedUser);
  }

  useEffect(() => {
    userInfo().then();
  });

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/temp-background.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={{ alignItems: "center" }}>
          <View style={styles.centeredView}>
            <Overlay
              animationType="fade"
              transparent={true}
              isVisible={visible}
              fullScreen={true}
              overlayStyle={{ backgroundColor: "rgba(0, 0, 0, 0.45)" }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <View style={styles.description}>
                    <Text style={{ fontSize: 24, fontWeight: "600" }}>
                      This Month's Budget
                    </Text>
                    <Text style={{ fontSize: 10, fontWeight: "600" }}>
                      Your budget will reset every month.
                    </Text>
                  </View>
                  <Text style={styles.inputLabel}>OVERALL BUDGET</Text>
                  <TextInput
                    value={overall}
                    onChangeText={(overall) => {
                      setOverall(overall);
                    }}
                    style={styles.input}
                  />
                  <Text style={styles.inputLabel}>ENTERTAINMENT BUDGET</Text>
                  <TextInput
                    value={entertain}
                    onChangeText={(entertain) => {
                      setEntertain(entertain);
                    }}
                    style={styles.input}
                  />
                  <Text style={styles.inputLabel}>NECESSITY BUDGET</Text>
                  <TextInput
                    value={necessity}
                    onChangeText={(necessity) => {
                      setNecessity(necessity);
                    }}
                    style={styles.input}
                  />
                  <Text style={styles.inputLabel}>PERSONAL BUDGET</Text>
                  <TextInput
                    value={personal}
                    onChangeText={(personal) => {
                      setPersonal(personal);
                    }}
                    style={styles.input}
                  />
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity
                      onPress={() => save()}
                      style={styles.saveButton}
                    >
                      <Text
                        style={{
                          color: "#fff",
                          fontSize: 16,
                          fontWeight: "600",
                        }}
                      >
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
      <BottomSheet
        ref={sheetRef}
        initialSnap={2}
        snapPoints={[600, 500, 160]}
        renderContent={HomeList}
        renderHeader={Header}
        enabledContentGestureInteraction={false}
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
    top: 0,
    right: 0,
    position: "absolute",
    marginBottom: 50,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#F8EDEB",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    position: "relative",
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
    display: "flex",
    alignItems: "center",
  },
  description: {
    textAlign: "left",
    paddingBottom: 20,
  },
  input: {
    backgroundColor: "#fff",
    width: 290,
    height: 37,
    borderRadius: 5,
    marginBottom: 28,
    padding: 8,
  },
  inputLabel: {
    fontSize: 10,
    paddingBottom: 6,
    textAlign: "left",
    fontWeight: "600",
  },
});
