import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'

const Menu = ({navigation}) => {
  const signoutbtn = () =>{
    navigation.navigate('Login')
  }
  const settingsbtn = () =>{
    navigation.navigate('Settings')
  }
  const aboutbtn = () =>{
    navigation.navigate('About')
  }
  const contactbtn = () =>{
    navigation.navigate('Contact')
  }   
  const closebtn = () =>{
    navigation.navigate('Home')
  }    
  return (
    <View>
      <TouchableOpacity onPress={settingsbtn}>
           <Text style={styles.menuitems}>Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={aboutbtn}>
           <Text style={styles.menuitems}>About Us</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={contactbtn}>
           <Text style={styles.menuitems}>Contact</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={signoutbtn}>
           <Text style={styles.menuitems}>Sign Out</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={closebtn}>
           <Text style={{color:"red", fontSize:16, textAlign:"center",marginTop:50}}>X Close </Text>
      </TouchableOpacity>
      </View>
  )
}

export default Menu

const styles = StyleSheet.create({
menuitems:{
  fontSize:18,
  textAlign:'center',
  marginTop:40,
  color:"purple",
  width:"100%",
  borderColor:'gray',
  borderBottomWidth:1,
padding:15
}
})