import AsyncStorage from '@react-native-async-storage/async-storage';

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

    user.budget = double
    user.totalTransactions = double
    user.entertainmentTransactions = double
    user.necessitiesTransactions = double
    user.personalTransactions = double
    user.cats = [array] of cats user has
*/

const storeUser = async (user) => {
    try {
        let storedUser = await AsyncStorage.getItem('@user_info');
        JSON.parse(storedUser);
        storedUser = [user];
        await AsyncStorage.setItem('@user_info', JSON.stringify(storedUser));
    } catch(e) {
        alert('Failed to store the user.');
    }
};

const getStoredUser = async () => {
    try {
        const storedUser = await AsyncStorage.getItem('@user_info');
        if(!storedUser) return null;
        return JSON.parse(storedUser);
    } catch(e) {
        alert('Failed to read the user.');
    }
};

export { clearStorage, storeTransaction, getStoredTransactions, storeUser, getStoredUser };
