import React from 'react'
import {View,Text,TouchableOpacity, StyleSheet}from 'react-native'

 function Detalhes({ route }) {

  //dados vindos da outra view route.params.(nome da variavel)
 return(
   <View style ={styles.background}>
      <View style={styles.centeredView}>
        <Text>titulo{route.params.titulo}</Text>
        <Text>ano{route.params.ano}</Text>
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
    borderRadius:10
  },
    background:{
    backgroundColor:'#CEF207',
    flex:1
    
  }
});
export default Detalhes;