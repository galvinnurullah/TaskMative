import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput} from 'react-native';
import Navigation from './component/navigation/Navigation';


const App = (props) => {
    return (
        <Navigation/>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgorundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;