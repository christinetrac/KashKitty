import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView, SectionList } from "react-native";

function getSpendingClass(spendingLevel) {
  if (spendingLevel === "Light Spending") {
    return styles.lightLevel;
  } else if (spendingLevel === "Moderate Spending") {
    return styles.medLevel;
  } else {
    return styles.heavyLevel;
  }
}

const DATA = [
  {
    title: "Entertainment",
    data: [
      {
        spendingLevel: "Light Spending",
        title: "McDonalds",
        amount: 7.43,
        id: 0,
      },
      {
        spendingLevel: "Moderate Spending",
        title: "Chipotle",
        amount: 25.43,
        id: 2,
      },
    ],
  },
  {
    title: "Personal",
    data: [
      {
        spendingLevel: "Moderate Spending",
        title: "Slippers",
        amount: 3.43,
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
        <View style={getSpendingClass()} />
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

export default function TransactionsList({ catIcon, category, transactions }) {
  useEffect(() => {
    console.log(transactions);
  }, [transactions]);
  return (
    <View style={styles.list}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 40,
          alignContent: "flex-end",
        }}
      >
        {category}
      </Text>
      <Text style={{ marginBottom: 20 }}>BUDGET</Text>
      <View
        style={{
          backgroundColor: "#B8F2E6",
          width: 70,
          height: 70,
          borderRadius: 16,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "bold" }}>Mon</Text>
        <Text style={{ fontWeight: "bold" }}>11</Text>
      </View>
      <View
        style={{
          borderStyle: "solid",
          borderWidth: 1,
          borderRadius: 1,
          marginVertical: 10,
        }}
      ></View>
      <SafeAreaView style={{ marginHorizontal: 20 }}>
        <SectionList
          style={{ height: 280 }}
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
    backgroundColor: "#F8EDEB",
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
    backgroundColor: "white",
    marginVertical: 8,
    borderRadius: 15,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  lightLevel: {
    backgroundColor: "#BBDCAB",
    width: 25,
    height: 25,
    borderRadius: 100,
  },
  medLevel: {
    backgroundColor: "#EFC99B",
    width: 25,
    height: 25,
    borderRadius: 100,
  },
  heavyLevel: {
    backgroundColor: "#EF9B9B",
    width: 25,
    height: 25,
    borderRadius: 100,
  },
  amount: { fontSize: 20, paddingRight: 15 },
});
