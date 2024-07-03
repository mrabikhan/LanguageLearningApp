import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'

const Settings = () => {
  return (
    <View style={{flex:1, justifyContent:"center", alignContent:"center", alignItems:"center"}}>
      <Image source={require("./assets/set.png")} style={{borderRadius:120}}/>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({})