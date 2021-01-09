import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from '../Screens/Home';
import { Necessities } from '../Screens/Necessities';
import { Personal } from '../Screens/Personal';
import { Entertainment } from '../Screens/Entertainment';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Necessities" component={Necessities} />
        <Tab.Screen name="Personal" component={Personal} />
        <Tab.Screen name="Entertainment" component={Entertainment} />
      </Tab.Navigator>
    );
  };
  
export { BottomTabNavigator };
  