import { StyleSheet, Text,Image, View,ScrollView } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';
import Header from './components/Header'
import Footer from './components/Footer'
import Input from './Input';
import Buttons from './components/Buttons';
const Contact = ({navigation}) => {
    const contactbackbtn = () => {
      navigation.navigate('Menu')
    }
    const contactnextbtn = () => {
      navigation.navigate('Home')
    }
  return (
    <View>
      <ScrollView>
         <Header />
         <View styles={{backgroundColor:"white", elevation:10, margin:50}}>
          <Text style={{fontSize:28, color:"purple",
           textAlign:"center", marginTop:20,padding:20}}>Contact Details</Text>
        <View style={{flexDirection:"row", backgroundColor:"#043b5c",
         elevation:10,padding:10, borderRadius:20,margin:10}}>
        
        <Animatable.Image source={require("./assets/phone.png")}
        style={{width:130,height:130, marginTop:40, borderRadius:10}}
        />
        <Text style={{width:200,color:"white", marginLeft:15,marginTop:10, marginBottom:10}}>
          Phone: +92 3328785677 {'\n\n'}
          Email: info@linguaproplus.technolog {'\n\n'}
          Address: Lahore, Pakistan{'\n\n'}
          Social Media:{'\n\n'}
          </Text>
          <View style={{flexDirection:"row", flex:1,marginLeft:-120,marginTop:160, justifyContent:"center",alignContent:"center",alignItems:"center"}}>
          <Image style={styles.imgitems} source={require('./assets/insta.png')} />
          <Image style={styles.imgitems} source={require('./assets/fb.png')} />
          <Image style={styles.imgitems} source={require('./assets/web.png')} />
          </View>
        </View>
        </View>

        <View style={styles.feedback}>
         <Text style={{textAlign:"center", fontSize:28, color:"purple",
         marginTop:30, marginBottom:30}}>User's Feedback</Text>
         <Input
           title='Full Name'
           placeholder='Enter Full Name'
           placeholderTextColor={'gray'}
           />
          <Input
           title='Email Address'
           placeholder='Enter Email Address'
           placeholderTextColor={'gray'}
           />

          <Input
           title='Feedback'
           placeholder='Your Comments'
           placeholderTextColor={'gray'}
           />   
           <Buttons 
           titleback={'Back'}
           titlenext={'Submit'}
           pressback={contactbackbtn}
           pressnext={contactnextbtn}

/>

        </View>
         <Footer />
      </ScrollView>
     
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({

  imgitems:{
    width:30,
    height:30,
    marginLeft:-100
  },
feedback:{
   backgroundColor:"white",
   margin:15,
   padding:10,
   elevation:10,
   borderRadius:20
}
})