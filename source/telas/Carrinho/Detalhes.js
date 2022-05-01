import React from 'react';
import {Text, StyleSheet, Image, View,} from 'react-native';

import logoVendedor from '../../../assets/logo.png';
import Texto from '../../components/Texto';

export default function Detalhes({titulo, nomeProduto, descricao, logoVendedor, nomeVendedor, precoAntigo, precoNovo}){
  return<>
  <Texto style = {styles.detalhes}>{titulo}</Texto>
  <Texto style = {styles.titulo}>{nomeProduto}</Texto>
      <View style = {styles.vendedor}>
        <Image style = {styles.logoVendedor} source = {logoVendedor} />
        <Texto style = {styles.nomevendedor}>{nomeVendedor}</Texto>
      </View>
      <Texto style = {styles.desc}>{descricao}</Texto>
      <Texto style = {styles.precoantigo}>{precoAntigo}</Texto>
      <Texto style = {styles.preconovo}> {precoNovo}</Texto>
  </>
}

const styles = StyleSheet.create ({
    detalhes: {
        color: "#000000",
        fontWeight: 'bold',
        fontFamily: 'Montserrat_700Bold',
        fontSize: 30,
        lineHeight: 35,
        textAlign:"center"
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
    
      titulo: {
        color:"#ffa500",
        fontWeight: 'bold',
        fontFamily: 'Montserrat_700Bold',
        fontSize: 30,
        lineHeight: 35,
        textAlign:"center"
      },
    
      desc:{
        color: "#212121",
        fontSize: 16,
        paddingVertical: 10
      },
    
      precoantigo: {
        color: "#a1a1a1",
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Montserrat_700Bold',
        textAlign:"right",
        paddingHorizontal: 10,
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        
        
      },
      
      preconovo: {
        color: "#388e3c",
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'Montserrat_700Bold',
        textAlign:"right",
        paddingHorizontal: 10
      }
    })