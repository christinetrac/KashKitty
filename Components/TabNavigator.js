import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator, NecessitiesStackNavigator, PersonalStackNavigator, EntertainmentStackNavigator } from './StackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "Home") {
                return <FontAwesome name="paw" size={size} color={color} />;
            } else if (route.name === "Necessities") {
                return (
                <FontAwesome5 name="toilet-paper" size={size} color={color} />
                );
            } else if (route.name === "Personal") {
                return <FontAwesome name="heart" size={size} color={color} />;
            } else if (route.name === "Entertain") {
                return <FontAwesome5 name="utensils" size={size} color={color} />;
            }
            },
        })}
        >
        <Tab.Screen name="Home" component={StackNavigator} />
        <Tab.Screen name="Necessities" component={NecessitiesStackNavigator} />
        <Tab.Screen name="Entertain" component={EntertainmentStackNavigator} />
        <Tab.Screen name="Personal" component={PersonalStackNavigator} />
        </Tab.Navigator>
    </NavigationContainer>
  );
};

export { BottomTabNavigator };
