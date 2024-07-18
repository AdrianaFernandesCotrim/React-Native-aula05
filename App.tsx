import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, Platform, StyleSheet, Text, View , Pressable, TouchableOpacity} from 'react-native';



const VALOR_INICIAL_LISTA = ["Not", "Davi","Adriana"]


export default function App() {

  const [listaNomes, setListaNomes] = useState(VALOR_INICIAL_LISTA)

  function handleBotaoPressionadoPorTempoLongo(){
    setListaNomes((prevListaNomes)=>[...prevListaNomes, "André"])
  }

  const [contador, setContador]= useState(0)
  function handleBotaoPressionado(){
    setContador((ultimoValor)=> ultimoValor + 1)
    setTimeout(()=>{
      setContador((ultimoValor)=> ultimoValor +1)

    }, 1000)
  }

  // function handleBotaoPressionado(){
  //   alert('Olá'!)
  // }
  //function handleBotaoPressionadoPorTempoLongo(){
   // alert('Tempo longo')
  //}

  return (
    <View style={styles.container}>
      <Text>Lista</Text>

  <FlatList
  data={listaNomes}
  renderItem={({item})=>{
    return(
      <Text style={styles.estilo2}>{item}</Text> 
  )
}}
keyExtractor={(item, index)=>String(index)}
/>
<Text>{contador}</Text>
<Pressable 
onLongPress={handleBotaoPressionadoPorTempoLongo}
onPress={handleBotaoPressionado}>
  <Text>Botão</Text>
</Pressable>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: "90%",
    maxWidth: 800,
    margin: "auto",
    textAlign:"center"
  },
  estilo2: {
    backgroundColor: '#F00'
  }
  
});
