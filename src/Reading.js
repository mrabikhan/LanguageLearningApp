import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Footer from './components/Footer'
const Reading = ({navigation}) => {
    const score='0/100'

    const gostoryone = () =>{
       navigation.navigate('Storyone')
    }

    const gostorytwo = () =>{
      navigation.navigate('Storytwo')
   }

   const backhome = () =>{
    navigation.navigate('Home')
 }
  return (
    <View>
    <ScrollView>
    <Text style={styles.headtext}>Select Short Story</Text>
    <Text style={styles.scores}>{'Your Score: '+ score}</Text>
    <ScrollView horizontal={true}>
    <View style={styles.container}>
     
      <TouchableOpacity onPress={gostoryone}>
        <View style={[styles.card, styles.cardone]}>

        <Text style={styles.cardtext}>
          Paragraph: 1
          {'\n'}
          Harry Potter 1
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={gostorytwo}>
        <View style={[styles.card, styles.cardtwo]}>
        <Text style={styles.cardtext}>
        Paragraph: 2
          {'\n'}
          Dragon Ball Z 2
        </Text>
        </View>
      </TouchableOpacity>  

      <TouchableOpacity>
        <View style={[styles.card, styles.cardthree]}>
        <Text style={styles.cardtext}>
        Paragraph: 3
          {'\n'}
          Oliver Twist 3
        </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={[styles.card, styles.cardfour]}>
        <Text style={styles.cardtext}>
        Paragraph: 4
          {'\n'}
          Arabian Nights 4
        </Text>
        </View>
      </TouchableOpacity>  
    </View>
    </ScrollView>
    <TouchableOpacity onPress={backhome}>
      <Text style={{backgroundColor:"blue", color:"white",fontSize:18,
      padding:12,textAlign:"center",alignSelf:"center", borderRadius:5,
      marginTop:100, width:170, elevation:10
    }}>Go Back</Text>
    </TouchableOpacity>
    <Footer />
</ScrollView>
  </View>
  )
}

export default Reading

const styles = StyleSheet.create({

  headtext:{
    fontSize:28,
    fontWeight:"bold",
    padding:15,
    textAlign:"center",
    color:"purple",
    marginTop:35
 },

 scores:{
    textAlign:"center",
    fontSize:20,
    padding:15,
    backgroundColor:"white",
    margin:20,
    borderRadius:7
 },

 container:{
  flex:1,
  flexDirection:"row",
  marginTop:50
   },

 card:{
   width:300,
   height:200,
   borderRadius:5,
   margin:10,
   flex:1,
   justifyContent:"center",
   alignItems:"center"
 },

 cardtext:{
    fontSize:26,  
    color:"white",
 },

 cardone:{
  backgroundColor:"teal",
  elevation:10,
},

cardtwo:{
  backgroundColor:"skyblue",
  elevation:10,
},

cardthree:{
  backgroundColor:"#323278",
  elevation:10,
},

cardfour:{
  backgroundColor:"#9a12b3",
  elevation:10,
}
})