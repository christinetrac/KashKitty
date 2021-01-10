import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import BottomSheet from "reanimated-bottom-sheet";
import TransactionsList from "../Components/TransactionsList";
import { MaterialIcons } from "@expo/vector-icons";
import ProgressBar from "react-native-progress/Bar";

const EnterTainList = () => {
  return <TransactionsList category="Entertainment"></TransactionsList>;
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
            name="utensils"
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
export const Entertainment = ({ navigation }) => {
  const sheetRef = React.useRef(null);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/temp-background.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={{ alignItems: "center" }}>
          <Text>Entertainment</Text>
        </View>
      </ImageBackground>
      <BottomSheet
        ref={sheetRef}
        initialSnap={2}
        snapPoints={[600, 500, 160]}
        borderRadius={10}
        renderContent={EnterTainList}
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
});
