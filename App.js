import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/pages/Login'
import BemVindo from './src/pages/BemVindo';
import Filtrar from './src/pages/Filtrar';
import Detalhes from './src/pages/Detalhes';
import Results from './src/pages/Results';




const Stack = createStackNavigator();

export default function App( {navigation} ) {
  return (
    <NavigationContainer>
      <Stack.Navigator header ="none">
        <Stack.Screen  name = "Login" 
        component = {Login}
        options ={{
          title:"",
          headerStyle: {
            elevation: 0.1,
            opacity:0.0
          }
        }} />
        
        <Stack.Screen name = "BemVindo" 
        component = {BemVindo} 
        options = {{
         title:"",
         headerLeft: null,
 }}/>
       <Stack.Screen name = "Filtrar"
        component = {Filtrar}
        options = {{
          title : "Filtrar propostas"
        }}/>

         <Stack.Screen name = "Detalhes"
         component = { Detalhes }
         options = {{
           title : "Voltar"
         }}/>

          <Stack.Screen name = "Results"
         component = { Results }
         options = {{
           title : "Voltar"
         }}/>
          
      </Stack.Navigator>
    </NavigationContainer>
  );
};



const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    button:{
    borderBottomColor:'#CEF207',
    borderStyle:"solid",
    backgroundColor:'#fff'
  }
});
