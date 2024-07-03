import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native-animatable'

const Auditroom = () => {
  return (
    <View>
      <Text>Auditorium XR Environment</Text>
      <Image source={require("./assets/auditroom.png")}/>
    </View>
  )
}

export default Auditroom

const styles = StyleSheet.create({})