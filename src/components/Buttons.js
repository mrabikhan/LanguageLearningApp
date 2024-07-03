import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Buttons = ({titleback ,titlenext, pressback,pressnext}) => {
  return (
    <View>
      <View style={{flexDirection:'row',width:"100%"}}>
           <Text style={{backgroundColor:"black", fontSize:18,
             alignSelf:"center", textAlign:"center", color:"white",
             marginTop:20, marginBottom:30,padding:10,borderRadius:5,
             width:150,elevation:5
         }}
            onPress={pressback}>
            {titleback}</Text>
         
         <Text style={{backgroundColor:"green", fontSize:18,
             alignSelf:"center", textAlign:"center", color:"white",
             marginTop:20, marginBottom:30,padding:10,borderRadius:5,
             width:150,marginLeft:20, elevation:5
         }}
         onPress={pressnext}>
            {titlenext}</Text>
           </View>
    </View>
  )
}

export default Buttons

const styles = StyleSheet.create({})