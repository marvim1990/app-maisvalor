import React from 'react';
import {View, Text,StyleSheet,Image, TouchableOpacity} from 'react-native';
import icon from '../assets/filter2.png'
import Proposta from '../components/Propostas';

const BemVindo = ( { navigation }) => {
  return (
  <>
    <View style ={styles.container}>
      
      <View style ={styles.filtrarButton}>
        <Image source ={icon}></Image>
        <TouchableOpacity title = "Filtrar" style ={{
        
        }}
          onPress = {() =>{navigation.navigate('Filtrar')}}>
         <Text>Filtrar Propostas</Text>
       </TouchableOpacity>
      </View>
      <Text style={styles.text}>Ultimas propostas</Text>
       <Proposta navigation ={navigation} ></Proposta>
    </View>
        
    <View style={ styles.footer}>

      <Text style ={styles.buttonFooter}>Propostas</Text>
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
  },
  filtrarButton: {
    flexDirection:'row',
    alignItems:'center',
    width: 200,
    backgroundColor:'#CEF207',
    padding:10,
    marginLeft:200,
    marginTop: 8,
    borderRadius:10,
    elevation:5
  },
  footer:{
      flex: 1, 
      backgroundColor: '#CEF207', 
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingRight:30
  },
  buttonFooter: { 
    borderBottomWidth:3,
    borderColor:'#FFF',
    fontWeight:'bold' 
  }
})

export default BemVindo;