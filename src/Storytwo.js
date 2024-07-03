import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import Footer from './components/Footer'
import Buttons from './components/Buttons'
import { Image } from 'react-native-animatable'

const Storytwo = ({navigation}) => {
  const goreading = () => {
    navigation.navigate('Reading')
}

const gostorytwo = () => {
    navigation.navigate('Storyquiztwo')
}
  return (
    <View>
      <ScrollView>
        <Image source={require("./assets/dbz.jpg")} style={styles.storyimg}/>
        <View style={styles.storycontainer}>
        <Text style={styles.storyinstruction}>Read the paragraph carefully
        and solve the MCQs
        </Text>
        <Text style={styles.storyhead}>Paragraph: 2</Text>
        <Text style={styles.storypara}>
        "Dragon Ball Z" is a Japanese manga series written and
         illustrated by Akira Toriyama. The story follows the 
         adventures of Goku, a Saiyan warrior with incredible 
         strength, as he defends the Earth against various powerful 
         foes. The narrative is divided into several sagas, each 
         featuring intense battles, transformations, and character 
         development. The series begins with the arrival of Raditz, 
         Goku's long-lost brother, and unfolds into epic confrontations 
         with formidable villains such as Frieza, Cell, and Majin Buu. 
         "Dragon Ball Z" explores themes of friendship, loyalty, and 
         the continuous pursuit of self-improvement, with Goku epitomizing 
         the indomitable spirit of a hero. The series has gained immense 
         popularity for its compelling storyline, well-designed characters, 
         and the iconic combat system involving powerful energy attacks 
         and transformations. The fusion of martial arts, science fiction, 
         and fantasy elements creates a unique and engaging narrative that 
         has left a lasting impact on the world of anime and manga.

        </Text>
        </View>
        <View style={{marginLeft:30}}>
        <Buttons 
        titleback='Back' 
        titlenext='Attempt Quiz'
        pressback={goreading}
        pressnext={gostorytwo}
        />
        </View>
        <Footer />
      </ScrollView>
    </View>
  )
}

export default Storytwo

const styles = StyleSheet.create({
  storyimg:{
    width:"100%",
    height:200,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
  },

  storycontainer:{
   backgroundColor:"white",
   margin:10,
    padding:10
  },

  storyhead:{
      margin:10,
      fontSize:20,
      color:"purple"
  },
  storypara:{
   fontSize:16,
   marginBottom:20
  },
  storyinstruction:{
      color:"darkgreen",
      textAlign:"center",
      padding:10,
      fontSize:22,
      marginTop:10,
      fontWeight:"bold"
  }
})