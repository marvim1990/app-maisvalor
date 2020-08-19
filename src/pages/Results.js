import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

export default function Results ({route}) {

  //pegando dados 
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

   let dados = route.params
   
    console.log(dados)
  
 
  useEffect(() => {
    console.log(dados)
    fetch('http://172.16.0.191:3000/propostas/filter',{
      method: 'post',
      body: {
          dados
        }
    })
      .then((response) => response.json())
      .then((json) => setData(json.data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
      console.log(data)
  }, []);


  //lista ultimas propostas 
  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ codigo }, index) => codigo}
          renderItem={({ item }) => (
            <Text>{item.proposta}, {item.status}</Text>
          )}
        />
      )}
      
    </View>
  );
};
