import { StyleSheet, Text, View , ScrollView} from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import * as Animatable from 'react-native-animatable';
import RadioButtonRN from 'radio-buttons-react-native';
const XRmenu = ({navigation}) => {

    const xrmenuback = () =>{
        navigation.navigate('XRhome')
    }

    const xrmenunext = () =>{
        navigation.navigate('Confroom')
    }
    const data = [
        {
          label: 'Conference Room Environment 1'
         },
        {
            label: 'Class Room Environment 2'
        },
        {
            label: 'Auditorium Environment 3'
        },
        ];

  return (
<View>
    <ScrollView>
    <LinearGradient colors={['#42a1f5' , '#03bafc' , '#42c5f5']}
    start={{x:0, y:0}} end={{x:1 , y:0}}
    style={{width:'100%', height:260, borderBottomLeftRadius:25,
            borderBottomRightRadius:25}}>
<View>
  <Animatable.Image duration={3000} animation={'bounceIn'}
    source={require("./assets/favicon.png")} 
    style={styles.loginimg}/>
</View>   
    </LinearGradient>
    <Text style={{fontSize:28, color:"purple",
    textAlign:"center", padding:10, marginTop:50}}>
        Select VR Environments</Text>
    <RadioButtonRN
        
         style={{padding:20}}
         data={data}
        />
    <View style={{flexDirection:"row",marginLeft:40}}>
       <Text style={styles.xrback} onPress={xrmenuback}>Back</Text>
       <Text style={styles.xrnext} onPress={xrmenunext}>Next</Text> 
    </View>  
    <Text style={{padding:15,marginTop:60, textAlign:"center", backgroundColor:"purple",color:"white" }}>Coyrights @2023 Reseverd By LinguaPro+</Text>

</ScrollView>

</View>
  )
}

export default XRmenu

const styles = StyleSheet.create({
    loginimg:{
        width:150,
        height:110,
        marginTop:30,
        marginLeft:120,
    },
    xrback:{
        backgroundColor:"black",
        textAlign:"center",
        alignSelf:"center",
        marginTop:30,
        fontSize:18,
        padding:10,
        color:"white",
        borderRadius:5,
        width:140,
       },
       xrnext:{
        backgroundColor:"purple",
        textAlign:"center",
        alignSelf:"center",
        marginTop:30,
        fontSize:18,
        padding:10,
        color:"white",
        borderRadius:5,
        width:140,
        marginLeft:20
       }
})