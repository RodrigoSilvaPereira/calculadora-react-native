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
    if(d=='+' || d=='-' || d=='/' || d=='*'){
      estados.ponto=false
    }

    if(d=='.' && !estados.ponto){
      estados.ponto=true
      estados.operado=false

    } else if(d=='.' && estados.ponto){
      return
    }

    if((d=='+' || d=='-' || d=='/' || d=='*') && estados.operado){
      estados.valorTela=estados.resultado
      estados.resultado=0
    }
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

  const opera=(d)=>{
    if(d=='AC'){
      limparTela()
      return
    }

    if(d=='BS'){
      estados.valorTela=vtela.substring(0,(vtela.length-1))
      setVtela(estados.valorTela)
      return
    }
    try{
      estados.resultado=eval(estados.valorTela)
      estados.operado=true
      setVres(estados.resultado)
    } catch {
      estados.resultado=eval('Operação Inválida')
      estados.operado=true
      setVres(estados.resultado)
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
        <Btn label="=" igual aoClicar={()=>{opera('=')}}></Btn>
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
