import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableHighlight, TextInput, Dimensions } from 'react-native';

export default props=>{

    const estilosBotoes=[estilos.btn]
    if(props.duplo){
        estilosBotoes.push(estilos.btnDuplo)
    }
    if(props.igual){
        estilosBotoes.push(estilos.btnIgual)
    }
    if(props.operacao){
        estilosBotoes.push(estilos.btnOper)
    }
    if(props.ac){
        estilosBotoes.push(estilos.btnAC)
    }
    if(props.bs){
        estilosBotoes.push(estilos.btnBS)
    }

    return(
        <TouchableHighlight
            onPress={props.aoClicar}
        >
            <Text style={estilosBotoes}>{props.label}</Text>
        </TouchableHighlight>
    )

}

const estilos = StyleSheet.create({
    btn:{
        fontSize: 30,
        height: Dimensions.get('window').width/4,
        width: Dimensions.get('window').width/4,
        padding: 20,
        backgroundColor: '#1E1E1E',
        color: '#F5F5F5',
        borderWidth: 1,
        borderColor: '#4A4A4A',
        textAlign: 'center'
    },
    btnAC:{
        color: '#FF6363',
    },
    btnOper:{
        color: '#FFD700',
    },
    btnIgual:{
        color: '#32CD32',
    },
    btnBS:{
        color: '#1E90FF',
    },
    btnDuplo:{
        width: (Dimensions.get('window').width/4)*2,
    }
})
