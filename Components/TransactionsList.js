import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView, SectionList } from "react-native";
import ProgressBar from "react-native-progress/Bar";
import { FontAwesome } from "@expo/vector-icons";
const DATA = [
  {
    title: "Friday, January 8",
    data: [
      {
        spendingLevel: "Light spending",
        title: "McDonalds",
        amount: 7.43,
        id: 0,
      },
      {
        spendingLevel: "Light spending",
        title: "McDonalds",
        amount: 7.43,
        id: 2,
      },
    ],
  },
  {
    title: "Sunday, January 9",
    data: [
      {
        spendingLevel: "Light spending",
        title: "McDonalds",
        amount: 7.43,
        id: 1,
      },
    ],
  },
];

const Transaction = ({ title, spendingLevel, amount }) => (
  <View style={styles.transaction}>
    <View
      style={{ flex: 2, flexDirection: "row", justifyContent: "space-between" }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <View
          style={{
            backgroundColor: "red",
            width: 25,
            height: 25,
            borderRadius: 100,
          }}
        />
      </View>

      <View style={{ flex: 2 }}>
        <Text style={{ fontSize: 10, textTransform: "uppercase" }}>
          {spendingLevel}
        </Text>
        <Text style={{ fontSize: 20 }}>{title}</Text>
      </View>
    </View>
    <View
      style={{
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "center",
      }}
    >
      <Text style={styles.amount}>${amount}</Text>
    </View>
  </View>
);

export default function TransactionsList(props) {
  return (
    <View style={styles.list}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* TODO Replace with prop */}
        <FontAwesome name="paw" size={35} color={"#E3E3E3"} />
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

      <Text style={{ fontWeight: "bold", fontSize: 40 }}>Entertainment</Text>
      <Text>BUDGET</Text>
      <SafeAreaView style={{ marginHorizontal: 30 }}>
        <SectionList
          style={{ height: 500 }}
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <Transaction
              title={item.title}
              spendingLevel={item.spendingLevel}
              amount={item.amount}
            />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.date}>{title}</Text>
          )}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: "white",
    height: 600,
    padding: 30,
  },
  container: {
    flex: 1,
  },
  button: {
    borderRadius: 10,
    backgroundColor: "#DDDDDD",
    justifyContent: "center",
    alignItems: "center",
  },
  date: {
    fontSize: 15,
    paddingLeft: 20,
  },
  transaction: {
    backgroundColor: "#EAEAEA",
    marginVertical: 8,
    borderRadius: 15,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  amount: { fontSize: 20, paddingRight: 15 },
});
