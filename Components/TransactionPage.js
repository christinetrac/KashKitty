import React, {useState} from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import DropDownPicker from 'react-native-dropdown-picker';
import { storeTransaction } from "../Utils/storage";

export const TransactionPage = (props) => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [level, setLevel] = useState('');

    const saveTransaction = () => {
        const transaction = {
            name: description,
            amount: amount,
            date: new Date().toDateString(),
            type: category,
            level: level
        };
        storeTransaction(transaction).then();
    };

    return (
        <View style={styles.container}>
            <TextInput
                value={description}
                placeholder="Input Description..."
                onChangeText={(description) => {
                    setDescription(description)
                }}
            />
            <TextInput
                value={amount}
                placeholder="Input Spending Amount..."
                onChangeText={(amount) => {
                    setAmount(amount)
                }}
                />
            <DropDownPicker
                placeholder="Categories"
                items={[
                    {label: 'Entertainment', value: 'Entertainment', hidden: true},
                    {label: 'Necessities', value: 'Necessities'},
                    {label: 'Personal', value: 'Personal'},
                ]}
                defaultValue={category}
                containerStyle={{height: 40}}
                style={{backgroundColor: '#fafafa'}}
                itemStyle={{
                    justifyContent: 'flex-start'
                }}
                dropDownStyle={{backgroundColor: '#fafafa'}}
                onChangeItem={item => {setCategory(item.value)}}
            />
            <DropDownPicker
                placeholder="Level"
                items={[
                    {label: 'Light', value: 'Light', hidden: true},
                    {label: 'Moderate', value: 'Moderate'},
                    {label: 'Heavy', value: 'Heavy'},
                ]}
                defaultValue={level}
                containerStyle={{height: 40}}
                style={{backgroundColor: '#fafafa'}}
                itemStyle={{
                    justifyContent: 'flex-start'
                }}
                dropDownStyle={{backgroundColor: '#fafafa'}}
                onChangeItem={item => {setLevel(item.value)}}
            />
            <Button
                title={'Save'}
                onPress={() => saveTransaction()}
            />
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
