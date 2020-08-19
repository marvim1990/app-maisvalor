import React from 'react'
import {View,Text, StyleSheet,Image, ImageBackground}from 'react-native';
import santander from '../assets/santanderrr.png';
import bradesco from '../assets/bradesco.png';
import cetelem from '../assets/cetelem.png';
import daycoval from '../assets/daycoval.png';
import ole from '../assets/ole.png';
import parana from '../assets/parana.png';
import pan from '../assets/pan.png';
import itau from '../assets/itau.png';
import maisvalor from '../assets/logo.png'



 function Detalhes({ route }) {
  const LogoBanco = () => {
    let banco = route.params.banco;
    let logo =""

    switch(banco) {
      case 'SANTANDER':
        logo = santander
        break;
      case 'BRADESCO':
        logo = bradesco
        break;
      case 'CETELEM':
        logo = cetelem
        break;
      case 'DAYCOVAL':
        logo = daycoval
        break;
      case 'PARANA BANCO':
        logo = parana
        break;
      case 'CARTAO OLE':
        logo = ole
        break;
      case 'BANCO PAN':
        logo = pan
        break;
      case 'ITAU':
        logo = itau
        break;
      default:
        logo = maisvalor
        break;
    }

    return(
      <View>
        <Image source ={logo}></Image>
      </View>
    )
  } 

  
  //dados vindos da outra view route.params.(nome da variavel)
 return(
   <View style ={styles.background}>
        <View style = {styles.centeredView}> 

        <LogoBanco style = {styles.Image}></LogoBanco>
        <Text><Text style = {styles.text}>PROPOSTA:</Text> {route.params.proposta}</Text>
        <Text><Text style = {styles.text}>STATUS:</Text> {route.params.status}</Text>
        <Text><Text style = {styles.text}>SUB STATUS:</Text> {route.params.sub}</Text>
        <Text><Text style = {styles.text}>DATA CADASTRO:</Text> {route.params.cadastro}</Text>
        <Text><Text style = {styles.text}>DATA ATUALIZAÇÃO:</Text> {route.params.data}</Text>
        <Text><Text style = {styles.text}>BANCO:</Text> {route.params.banco}</Text>
        <Text><Text style = {styles.text}>PRODUTO:</Text> {route.params.produto}</Text>
        <Text><Text style = {styles.text}>TIPO:</Text> {route.params.tipo}</Text>
        <Text><Text style = {styles.text}>CONVENIO:</Text> {route.params.convenio}</Text>
        <Text><Text style = {styles.text}>CPF CLIENTE:</Text> {route.params.cpf}</Text>
        <Text><Text style = {styles.text}>NOME CLIENTE:</Text> {route.params.nome}</Text>
        <Text><Text style = {styles.text}>VALOR ENTREGUE:</Text> {route.params.valor}</Text>
        <Text><Text style = {styles.text}>VALOR PARCELA:</Text> {route.params.parcela}</Text>
        <Text><Text style = {styles.text}>QTD. PARCELAS:</Text> {route.params.prazo}</Text>
        
        </View>
      
   </View>
 )
}

const styles = StyleSheet.create({
    centeredView: {
    justifyContent: "center",
    alignItems: "center",
    elevation:50,
    height:570,
    marginTop:20,
    marginHorizontal:20,
    backgroundColor:'#fff',
    borderRadius:10,
    paddingHorizontal: 10
  },
    background:{
    backgroundColor:'#CEF207',
    flex:1
  },
  text:{
    fontWeight:"bold"
  },
  image:{
    marginLeft: 40,  
    
    justifyContent: "center",
    alignItems: "center",
  }
});
export default Detalhes;