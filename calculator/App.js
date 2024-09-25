import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableHighlight, TextInput } from 'react-native';

export default function App() {
  
  const [operacao, setOperacao] = useState(0)
  const [resultado, setResultado] = useState(0)

  const operar=()=>{
    setResultado(eval(operacao))
  }

  return (
    <SafeAreaView style={estilos.conteiner}>
      <Text>Calculadora - Rodrigo</Text>
      <View style={estilos.display}>
        <TextInput
          style={estilos.txtDspOper}
          value={String(operacao)}
          onChangeText={(texto)=>{setOperacao(texto)}}
        ></TextInput>
        
        <TextInput
          style={estilos.txtDspRes}
          value={String(resultado)}
        ></TextInput>
      </View>

      <View>
        <TouchableHighlight
          style={estilos.btn}
          onPress={()=>operar()}
        >
          <Text>OPERAR</Text>
        </TouchableHighlight>
      </View>

    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  conteiner:{

  },
  display:{
    backgroundColor: '#333',
    padding: 10
  },
  txtDspOper:{
    color: '#fff'
  },
  txtDspRes:{
    color: '#fff'
  },
  btn:{
    backgroundColor: '#aaa',
    padding:20
  },
  txtBtn:{

  }
});
