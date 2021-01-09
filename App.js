import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { BottomTabNavigator } from './Components/TabNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <NavigationContainer style={styles.navigationContainer}>
          <BottomTabNavigator/>
        </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigationContainer: {
  }
});
