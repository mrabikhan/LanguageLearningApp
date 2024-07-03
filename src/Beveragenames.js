import { StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import { Image } from 'react-native-animatable'
import Sound from 'react-native-sound'
import Footer from './components/Footer'

const Beveragenames = ({navigation}) => {
    const playsound = () =>{
        var sound = new Sound('teaaudio.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
              console.log('failed to load the sound', error);
              return;
            }
            // loaded successfully
            console.log('duration in seconds: ' + sound.getDuration() + 'number of channels: ' + sound.getNumberOfChannels());
          
            // Play the sound with an onEnd callback
            sound.play((success) => {
              if (success) {
                console.log('successfully finished playing');
              } else {
                console.log('playback failed due to audio decoding errors');
              }
            });
          });
    }
    const soundon = () => {
        playsound()
    }
    const gospeaking = () => {
        alert('Woah! Correct Answer...')
        setTimeout(()=>{
            navigation.navigate('Speaking')
        },3000)
    }

    const wronginputs = () => {
        alert('Sorry! Wrong Answer...')
    }
  return (

    <View>
      <ScrollView>
      <Text style={styles.headtext}>Food & Drink Names </Text>
      <View style={styles.container}>
        <View style={{flexDirection:"row"}}> 
        <Image 
         
        style={{width:70, height:70}}
        source={require("./assets/play.png")}/>  
        <TouchableOpacity onPress={soundon}> 
        <Text style={styles.tapplay}>Tap to play</Text>
        </TouchableOpacity> 
        </View>
        <View style={styles.imagecontone}>
            <TouchableOpacity onPress={wronginputs}>
            <Image 
            style={{margin:5}}
            source={require("./assets/cola.png")}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={gospeaking}>
            <Image 
            style={{margin:5}}
            source={require("./assets/tea.png")}/>
            </TouchableOpacity>
        </View>

        <View style={styles.imageconttwo}>
            <TouchableOpacity onPress={wronginputs}>
            <Image 
            style={{margin:5}}
            source={require("./assets/coffee.png")}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={wronginputs}>
            <Image 
            style={{margin:5}}
            source={require("./assets/water.png")}/>
            </TouchableOpacity>
        </View>
      </View>
      <Footer />
      </ScrollView>  
      
    </View>
  )
}

export default Beveragenames

const styles = StyleSheet.create({

    headtext:{
    textAlign:"center",
    fontSize:26,
    color:"purple",
    margin:30
    },
    container:{
        backgroundColor:"white",
        margin:15,
        borderRadius:10,
        padding:20,
    },
    tapplay:{
        backgroundColor:"skyblue",
        padding:15,
        borderRadius:5,
        width:230,
        color:"white",
        fontSize:24,
        textAlign:"center"
    },
    imagecontone:{
        flexDirection:"row",
        marginTop:30
    },
    imageconttwo:{
        flexDirection:"row",
        marginTop:20,
        marginBottom:20
    }
})