import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';

import { StackNavigator, NecessitiesStackNavigator, PersonalStackNavigator, EntertainmentStackNavigator } from './StackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={StackNavigator} />
                <Tab.Screen name="Necessities" component={NecessitiesStackNavigator} />
                <Tab.Screen name="Personal" component={PersonalStackNavigator} />
                <Tab.Screen name="Entertainment" component={EntertainmentStackNavigator} />
            </Tab.Navigator>
        </NavigationContainer>
    );
  };
  
export { BottomTabNavigator };
  