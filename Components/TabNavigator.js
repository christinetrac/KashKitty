import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import {
  StackNavigator,
  NecessitiesStackNavigator,
  PersonalStackNavigator,
  EntertainmentStackNavigator,
} from "./StackNavigator";
import { StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "HOME") {
              return (
                <FontAwesome
                  name="paw"
                  size={size}
                  color={color}
                  style={styles.icons}
                />
              );
            } else if (route.name === "NECESSITIES") {
              return (
                <FontAwesome5
                  name="toilet-paper"
                  size={size}
                  color={color}
                  style={styles.icons}
                />
              );
            } else if (route.name === "ENTERTAIN") {
              return (
                <FontAwesome5
                  name="utensils"
                  size={size}
                  color={color}
                  style={styles.icons}
                />
              );
            } else if (route.name === "PERSONAL") {
              return (
                <FontAwesome
                  name="heart"
                  size={size}
                  color={color}
                  style={styles.icons}
                />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
          style: {
            height: 78,
          },
          tabStyle: {
            height: 78,
            backgroundColor: "#fff",
          },
        }}
      >
        <Tab.Screen name="HOME" component={StackNavigator} />
        <Tab.Screen name="NECESSITIES" component={NecessitiesStackNavigator} />
        <Tab.Screen name="ENTERTAIN" component={EntertainmentStackNavigator} />
        <Tab.Screen name="PERSONAL" component={PersonalStackNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  icons: {
    marginTop: 30,
  },
});

export { BottomTabNavigator };
