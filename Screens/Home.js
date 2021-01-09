import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Icon } from 'react-native-elements';

export const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>
                Home
            </Text>
            <View style={styles.addButtonContainer}>
                <Icon raised reverse onPress={() => navigation.navigate("TransactionPage")} name='add' color='#000' style={styles.addButton}/>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    },
    addButton: {
       zIndex: 5,
       flex: 1,
    },
    addButtonContainer: {
        zIndex: 5,
        bottom: 0,
        position: 'absolute',
        marginBottom: 0,
    }
  });