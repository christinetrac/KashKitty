import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Entertainment = (props) => {
    return (
        <View style={styles.container}>
            <Text>
                Entertainment
            </Text>
        </View>
    )  
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });