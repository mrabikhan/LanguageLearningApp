import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native-animatable'
import Buttons from './components/Buttons'
import Footer from './components/Footer'

const Storyone = ({navigation}) => {
    const goreading = () => {
        navigation.navigate('Reading')
    }

    const gostoryone = () => {
        navigation.navigate('Storyquiz')
    }

  return (
    <View>
      <ScrollView>
        <Image source={require("./assets/harry.jpg")} style={styles.storyimg}/>
        <View style={styles.storycontainer}>
        <Text style={styles.storyinstruction}>Read the paragraph carefully
        and solve the MCQs
        </Text>
        <Text style={styles.storyhead}>Paragraph: 1</Text>
        <Text style={styles.storypara}>
        "Harry Potter," written by J.K. Rowling, is a captivating and
         enchanting series that has left an indelible mark on the world
         of literature. The novels follow the life and adventures of a
         young wizard named Harry Potter, who discovers on his eleventh
         birthday that he is a wizard and has been accepted to Hogwarts
         School of Witchcraft and Wizardry. As Harry navigates the 
         magical world, he unravels the mystery surrounding his parents'
         death, battles the dark wizard Lord Voldemort, and forms lasting
         friendships with characters like Hermione Granger and Ron Weasley.
         The series explores themes of friendship, bravery, and the triumph
         of good over evil. Rowling's intricate world-building, well-developed
         characters, and clever integration of magical elements into everyday
         life make the "Harry Potter" novels a beloved and enduring literary
         phenomenon. The series comprises seven books, each corresponding to a
         year of Harry's education at Hogwarts, culminating in a thrilling and
         emotionally charged conclusion in "Harry Potter and the Deathly
         Hallows."
        </Text>
        </View>
        <View style={{marginLeft:30}}>
        <Buttons 
        titleback='Back' 
        titlenext='Attempt Quiz'
        pressback={goreading}
        pressnext={gostoryone}
        /></View>
        <Footer />
      </ScrollView>
    </View>
  )
}

export default Storyone

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
      padding:10,
      borderRadius:10
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