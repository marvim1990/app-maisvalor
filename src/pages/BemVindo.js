import React from 'react';
import {View, Text,StyleSheet,Image, TouchableHighlight} from 'react-native';
import icon from '../assets/filter2.png'
import Proposta from '../components/Propostas';

const BemVindo = ( { navigation }) => {
  return (
    <>
    <View style ={styles.container}>
      
      <View style ={{
        flexDirection:'row',
        alignItems:'center',
        width: 200,
        backgroundColor:'#CEF207',
        padding:10,
        marginLeft:200,
        marginTop: 8,
        borderRadius:10,
        elevation:5

      }}>
        <Image source ={icon}></Image>
        <TouchableHighlight title = "Filtrar" style ={{
        
        }}
          onPress = {() =>{navigation.navigate('Filtrar')}}>
         <Text>Filtrar Propostas</Text>
       </TouchableHighlight>
      </View>
      <Text style={styles.text}>Ultimas propostas</Text>
       <Proposta navigation ={navigation} ></Proposta>
    </View>
    <View style={
      {
      flex: 1, 
      backgroundColor: '#CEF207', 
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingRight:30,
       }}>
      <Text style ={
      {
        borderBottomWidth:3,
        borderColor:'#FFF',
        fontWeight:'bold'
      }
      }>Propostas</Text>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:9,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor:'#ffffff',
  },
  text:{
    marginTop:40,
    fontWeight:"bold",
    fontSize:30
  }
})

export default BemVindo;