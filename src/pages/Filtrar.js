import React, { useState } from 'react';
import {View, Text, StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';



const Filtrar = ({navigation}) => {
  //pegando dados digitados
  const [numeroProposta,setNum] = useState();
  const [numeroCpf,setCpf] = useState();

  //salvando dados em um array 
  let data ={
    cpf:numeroCpf,
    numeroProposta:numeroProposta
  }

  return (
    <View style ={styles.container}>
      <Text style ={styles.text}>Buscar propostas por:</Text>
      <View style ={styles.form}>
        <Text>NUMERO DA PROPOSTA</Text>
        <TextInput 
        placeholderTextColor = "#999"
        value = {numeroProposta}
        onChangeText = {setNum}
        ></TextInput>

        <Text>CPF</Text>
        <TextInput
        placeholderTextColor = "#999"
        value = {numeroCpf}
        onChangeText = {setCpf}></TextInput>
        <Text></Text>
        <TextInput></TextInput>
        <TouchableOpacity onPress={() => {navigation.navigate('Results',console.log(data))}}>
          <Text>pesquisar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
};




const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    backgroundColor:'#ffffff',
  },
  form: {
    alignSelf: 'stretch',
    paddingHorizontal:30,
    marginTop:30
  },
  text:{
    fontSize: 30,
    marginTop: 30,
    fontWeight: "bold"
  }
})
export default Filtrar;