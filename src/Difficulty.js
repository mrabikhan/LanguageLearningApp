import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import * as Animatable from 'react-native-animatable';
import RadioButtonRN from 'radio-buttons-react-native';

const Difficulty = ({navigation}) => {
    const diffbtn = () =>{
        navigation.navigate('Interests')
      }
    const diffbtn2 = () => {
    navigation.navigate('Ratings')
    }
    const data = [
        {
          label: 'I m a beginner 1'
         },
        {
            label: 'I m an intermediate 2'
        },
        {
            label: 'I m a professional 3'
        },
        ];
  return (
    <View>
    <LinearGradient colors={['#42a1f5' , '#03bafc' , '#42c5f5']}
    start={{x:0, y:0}} end={{x:1 , y:0}}
    style={{width:'100%', height:260, borderBottomLeftRadius:25,
            borderBottomRightRadius:25,borderTopRightRadius:25}}>
<View>
  <Animatable.Image duration={3000} animation={'bounceIn'}
    source={require("./assets/favicon.png")} 
    style={styles.loginimg}/>
</View>   
    </LinearGradient>
    <Text style={{fontSize:28, color:"purple",
    textAlign:"center", padding:10, marginTop:50}}>Select Difficulty Level</Text>
    <RadioButtonRN
         style={{padding:20}}
         data={data}
         selectedBtn={(e) => console.log(e)}
        />
        <View style={{flexDirection:"row", marginLeft:10}}>
        <Text style={styles.diffbtn} onPress={diffbtn}>Back</Text>
        <Text style={styles.diffbtn2} onPress={diffbtn2}>Next</Text>
        </View>
</View>

  )
}

export default Difficulty

const styles = StyleSheet.create({
    loginimg:{
        width:150,
        height:110,
        marginTop:30,
        marginLeft:120,
    },
    diffbtn:{
        backgroundColor:"green",
        textAlign:"center",
        alignSelf:"center",
        marginTop:30,
        fontSize:18,
        padding:10,
        color:"white",
        borderRadius:5,
        width:140,
        margin:20
       },
       diffbtn2:{
        backgroundColor:"purple",
        textAlign:"center",
        alignSelf:"center",
        marginTop:30,
        fontSize:18,
        padding:10,
        color:"white",
        borderRadius:5,
        width:140,
        margin:20
       }
})