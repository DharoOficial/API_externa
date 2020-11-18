import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import Constants from 'expo-constants';
import * as Speech from 'expo-speech';

const Spech = () => {
    
    const [texto, setTexto] = useState('');
    
    const speak = () => {
        
        Speech.speak(texto);
    }
    
    
    return (
        <View style={styles.container}>

            <TextInput
                value={texto}
                onChangeText={a => setTexto(a)}
                placeholder="escreva aqui oque deseja falar"
            />

            <Button title="Press to hear some words" onPress={speak} />

        </View>
    )
}

export default Spech;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});