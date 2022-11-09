import React, { Component } from "react";
import { View, Text, Image, TextInput, StyleSheet } from "react-native";
import foto from './pemandangan.jpg';
import { style } from "./style";

const App = () => {
  return (
    <View style={{flex:1,backgroundColor:'red'}}>
      <Text style={{fontSize:30}}>Percobaan</Text>
    </View>
//     <View style={style.container}>
// <Teks />
//     <Text style={style.tulisanku}>Selamat Datang</Text>
//     <Image source={{uri:'https://placeimg.com/100/100/nature'}} style={{width:100, height:100}}></Image>
//     <TextInput style={{borderWidth:1}} />
//     <Photo />
//     <Tampilan />
//     <Tulisan />
//     <Photoku />
//     </View>
  )
}

const Teks = () => {
  return (
  <Text>Hello World...</Text>
  )
}

const Photo = () => {
  return (
    <Image source={foto} style={{width:200, height:200}}/>
  )
}

const Tampilan = () => {
  return (
    <View style={{width:100, height:100, backgroundColor:'red'}} />
  ) 
}

class Tulisan extends Component {
  render () {
    return (
      <Text>Tampilan dari Komponen Class</Text>
    )
  }
}

class Photoku extends Component {
  render () {
    return (
      <Image source={{uri:'https://placeimg.com/100/100/tech'}} style={{width:200, height:200}}></Image>
    
    )
  }
}



export default App;