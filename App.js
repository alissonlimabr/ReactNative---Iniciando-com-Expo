import {
  
  StatusBar, 
  StyleSheet,
  StyleSheet2, 
  SafeAreaView, 
  View,
  FlatList,

} from 'react-native';

  import Topo from './source/telas/Carrinho/Topo.js';
  import Detalhes from './source/telas/Carrinho/Detalhes.js';
  import Mocks from './source/mocks/carrinho';
  import Item from './source/telas/Carrinho/Item.js';
  import Texto from './source/components/Texto.js';
  
  import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat'
  // Constante que verifica se as fontes foram carregadas
 
  
export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold
  });
  

  if (!fontsLoaded) {
    return <View></View>
  }

  return (
    <SafeAreaView style={styles.container}>
     
        <FlatList 
          data={Mocks.itens.lista}
          renderItem={Item}
          keyExtractor={({nome}) => nome}   
          ListHeaderComponent= {
            () => {
              return <>
                <Topo {...Mocks.topo}/>
                <Detalhes {...Mocks.detalhes} />
                <Texto style = {styles.titulo}>
                    {Mocks.itens.titulo}
                </Texto>
              </>
            }
          }   
        />
        
        <FlatList
          data= {Mocks.itens.lista2}
          renderItem={Item}
          keyExtractor={({nome}) => nome}
          ListFooterComponent= {
            () => {
              return <>
                    <Texto style = {styles.titulo2}>
                    {Mocks.itens.titulo2}
                    </Texto>
              </>
            }
          }
        />

        <StatusBar />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },

  titulo: {
    color: "#FFA500",
    fontWeight:'bold',
    marginTop: 30,
    marginBottom: 30,
    fontSize: 25,
  },

  titulo2: {
    color: "#000000",
    fontWeight:'bold',
    marginTop: 30,
    marginBottom: 30,
    fontSize: 25,
  }
});
