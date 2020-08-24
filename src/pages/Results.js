import React, { useEffect, useState } from 'react';
import { ActivityIndicator,StyleSheet,Image, FlatList, Text,TouchableOpacity, View } from 'react-native';
import axios from 'axios'
import mais from '../assets/mais.png';

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
   let banco = route.params.dados.banco_origi
   
 
  useEffect(() => {
    async function loadPropostas () {
     const response = await axios.post('http://172.16.0.191:3000/propostas/filter', {
        proposta: proposta,
        cpf:cpf,
        produto:produto,
        status:status,
        nome:nome,
        banco_origi:banco

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
            <>
             <View style ={{
              borderColor:'#000',
              borderWidth:1,
              padding:10,
              borderRadius:5,
              marginTop:5,
              flexDirection:"row",
              width:330
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
    </>
  );
};
const styles = StyleSheet.create({
  text:{
    fontWeight:"bold"
  },
  buttonDetalhes:{
    marginLeft:-10
    },
})










