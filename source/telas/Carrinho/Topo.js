import React from 'react';
import {Image, StyleSheet, Dimensions} from 'react-native';

import Texto from '../../components/Texto';

const width = Dimensions.get('screen').width; //Dimensiona de acordo com a tela do dispositivo
export default function Topo ({titulo, imagem}){
    return <>
        <Image  style = {styles.topo} source = {imagem}/>
        <Texto style = {styles.tituloCarrinho}>{titulo}</Texto>
    </>
}

const styles = StyleSheet.create({
    topo:{
        width:"100%",
        height: 585/772 * width,    
      },

      tituloCarrinho: {
        color: "#212121",
        position:"absolute",
        paddingVertical: 120,
        textAlign: "center",
        width:"100%",
        fontSize: 45,
        lineHeight: 40, //afastamento entre linhas
        fontWeight: 'bold',
        fontFamily: 'Montserrat_700Bold'
      },
})