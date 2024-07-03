import { StyleSheet, Text,TextInput, View } from 'react-native'
import React from 'react'

const Input = ({title, placeholder, is_password}) => {
  return (
   <View>
    <Text style={styles.loginlabel}>{title}</Text>

    <TextInput style={styles.logininput}
     placeholder = {placeholder}
     placeholderTextColor={'gray'}
     secureTextEntry = {is_password}/>
     </View>
  )
}

const styles = StyleSheet.create({
  loginlabel:{
    color:"purple",
    fontSize:18,
    padding:10,
 },

  logininput:{
    fontSize:20,
    margin:10,
    borderBottomWidth:1.3,
    borderColor:"blue",        
  }
})

export default Input