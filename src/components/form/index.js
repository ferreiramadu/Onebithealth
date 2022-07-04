import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import ResultIMC from '../ResultIMC';
import styles from './style'

export default function Main() {
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageIMC, setMessageIMC] = useState("Preencha o peso e altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState('Calcular')

    function imcCalculator() {
        return setImc((weight / (height * height)).toFixed(2));
    }

    function validationImc() {
        if (weight != null && height != null) {
            imcCalculator()
            setWeight(null)
            setHeight(null)
            setMessageIMC("Seu imc é igual:")
            setTextButton('Calcular novamente')
        } else {
            setImc(null)
            setMessageIMC('Preencha o peso e altura')
            setTextButton('Calcular')
        }
    }

    return (
        <View style={styles.formContext}>
            <View style={styles.formContext}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput style={styles.input} onChangeText={setHeight} value={height} placeholder="Ex: 175" keyboardType="numeric" />
                <Text style={styles.formLabel}>Peso</Text>
                <TextInput style={styles.input} onChangeText={setWeight} value={weight} placeholder="Ex: 50300" keyboardType="numeric" />
                <TouchableOpacity style={styles.ButtonCalculator} onPress={() => validationImc()}>
                    <Text style={styles.TextbuttonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            <ResultIMC messageResultIMC={messageIMC} resultImc={imc} />
        </View>
    )
}