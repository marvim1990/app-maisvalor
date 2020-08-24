import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import Logo from '../assets/logo.png';
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';


export default function Login({navigation}){
    //pegando dados do usuario 
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

 
    async function Auth(){ 
      const response = await axios.post('http://172.16.0.191:3000/user',{
        login:login,
        senha:senha

        
      })
        let nome = response.data.result[0].parceiro_completo
          navigation.navigate('BemVindo',{
            nome:nome
          })
      
 }
      
      
    
    
    //tela
  return (
  <View style ={styles.container}>
    <Image source ={Logo} /> 
    <View style ={styles.form}>
      <Text style = {styles.label}>Login:</Text>
      <TextInput style= {styles.input}
        placeholder = "Login"
        placeholderTextColor = "#999"
        autoCorrect = {false}
        value = {login}
        onChangeText = {setLogin}
      />
      <Text style = {styles.label}>Senha:</Text>
      <TextInput style= {styles.input}
        placeholder = "Senha"
        placeholderTextColor = "#999"
        secureTextEntry={true}
        value = {senha}
        onChangeText = {setSenha}
      />
      <TouchableOpacity onPress ={Auth} style = {styles.button}>
        <Text style = {styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
};


//stylos css
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#fff',
    marginTop:-52
  
  },

  form: {
    alignSelf: 'stretch',
    paddingHorizontal:30,
    marginTop:30
  },
  label: {
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 8
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    height: 44,
    marginBottom: 20,
    borderRadius: 5
  },

  button: {
    height: 42,
    backgroundColor:'#CEF207',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  
  },

  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },


});