import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import {styles} from './css/styles';

const App = () => {

  const[numero1, setNumero1] = useState('');
  const[numero2, setNumero2] = useState('');
  const[resultado, setResultado] = useState('');


//operações
//soma
const calcularSoma = () => {

  const num1 = parseFloat(numero1);
  const num2 = parseFloat(numero2);

  if (!isNaN(num1) && !isNaN(num2)){
    setResultado((num1 + num2).toString());
  }
  else{

      setResultado('Entrada Inválida');
  }
};
//subtração
const calcularSub = () => {

  const num1 = parseFloat(numero1);
  const num2 = parseFloat(numero2);

  if (!isNaN(num1) && !isNaN(num2)){
    setResultado((num1 - num2).toString());
  }
  else{

      setResultado('Entrada Inválida');
  }
};
//multiplicação
const calcularMult = () => {

  const num1 = parseFloat(numero1);
  const num2 = parseFloat(numero2);

  if (!isNaN(num1) && !isNaN(num2)){
    setResultado((num1 * num2).toString());
  }
  else{

      setResultado('Entrada Inválida');
  }
};
//Divisão
const calcularDiv = () => {

  const num1 = parseFloat(numero1);
  const num2 = parseFloat(numero2);

  if (isNaN(num1) || isNaN(num2)){
    setResultado('Entrada Inválida');
    
  }
  else if(num2 === 0){

    setResultado("Impossível dividir por zero.")
  }
  else{
    setResultado((num1 / num2).toString());
      
  }
};

return(
  <View style ={styles.container}>
    <Text style={styles.textoTitulo}> Calculadora </Text>
    <TextInput
      style={styles.input}
      placeholder ='Digite um número: '
      placeholderTextColor = "#c9c9c9"
      keyboardType ="numeric"
      valued = {numero1}
      onChangeText ={setNumero1}
      
    />
    <TextInput
      style={styles.input}
      placeholder ='Digite um número: '
      placeholderTextColor = "#c9c9c9"
      keyboardType ="numeric"
      valued = {numero2}
      onChangeText ={setNumero2}
    />
    <TextInput
      style={styles.input}
      placeholder ='Resultado '
      placeholderTextColor = "#c9c9c9"
      value = {resultado}
      onChangeText ={setResultado}
      editable={false}
    />
    <View style = {styles.contBotao}>

      <TouchableOpacity style= {styles.botao} onPress = {calcularSoma}>
      <Text style={styles.textobotao}> soma </Text>
      </TouchableOpacity>

      <TouchableOpacity style= {styles.botao} onPress = {calcularSub}>
      <Text style={styles.textobotao}> subtração </Text>
      </TouchableOpacity>

      <TouchableOpacity style= {styles.botao} onPress = {calcularMult}>
      <Text style={styles.textobotao}> multiplicação </Text>
      </TouchableOpacity>

      <TouchableOpacity style= {styles.botao} onPress = {calcularDiv}>
      <Text style={styles.textobotao}> divisão </Text>
      </TouchableOpacity>
    
    </View>
    
  </View>
);
}

export default App;
