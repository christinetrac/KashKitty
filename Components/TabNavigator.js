import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { Home } from '../Screens/Home';
import { Necessities } from '../Screens/Necessities';
import { Personal } from '../Screens/Personal';
import { Entertainment } from '../Screens/Entertainment';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Necessities" component={Necessities} />
                <Tab.Screen name="Personal" component={Personal} />
                <Tab.Screen name="Entertainment" component={Entertainment} />
            </Tab.Navigator>
        </NavigationContainer>
    );
  };
  
export { BottomTabNavigator };
  