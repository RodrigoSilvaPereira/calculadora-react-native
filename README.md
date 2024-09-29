# React Native Calculator App

Este é um aplicativo de calculadora simples construído usando React Native. A aplicação suporta operações aritméticas básicas, como adição, subtração, multiplicação e divisão, além de entradas decimais e parênteses.

## Funcionalidades

- **Operações Aritméticas Básicas**: Adição (`+`), Subtração (`-`), Multiplicação (`*`), e Divisão (`/`).
- **Suporte a Decimais**: Entrada de valores decimais usando o botão `.`.
- **Limpar e Backspace**: O botão `AC` limpa a tela, e `<-` remove o último caractere.
- **Suporte a Parênteses**: Permite o uso de parênteses para cálculos complexos.
- **Exibição de Resultado ao Vivo**: O resultado da operação é exibido instantaneamente após pressionar o botão `=`.

## Estrutura do Código

```javascript
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Display from './components/display';
import Btn from './components/botao';

let estados = {
  valorTela: '',
  resultado: 0,
  operado: false,
  ponto: false,
};

export default function App() {
  const [vtela, setVtela] = useState(estados.valorTela);
  const [vres, setVres] = useState(estados.resultado);

  const addDigito = (d) => {
    if (d == '+' || d == '-' || d == '/' || d == '*') {
      estados.ponto = false;
    }

    if (d == '.' && !estados.ponto) {
      estados.ponto = true;
      estados.operado = false;
    } else if (d == '.' && estados.ponto) {
      return;
    }

    if ((d == '+' || d == '-' || d == '/' || d == '*') && estados.operado) {
      estados.valorTela = estados.resultado;
      estados.resultado = 0;
    }
    estados.valorTela = estados.valorTela + d;
    setVtela(estados.valorTela);
    setVres(estados.resultado);
    estados.operado = false;
  };

  const limparTela = () => {
    estados = {
      valorTela: '',
      resultado: 0,
      operado: false,
      ponto: false,
    };
    setVtela(estados.valorTela);
    setVres(estados.resultado);
  };

  const opera = (d) => {
    if (d == 'AC') {
      limparTela();
      return;
    }

    if (d == 'BS') {
      estados.valorTela = vtela.substring(0, vtela.length - 1);
      setVtela(estados.valorTela);
      return;
    }
    try {
      estados.resultado = eval(estados.valorTela);
      estados.operado = true;
      setVres(estados.resultado);
    } catch {
      estados.resultado = 'Operação Inválida';
      estados.operado = true;
      setVres(estados.resultado);
    }
  };

  return (
    <SafeAreaView style={estilos.conteiner}>
      <Text>Calculadora - Rodrigo</Text>
      <Display valor={vtela} res={vres} />
      <View style={estilos.botoes}>
        <Btn label="AC" ac aoClicar={() => opera('AC')} />
        <Btn label="(" aoClicar={() => addDigito('(')} />
        <Btn label=")" aoClicar={() => addDigito(')')} />
        <Btn label="/" operacao aoClicar={() => addDigito('/')} />
        <Btn label="7" aoClicar={() => addDigito('7')} />
        <Btn label="8" aoClicar={() => addDigito('8')} />
        <Btn label="9" aoClicar={() => addDigito('9')} />
        <Btn label="*" operacao aoClicar={() => addDigito('*')} />
        <Btn label="4" aoClicar={() => addDigito('4')} />
        <Btn label="5" aoClicar={() => addDigito('5')} />
        <Btn label="6" aoClicar={() => addDigito('6')} />
        <Btn label="-" operacao aoClicar={() => addDigito('-')} />
        <Btn label="1" aoClicar={() => addDigito('1')} />
        <Btn label="2" aoClicar={() => addDigito('2')} />
        <Btn label="3" aoClicar={() => addDigito('3')} />
        <Btn label="+" operacao aoClicar={() => addDigito('+')} />
        <Btn label="0" aoClicar={() => addDigito('0')} />
        <Btn label="." operacao aoClicar={() => addDigito('.')} />
        <Btn label="<-" bs aoClicar={() => opera('BS')} />
        <Btn label="=" igual aoClicar={() => opera('=')} />
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  conteiner: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  botoes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

```
## Como Executar o Projeto


### Clone o repositório:

- Copiar código
git clone https://github.com/seu-usuario/react-native-calculator.git
Instale as dependências:

- Copiar código
npm install
Execute o aplicativo:

- Copiar código
npm start

## Dependências
- **React Native**
- **Expo**

## Uso

Use o aplicativo para realizar cálculos aritméticos básicos. O app possui os seguintes botões:

- **AC**: Limpa todas as entradas.
- **<–**: Backspace (remove o último dígito).
- **=**: Calcula e exibe o resultado.
- **Botões Numéricos e de Operações**: Para inserir números e operações (`+`, `-`, `*`, `/`).

## Licença

Este projeto é licenciado sob a Licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.