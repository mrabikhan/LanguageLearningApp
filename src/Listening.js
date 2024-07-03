import { StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import Footer from './components/Footer'
const Listening = ({navigation}) => {
  const score = '0/100'
  const backhome = () =>{
   navigation.navigate('Home')
  }
  
  const govidquiz= () =>{
    navigation.navigate('Videoquiz')
   }

  return (
    <View>
    <ScrollView>
    <Text style={styles.headtext}>Select Video Lesson</Text>
    <Text style={styles.scores}>{'Your Score: '+ score}</Text>
    <ScrollView horizontal={true}>
    <View style={styles.container}>
     
      <TouchableOpacity onPress={govidquiz}>
        <View style={[styles.card, styles.cardone]}>

        <Text style={styles.cardtext}>
          Lesson No.1
          {'\n'}
          Marshmallow  </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={[styles.card, styles.cardtwo]}>
        <Text style={styles.cardtext}>
        Lesson No.2
          {'\n'}
          Choco Browies 2
        </Text>
        </View>
      </TouchableOpacity>  

      <TouchableOpacity>
        <View style={[styles.card, styles.cardthree]}>
        <Text style={styles.cardtext}>
        Lesson No.3
          {'\n'}
         Pennut Butter </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={[styles.card, styles.cardfour]}>
        <Text style={styles.cardtext}>
        Lesson No.4
          {'\n'}
          Custurd Donut </Text>
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

export default Listening

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
  backgroundColor:"#d2527f",
  elevation:10,
},

cardtwo:{
  backgroundColor:"#323278",
  elevation:10,
},

cardthree:{
  backgroundColor:"#59abe3",
  elevation:10,
},

cardfour:{
  backgroundColor:"#9a12b3",
  elevation:10,
}
})