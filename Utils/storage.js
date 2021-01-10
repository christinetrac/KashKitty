import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import { CATS, TYPE } from '../Constants/constants';

const clearStorage = async () => {
    try {
        await AsyncStorage.clear();
        alert('Storage successfully cleared!');
    } catch (e) {
        alert('Failed to clear the async storage.');
    }
};

/*  transaction object model:

    transaction.name = string
    transaction.amount = double
    transaction.date = Date type
    transaction.type = 1 of the following: TYPE.necessities, TYPE.personal, TYPE.entertainment (string)
    transaction.level = 1 of the following: LEVEL.light, LEVEL.moderate, LEVEL.heavy (string)
*/

const storeTransaction = async (transaction) => {
    try {
        let storedTransactions = await AsyncStorage.getItem('@transaction_list');
        JSON.parse(storedTransactions);
        if(!storedTransactions) {
            storedTransactions = [transaction];
        } else {
            storedTransactions = [...JSON.parse(storedTransactions), transaction];
        }
        await AsyncStorage.setItem('@transaction_list', JSON.stringify(storedTransactions));
    } catch(e) {
        alert('Failed to store the transaction.');
    }
};

const getStoredTransactions = async () => {
    try {
        const storedTransactions = await AsyncStorage.getItem('@transaction_list');
        if(!storedTransactions) return null;
        return JSON.parse(storedTransactions);
    } catch(e) {
        alert('Failed to read the transactions.');
    }
};

/*  user object model:

    user.totalBudget = double
    user.entertainmentBudget = double
    user.necessitiesBudget = double
    user.personalBudget = double
    user.totalTransactions = double
    user.entertainmentTransactions = double
    user.necessitiesTransactions = double
    user.personalTransactions = double
    user.cats = [array] of cats user has
*/

const newUser = {
    totalBudget: 0,
    entertainmentBudget: 0,
    necessitiesBudget: 0,
    personalBudget: 0,
    totalTransactions: 0,
    entertainmentTransactions: 0,
    necessitiesTransactions: 0,
    personalTransactions: 0,
    cats: [CATS[0], CATS[3], CATS[7]]
};

const addUserTransactions = async (transaction) => {
    try{
        AsyncStorage.getItem('@user_info')
            .then(
                user => {
                    user = JSON.parse(user);
                    user.totalTransactions += parseInt(transaction.amount);
                    if(transaction.type === TYPE.necessities) user.necessitiesTransactions += parseInt(transaction.amount);
                    if(transaction.type === TYPE.entertainment) user.entertainmentTransactions += parseInt(transaction.amount);
                    if(transaction.type === TYPE.personal) user.personalTransactions += parseInt(transaction.amount);
                    AsyncStorage.setItem('@user_info', JSON.stringify(user));
                });
    } catch(e) {
        alert('Failed to add the user transactions.');
    }
};

const addUserBudgets = async (overall, entertain, necessity, personal) => {
    try{
        AsyncStorage.getItem('@user_info')
            .then(
                user => {
                    user = JSON.parse(user);
                    user.totalBudget = parseInt(overall);
                    user.entertainmentBudget = parseInt(entertain);
                    user.necessitiesBudget = parseInt(necessity);
                    user.personalBudget = parseInt(personal);
                    AsyncStorage.setItem('@user_info', JSON.stringify(user));
                });
    } catch(e) {
        alert('Failed to add the user budgets.');
    }
};

const storeUser = async (user) => {
    try {
        let storedUser = await AsyncStorage.getItem('@user_info');
        JSON.parse(storedUser);
        if(!storedUser){
            storedUser = newUser;
        } else {
            storedUser = user;
        }
        await AsyncStorage.setItem('@user_info', JSON.stringify(storedUser));
    } catch(e) {
        alert('Failed to store the user.');
    }
};

const getStoredUser = async () => {
    try {
        const storedUser = await AsyncStorage.getItem('@user_info');
        if(!storedUser) return newUser;
        return JSON.parse(storedUser);
    } catch(e) {
        alert('Failed to read the user.');
    }
};

export { clearStorage, storeTransaction, getStoredTransactions, addUserBudgets, addUserTransactions, storeUser, getStoredUser };
