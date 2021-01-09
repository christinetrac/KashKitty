import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { SafeAreaView, FlatList } from "react-native";

const data = [
  { spendingLevel: "Light spending", title: "McDonalds", amount: 7.43, id: 0 },
  { spendingLevel: "Light spending", title: "McDonalds", amount: 7.43, id: 1 },
  { spendingLevel: "Light spending", title: "McDonalds", amount: 7.43, id: 2 },
  { spendingLevel: "Light spending", title: "McDonalds", amount: 7.43, id: 3 },
  { spendingLevel: "Light spending", title: "McDonalds", amount: 7.43, id: 4 },
  { spendingLevel: "Light spending", title: "McDonalds", amount: 7.43, id: 5 },
  { spendingLevel: "Light spending", title: "McDonalds", amount: 7.43, id: 6 },
  { spendingLevel: "Light spending", title: "McDonalds", amount: 7.43, id: 7 },
  { spendingLevel: "Light spending", title: "McDonalds", amount: 7.43, id: 9 },
];

const Transaction = ({ title, spendingLevel, amount }) => (
  <View style={styles.transaction}>
    <View
      style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}
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
      <Text style={{ fontSize: 20 }}>${amount}</Text>
    </View>
  </View>
);

export default function TransactionsList(props) {
  return (
    <View style={{}}>
      <Text>Personal</Text>
      <Text>BUDGET</Text>
      <TouchableHighlight
        style={{ borderRadius: 10, backgroundColor: "red" }}
        onPress={() => alert("hello")}
      >
        <View style={styles.button}>
          <Text>SAT</Text>
          <Text style={styles.date}>09</Text>
        </View>
      </TouchableHighlight>
      <SafeAreaView style={{ marginHorizontal: 30 }}>
        <FlatList
          style={{ height: 500 }}
          data={data}
          renderItem={({ item }) => (
            <Transaction
              title={item.title}
              amount={item.amount}
              spendingLevel={item.spendingLevel}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
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
    fontSize: 40,
  },
  transaction: {
    backgroundColor: "#f9c2ff",
    marginVertical: 8,
    borderRadius: 15,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
