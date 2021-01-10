import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import BottomSheet from "reanimated-bottom-sheet";
import TransactionsList from "../Components/TransactionsList";
import { MaterialIcons } from "@expo/vector-icons";
import ProgressBar from "react-native-progress/Bar";
import { Icon } from "react-native-elements";

const NecessitiesList = () => {
  return <TransactionsList category="Necessities"></TransactionsList>;
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
          <FontAwesome5
            name="toilet-paper"
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
      <BottomSheet
        ref={sheetRef}
        initialSnap={2}
        snapPoints={[600, 500, 160]}
        borderRadius={10}
        renderContent={NecessitiesList}
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
