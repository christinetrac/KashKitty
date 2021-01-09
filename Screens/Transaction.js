import React, {useState} from 'react';
import { StyleSheet, Text, View , TextInput} from 'react-native';


export const Transaction = (props) => {
    const [text, setText] = useState('')
  
    return (
      <View>
        <TextInput
          value={text}
          style={{ fontSize: 24, color: 'steelblue' }}
          placeholder="Type here..."
          onChangeText={(text) => {
            setText(text)
          }}
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
