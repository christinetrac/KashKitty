import React, {useState} from 'react';
import { StyleSheet, Text, View , TextInput} from 'react-native';


export const Transaction = (props) => {
    const [text, setText] = useState('')
  
    return (
      <View>
        <TextInput
          value={text}
          placeholder="Input Spending Amount..."
          onChangeText={(text) => value.match(/[0-9]*/gm) && setText(text)}
        />
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
