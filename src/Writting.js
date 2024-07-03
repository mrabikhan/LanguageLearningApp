import { StyleSheet, Text, View,ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';
import Footer from './components/Footer';

const Writting = ({navigation}) => {
  const backhome = () => {
    navigation.navigate('Home')
  }
  const goflash = () => {
    navigation.navigate('Flashcards')
  }
  const gophrase= () => {
    navigation.navigate('Phrase')
  }
  const score = '0/100'
  return (
    <View>
       <ScrollView>
    <Animatable.Text
    duration={2500}
    animation={'bounceIn'}
    style={styles.headtext}>Boost Writing Skills</Animatable.Text>
    <Animatable.Text
    duration={3500}
    animation={'bounceIn'}
    style={styles.scores}>{'Your Score: '+ score}</Animatable.Text>
    <View style={styles.container}>
      <TouchableOpacity 
      onPress={goflash}
      style={styles.cardone}>
      <Animatable.View 
      duration={2500}
      animation={'fadeInUp'}
      >
        <Text style={styles.textone}> Play Flash Cards </Text>
      </Animatable.View>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={gophrase}
      style={styles.cardtwo}>
      <Animatable.View 
      duration={2500}
      animation={'fadeInDown'}>
        <Text style={styles.textone}> Complete The Phrase </Text>
      </Animatable.View>
      </TouchableOpacity>
    </View>

    <TouchableOpacity onPress={backhome}>
      <Text style={{backgroundColor:"blue", color:"white",fontSize:18,
      padding:12,textAlign:"center",alignSelf:"center", borderRadius:5,
      marginTop:20, width:170, elevation:10
    }}>Go Back</Text>
    </TouchableOpacity>
    <Footer />
    </ScrollView>
    </View>
  )
}

export default Writting

const styles = StyleSheet.create({
  headtext:{
    fontSize:28,
    fontWeight:"bold",
    padding:15,
    textAlign:"center",
    color:"purple",
    marginTop:35
 },

 scores:{
    textAlign:"center",
    fontSize:20,
    padding:15,
    backgroundColor:"white",
    margin:20,
    borderRadius:7
 },
 container:{
  backgroundColor:"#043b5c",
  margin:10,
  borderRadius:10,
  padding:10,
  flexDirection:"row",
  elevation:10,
  height:400,
  flex:1,
  justifyContent:"center",
  alignItems:"center"
 },

 cardone:{
  backgroundColor:"skyblue",
  width:110,
  height:200,
  flex:1,
  justifyContent:"center",
  elevation:10,
  borderRadius:10
 },

 cardtwo:{
  backgroundColor:"orange",
  width:110,
  height:200,
  flex:1,
  justifyContent:"center",
  marginLeft:15,
  elevation:10,
  borderRadius:10
 },

 textone:{
  textAlign:"center",
  fontSize:24,
 }
})