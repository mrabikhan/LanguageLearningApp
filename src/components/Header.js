import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import * as Animatable from 'react-native-animatable';
const Header = () => {
  return (
    <View>
        
    <LinearGradient colors={['#42a1f5' , '#03bafc' , '#42c5f5']}
    start={{x:0, y:0}} end={{x:1 , y:0}}
    style={{width:'100%', height:280, borderBottomLeftRadius:20,
            borderBottomRightRadius:20,borderTopRightRadius:20}}>
<View>
  <Animatable.Image duration={3000} animation={'bounceIn'}
    source={require("../assets/favicon.png")} 
  style={styles.loginimg}/>
</View>   
    </LinearGradient>
      
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    loginimg:{
        width:150,
        height:110,
        marginTop:30,
        marginLeft:120,
    },
})