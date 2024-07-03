import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native-animatable'
import * as Animatable from 'react-native-animatable';
import Footer from './components/Footer';

const Confroom = ({navigation}) => {
    const xrmenuback = () =>{
        navigation.navigate('XRmenu')
    }


  return (
    <View>
      <ScrollView>
      <Text style={{fontSize:30,textAlign:"center", marginTop:35,fontWeight:"bold", color:"purple"}}> Conference Room </Text>
      <Text style={{fontSize:20,textAlign:"center", marginTop:10, color:"black"}}> XR Environment </Text>
      <Animatable.Image 
      duration={2000}
      animation={'fadeInRight'}
      source={require("./assets/confroom.png")}
      style={{borderRadius:20, width:320, height:230,marginLeft:30}}
      />
      <Animatable.View
      duration={2500}
      animation={'fadeInLeft'}
      style={{backgroundColor:"white",borderRadius:20,
      elevation:10, margin:30}}>
      <Image source={require("./assets/headset.png")} 
      style={{marginTop:50,marginLeft:70,
        width:180, height:150
    }}
      />
      <Text style={{fontSize:24,textAlign:"center",
       marginTop:40, color:"white",padding:20, 
       backgroundColor:"blue"}}> Configure XR Headset </Text>
    </Animatable.View>
    <View style={{backgroundColor:"white", borderRadius:20, elevation:10,
     margin:30
     }}>
      <TouchableOpacity>
    <Image source={require("./assets/cam.png")}
    style={{width:150,height:150, marginLeft:85,marginTop:30}}
    />
    </TouchableOpacity>
    <Text style={{textAlign:"center",color:"purple",
     fontSize:24, padding:10, marginTop:30,marginBottom:20}}>
      Tap to Open AR Camera
    </Text>
    </View>
    <Text style={styles.xrback} onPress={xrmenuback}>Go Back</Text>
    <Footer />
    </ScrollView>
    </View>
  )
}

export default Confroom

const styles = StyleSheet.create({

    xrback:{
        backgroundColor:"green",
        textAlign:"center",
        alignSelf:"center",
        marginTop:20,
        fontSize:22,
        padding:12,
        color:"white",
        borderRadius:5,
        width:330,
       }
})