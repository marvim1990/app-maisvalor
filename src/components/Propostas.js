import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList,Image, Text, View,TouchableOpacity,StyleSheet } from 'react-native';
import mais from '../assets/mais.png';



export default  function Proposta({navigation,route}) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState('');


  useEffect(() => {
    fetch('http://172.16.0.191:3000/propostas')
      .then((response) => response.json())
      .then((json) => setData(json.data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
        
  return (
    <View style={{ flex: 1, padding: 24 }} >
      {isLoading ? <ActivityIndicator size="large"/> : (
        <FlatList
          data={ data }
          keyExtractor={( { codigo }, index) => codigo}
          renderItem={( { item } ) => (
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
               
            <Text>
               <Text style = {styles.text}>PROPOSTA:</Text> {item.proposta}{'\n'}
                <Text style = {styles.text}>STATUS:</Text> {item.status}{'\n'}
                <Text style = {styles.text}>CPF:</Text> {item.cpf} {'\n'}
                <Text style = {styles.text}>BANCO:</Text> {item.banco_origi}{'\n'}
               <Text style = {styles.text}>DATA ATUALIZAÇÃO:</Text> {item.data_atualizacao}
              </Text>
              <TouchableOpacity style = {styles.buttonDetalhes} 
                onPress = {() =>{navigation.navigate('Detalhes',
                {
                  proposta: item.proposta, 
                  status: item.status,
                  cpf: item.cpf,
                  banco: item.banco_origi,
                  data: item.data_atualizacao,
                  tipo: item.tipo,
                  sub: item.sub_status,
                  cadastro:item.data_envio,
                  produto: item.produto,
                  convenio: item.convenio,
                  nome: item.nome,
                  valor: item.entregue,
                  parcela: item.valor_parcela,
                  prazo: item.prazo

                })}}>
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
  marginLeft:-10
  },
  text:{
    fontWeight:"bold"
  }
})

