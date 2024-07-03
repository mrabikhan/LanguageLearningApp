import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable';

const Splash = ({navigation}) => {

    useEffect(()=>{
      setTimeout(()=>{
        navigation.navigate('Login');
      },5000)
    }, [])

  return (
    <View>
      <View style={styles.splashview}>
      <Animatable.Image source={require("./assets/favicon.png")} 
      style = {styles.splashimg} duration={3000} animation={'swing'}/>
      </View>
      <Animatable.Text style = {styles.splashtext} duration={3000} animation={'bounceIn'}>Loading...</Animatable.Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({

    splashview:{
        flex:1,
       alignItems:"center",
    },
    splashimg:{
        width:170,
        height:130,
        marginTop:300
    },
    splashtext:{
        textAlign:'center',
        fontSize:24,
        marginTop:600,
    }
})