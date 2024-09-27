import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableHighlight, TextInput } from 'react-native';
import Display from './components/display';
import Btn from './components/botao';



let estados={
  valorTela: '',
  resultado: 0,
  operado: false,
  ponto: false,
}

export default function App() {
  
  const [vtela, setVtela] = useState(estados.valorTela)
  const [vres, setVres] = useState(estados.resultado)

  const addDigito=(d)=>{

    estados.valorTela=estados.valorTela+d
    setVtela(estados.valorTela)
    setVres(estados.resultado)
    estados.operado=false
  }

  const limparTela=()=>{
    estados={
      valorTela: '',
      resultado: 0,
      operado: false,
      ponto: false,
    }
    setVtela(estados.valorTela)
    setVres(estados.resultado)
  }

  const opera=(o)=>{
    if(d=='AC'){
      limparTela()
      return
    }

    if(d=='BS'){
      const vt=vtela.substring(0,(vtela.length-1))
    }
  }

  return (
    <SafeAreaView style={estilos.conteiner}>
      <Text>Calculadora - Rodrigo</Text>
      <Display valor={vtela} res={vres}/>
      <View style={estilos.botoes}>
        <Btn label="AC" ac aoClicar={()=>{opera('AC')}}></Btn>
        <Btn label="(" aoClicar={()=>{addDigito('(')}}></Btn>
        <Btn label=")" aoClicar={()=>{addDigito(')')}}></Btn>
        <Btn label="/" operacao aoClicar={()=>{addDigito('/')}}></Btn>
        <Btn label="7" aoClicar={()=>{addDigito('7')}}></Btn>
        <Btn label="8" aoClicar={()=>{addDigito('8')}}></Btn>
        <Btn label="9" aoClicar={()=>{addDigito('9')}}></Btn>
        <Btn label="*" operacao aoClicar={()=>{addDigito('*')}}></Btn>
        <Btn label="4" aoClicar={()=>{addDigito('4')}}></Btn>
        <Btn label="5" aoClicar={()=>{addDigito('5')}}></Btn>
        <Btn label="6" aoClicar={()=>{addDigito('6')}}></Btn>
        <Btn label="-" operacao aoClicar={()=>{addDigito('-')}}></Btn>
        <Btn label="1" aoClicar={()=>{addDigito('1')}}></Btn>
        <Btn label="2" aoClicar={()=>{addDigito('2')}}></Btn>
        <Btn label="3" aoClicar={()=>{addDigito('3')}}></Btn>
        <Btn label="+" operacao aoClicar={()=>{addDigito('+')}}></Btn>
        <Btn label="0" aoClicar={()=>{addDigito('0')}}></Btn>
        <Btn label="." operacao aoClicar={()=>{addDigito('.')}}></Btn>
        <Btn label="<-" bs aoClicar={()=>{opera('BS')}}></Btn>
        <Btn label="=" igual aoClicar={()=>{}}></Btn>
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  conteiner:{
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  botoes:{
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
});
