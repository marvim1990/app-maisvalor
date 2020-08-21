import React, { useState } from 'react';
import {View, Text, StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import  { Picker }  from  '@ react-native-community / picker'




const Filtrar = ({navigation}) => {
  //pegando dados digitados
  const [numeroProposta,setNum] = useState();
  const [numeroCpf,setCpf] = useState();
  const [produto,setProduto] = useState();
  const [v_status,setStatus] = useState();
  const [nomeCliente,setNome] = useState();

 const limparDados = () => {
  let dados ={
    cpf:numeroCpf,
    proposta:numeroProposta,
    produto: produto,
    status: v_status,
    nome: nomeCliente
  }


  navigation.navigate('Results',{dados})
  
}

  return (
    <View style ={styles.container}>
      <Text style ={styles.text}>Buscar propostas por:</Text>
      <View style ={styles.form}>

        
        <Text>NUMERO DA PROPOSTA</Text>
        <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText= {setNum}
        value={numeroProposta}
    />

        <Text>CPF</Text>
        <TextInput style = {styles.Input}
        placeholderTextColor = "#999"
        value = {numeroCpf}
        onChangeText = {setCpf}></TextInput>

        <Text>PRODUTO</Text>
        <TextInput style = {styles.Input}
        placeholderTextColor = "#999"
        value = {produto}
        onChangeText = {setProduto}></TextInput>


        <Text>STATUS</Text>
        <TextInput style = {styles.Input}
        placeholderTextColor = "#999"
        value = {v_status}
        onChangeText = {setStatus}></TextInput>


        <Text>NOME CLEINTE</Text>
        <TextInput style = {styles.Input}
        placeholderTextColor = "#999"
        value = {nomeCliente}
        onChangeText = {setNome}></TextInput>
        
        <TouchableOpacity onPress ={limparDados}>
          
          
        
        
          <Text>pequisar</Text>
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
  },
  Input:{
    borderBottomWidth: 1,
    marginTop:5
  }
})
export default Filtrar;