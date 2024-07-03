import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Footer from './components/Footer'
import { Image } from 'react-native-animatable'

const Flashcards = () => {
    const message = () => {
        alert('Cprrect Option!')
    }
  return (
    <View>
      <ScrollView>
        <Text style={styles.headtext}>Play Flash Cards</Text>
        <Text style={{fontSize:20, textAlign:"center"}}> Cards: 1/10 </Text>
        <ScrollView horizontal={true}>
        <View style={styles.container}>
          <Image 
          style={{width:240, height:280, borderRadius:4}}
          source={require("./assets/giraffe.png")}/>
          <Text style={styles.statment}> Which animal is this? </Text>
          <TextInput
          style={styles.flashinput}
          placeholder='Answer'
          placeholderTextColor={'gray'}
          />
          <TouchableOpacity onPress={message}>
          <Text style={styles.checkbtn}> Check </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <Image 
          style={{width:240, height:280, borderRadius:4}}
          source={require("./assets/laptop.png")}/>
          <Text style={styles.statment}> Which device is this? </Text>
          <TextInput
          style={styles.flashinput}
          placeholder='Answer'
          placeholderTextColor={'gray'}
          />
          <TouchableOpacity onPress={message}>
          <Text style={styles.checkbtn}> Check </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <Image 
          style={{width:240, height:280, borderRadius:4, }}
          source={require("./assets/bread.png")}/>
          <Text style={styles.statment}> Which food is this? </Text>
          <TextInput
          style={styles.flashinput}
          placeholder='Answer'
          placeholderTextColor={'gray'}
          />
          <TouchableOpacity onPress={message}>
          <Text style={styles.checkbtn}> Check </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <Image 
          style={{width:240, height:280, borderRadius:4}}
          source={require("./assets/giraffe.png")}/>
          <Text style={styles.statment}> Which animal is this? </Text>
          <TextInput
          style={styles.flashinput}
          placeholder='Answer'
          placeholderTextColor={'gray'}
          />
          <TouchableOpacity onPress={message}>
          <Text style={styles.checkbtn}> Check </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <Image 
          style={{width:240, height:280, borderRadius:4}}
          source={require("./assets/laptop.png")}/>
          <Text style={styles.statment}> Which device is this? </Text>
          <TextInput
          style={styles.flashinput}
          placeholder='Answer'
          placeholderTextColor={'gray'}
          />
          <TouchableOpacity onPress={message}>
          <Text style={styles.checkbtn}> Check </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <Image 
          style={{width:240, height:280, borderRadius:4, }}
          source={require("./assets/bread.png")}/>
          <Text style={styles.statment}> Which food is this? </Text>
          <TextInput
          style={styles.flashinput}
          placeholder='Answer'
          placeholderTextColor={'gray'}
          />
          <TouchableOpacity onPress={message}>
          <Text style={styles.checkbtn}> Check </Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
      </ScrollView>
      <Footer />
    </View>
  )
}

export default Flashcards

const styles = StyleSheet.create({
    headtext:{
        textAlign:"center",
        color:"darkgreen",
        fontSize:28,
        marginTop:30,
        padding:10
    },
    container:{
        backgroundColor:"pink",
        margin:12,
        borderRadius:10,
        padding:15,
        flex:1,
        alignItems:"center",
        elevation:5
    },
    flashinput:{
        backgroundColor:"white",
        width:240,
        marginTop:20,
        borderRadius:5
    },
    statment:{
        color:"black",
        margin:10,
        marginTop:15,
        fontSize:22
    },
    checkbtn:{
        backgroundColor:"blue",
        padding:10,
        width:240,
        marginTop:20,
        textAlign:"center",
        alignSelf:"center",
        fontSize:18,
        color:"white",
        borderRadius:5
    }
})