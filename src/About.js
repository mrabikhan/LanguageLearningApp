import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
const About = () => {
  return (
    <View>
      <ScrollView>
      <Header />
      <View style={styles.aboutstyle}>
        <Text style={{fontSize:22,padding:10, margin:10,
           color:"purple"}}>About Platform</Text>
        <Text style={{marginBottom:15}}>
        
"LinguaPro+ is your passport to mastering languages effortlessly.
 Our platform offers a comprehensive suite of tools designed to 
 cater to diverse learning styles, whether you're a beginner or
  aiming for fluency. With interactive lessons, live tutoring,
  and immersive cultural content, learning becomes an engaging
  adventure. Our innovative approach focuses on practical communication
 skills, ensuring you not only learn a language but live it.
  Join us at LinguaPro+ and embark on a journey to unlock the 
  world through language." LinguaPro+ is an innovative language learning platform designed to cater to diverse learning styles and proficiency levels. With a range of interactive tools, personalized lesson plans, and real-time tutoring, mastering a new language becomes an engaging and enjoyable experience. Our platform fosters cultural immersion through rich, authentic content, ensuring that learners not only grasp the language but also the essence of its cultural nuances. Join LinguaPro+ for a seamless and effective journey towards linguistic proficiency and global connectivity.






      </Text>
      </View>
      <Footer />
      </ScrollView>
    </View>
  )
}

export default About

const styles = StyleSheet.create({

  aboutstyle:{
  
      backgroundColor:"white",
      margin:15,
      padding:10,
      elevation:10,
      borderRadius:20
  }
})