import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import axios from 'axios'

export default function Results ({route}) {

  //pegando dados 
  const [isLoading, setLoading] = useState(true);
  const [dados, setDados] = useState('');
  const [pesquisa,setPesquisa] =useState(false)

   let proposta = route.params.dados.proposta
   let cpf = route.params.dados.cpf
   let produto =route.params.dados.produto
   let status = route.params.dados.status
   let nome = route.params.dados.nome
   
 
  useEffect(() => {
    async function loadPropostas () {
     const response = await axios.post('http://172.16.0.191:3000/propostas/filter', {
        proposta: proposta,
        cpf:cpf,
        produto:produto,
        status:status,
        nome:nome
      }).catch(function (error) {
        console.log(error)
      }).finally(() => setLoading(false));
        setDados(response.data)
    }  
    
    loadPropostas()
    
  }, []);


  //lista propostas pesquisadas
  return (
    <>
    <View>
      <Text>o</Text>
    </View>
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={dados}
          keyExtractor={({ codigo }, index) => codigo}
          renderItem={({ item }) => (
            <Text>{item.proposta}, {item.status}</Text>
          )}
        />
      )}
      
    </View>
    </>
  );
};













