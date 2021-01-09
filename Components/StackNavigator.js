import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from '../Screens/Home';
import { TransactionPage } from './TransactionPage';
import { Necessities } from '../Screens/Necessities';
import { Personal } from '../Screens/Personal';
import { Entertainment } from '../Screens/Entertainment';

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerShown: false
};

const StackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{headerShown: false}} component={Home} />
        <Stack.Screen name="TransactionPage" options={{headerShown: true}} component={TransactionPage} />
      </Stack.Navigator>
    );
};

const NecessitiesStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
          <Stack.Screen name="Necessities" component={Necessities} />
        </Stack.Navigator>
    );
};

const PersonalStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
          <Stack.Screen name="Personal" component={Personal} />
        </Stack.Navigator>
    );
};

const EntertainmentStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
          <Stack.Screen name="Entertainment" component={Entertainment} />
        </Stack.Navigator>
    );
};

export { StackNavigator, NecessitiesStackNavigator, PersonalStackNavigator, EntertainmentStackNavigator };
