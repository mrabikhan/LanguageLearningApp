import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Inputregister = ({title,placeholder,is_password}) => {
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

export default Inputregister

const styles = StyleSheet.create({
    loginlabel:{
        color:"purple",
        fontSize:13,
        padding:5,
        marginLeft:5
     },
    
      logininput:{
        fontSize:16,
        margin:5,
        borderBottomWidth:1.3,
        borderColor:"blue",        
      }
})