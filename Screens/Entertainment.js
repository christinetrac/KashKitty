import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import BottomSheet from "reanimated-bottom-sheet";
import TransactionsList from "../Components/TransactionsList";
import SheetHeader from "../Components/SheetHeader";
import { Icon } from "react-native-elements";

const EnterTainList = () => {
  return <TransactionsList category="Entertainment"></TransactionsList>;
};
const Header = () => {
  return (
    <SheetHeader
      icon={
        <FontAwesome5
          name="utensils"
          size={30}
          color={"#A8A8A8"}
          style={styles.icons}
        />
      }
    />
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
        <BottomSheet
          ref={sheetRef}
          initialSnap={2}
          snapPoints={[600, 500, 160]}
          borderRadius={10}
          renderContent={EnterTainList}
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
    bottom: 0,
    position: "absolute",
    marginBottom: 50,
  },
});
