import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Icon } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";
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
    marginBottom: 0,
  },
});
