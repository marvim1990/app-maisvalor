import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList,Image, Text, View,TouchableOpacity,StyleSheet } from 'react-native';
import mais from '../assets/mais.png';



export default  function Proposta({navigation}) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState('');
  const [valor,guardaValor]= useState()

  useEffect(() => {
    fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((json) => setData(json.movies))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
      console.log(data)
  }, []);
        
  return (
    <View style={{ flex: 1, padding: 24 }} >
      {isLoading ? <ActivityIndicator size="large"/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <>
            <View style ={{
              borderColor:'#000',
              borderWidth:1,
              padding:10,
              borderRadius:5,
              marginTop:5,
              flexDirection:"row",
              width:300
            }}>
               
            <Text>banco: {item.title}{'\n'}
            Data_envio:{item.releaseYear}{'\n'}
            cpf:38754698721 {'\n'}
            tipo:foooo produto:oaoaoao{'\n'}
            status: atatatat
              </Text>
              <TouchableOpacity style = {styles.buttonDetalhes} 
                onPress = {() =>{navigation.navigate('Detalhes',{titulo:item.title,ano:item.releaseYear})}}>
              <Image source ={mais}></Image>
              </TouchableOpacity>
            </View>
          </>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonDetalhes:{
  marginLeft:70
  }
})

