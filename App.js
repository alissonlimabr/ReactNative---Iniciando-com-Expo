import {
  StatusBar, 
  StyleSheet, 
  Text, 
  SafeAreaView, 
  Image,
  View,
  Dimensions
} from 'react-native';

import topo from './assets/topo.png'
import logoVendedor from './assets/logo.png'

const width = Dimensions.get('screen').width; //Dimensiona de acordo com a tela do dispositivo

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image  style = {styles.topo} source = {topo}/>
      <Text style = {styles.tituloCarrinho}>Carrinho</Text>

      <Text style = {styles.detalhes}>Detalhes do Carrinho</Text>
      <Text style = {styles.titulo}>Kit IoT</Text>
      <View style = {styles.vendedor}>
        <Image style = {styles.logoVendedor} source = {logoVendedor} />
        <Text style = {styles.nomevendedor}>Nuvem's Shopping</Text>
      </View>
      <Text style = {styles.desc}>Um kit IoT que revoluciona a vida dos estudantes</Text>
      <Text style = {styles.preco}>R$ 99,00</Text>


      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },

  topo:{
    width:"100%",
    height: 585/772 * width
  },

  vendedor: {
    flexDirection: "row",
    padding: 10
  },

  nomevendedor: {
    color: "#a3a3a3",
    fontSize: 18,
    lineHeight: 26,
    marginLeft:10
  },

  logoVendedor: {
    width:32,
    height: 32,
    marginLeft: 30,
  },

  tituloCarrinho: {
    position:"absolute",
    paddingVertical: 60,
    textAlign: "center",
    width:"100%",
    fontSize: 25,
    fontWeight: "bold",
    lineHeight: 40, //afastamento entre linhas
  },

  detalhes: {
    color: "#000000",
    fontWeight:"bold",
    fontSize: 30,
    lineHeight: 35,
    textAlign:"center"
  },

  titulo: {
    color:"#ffa500",
    fontWeight:"bold",
    fontSize: 30,
    lineHeight: 35,
    textAlign:"center"
  },

  desc:{
    color: "#808080",
    fontSize: 16,
    paddingVertical: 10
  },

  preco: {
    fontSize: 35,
    fontWeight:"bold",
    textAlign:"right",
    paddingHorizontal: 10
  }
});
