import { StyleSheet, Text, View ,ScrollView, TouchableOpacity, Systrace} from 'react-native'
import React from 'react'
import { Image } from 'react-native-animatable'
import Footer from './components/Footer'
import Video from 'react-native-video';
import * as Animatable from 'react-native-animatable';

const Home = ({navigation}) => {
    const showread = () => {
    navigation.navigate('Reading')
  }
    const showspeak = () => {
    navigation.navigate('Speaking')
  }  
    const showlisten = () => {
    navigation.navigate('Listening')
  }  
    const showwrite = () => {
    navigation.navigate('Writting')
  }  
  const metabtn = () => {
    navigation.navigate('XRhome')
  } 

  const onsettings = () => {
    navigation.navigate('Menu')
  } 

  return (
    <View style={{height:"100%", width:"100%"}}>
      <ScrollView>
      <Text style={styles.headtext}>Features</Text>
      <TouchableOpacity style={{position:"absolute", marginLeft:310,
       marginTop:10
       }} onPress={onsettings}>
      <Image source={require("./assets/bars.png")} 
        style={{width:50,height:50}}/>
      </TouchableOpacity>

        <View style={styles.container}>

          <Animatable.View
           duration={1000}
           animation={'bounceIn'}
           style={[styles.card, styles.cardone]}>
          <Text style={styles.cardtext}> Flash Cards </Text>
          </Animatable.View>
          <Animatable.View
           duration={1500}
           animation={'bounceIn'}
          style={[styles.card, styles.cardtwo]}>
          <Text style={styles.cardtext}> Find Correct Photo </Text>
          </Animatable.View>
          <Animatable.View
           duration={2000}
           animation={'bounceIn'}
          style={[styles.card, styles.cardthree]}>
          <Text style={styles.cardtext}>Video Lessons</Text>
          </Animatable.View>
          <Animatable.View
           duration={3000}
           animation={'bounceIn'}
          style={[styles.card, styles.cardfour]}>
          <Text style={styles.cardtext}> Short Stories </Text>
          </Animatable.View>
        </View>

        <Animatable.View
        duration={2000}
        animation={'fadeInRight'}
        >
            <Text style={styles.elevatedhead}>Pro Modules</Text>
            <View style={styles.elevatedcont}>
              <ScrollView horizontal={true}>
              <View style={[styles.elcard]}>
                <Image 
                style={styles.elimg}
                source={require("./assets/games.png")}
                />
              </View>

              <View style={[styles.elcard]}>
                <Image 
                style={styles.elimg}
                source={require("./assets/phrase.png")}
                />
              </View>

              <View style={[styles.elcard]}>
                <Image 
                style={styles.elimg}
                source={require("./assets/meta.png")}
                />
              </View>

              <View style={[styles.elcard]}>
                <Image 
                style={styles.elimg}
                source={require("./assets/quiz.png")}
                />
              </View>
              </ScrollView>
            </View>
        </Animatable.View>

       <View style={styles.mission}>
        <Text style={styles.missionhead}> Company Mission </Text>
        <View style={{flexDirection:"row"}}>
          <Image 
          style={styles.missionimg}
          source={require("./assets/favicon.png")}/>
          <Text style={styles.missiontext}> 
          "Linguapro+ envisions a world where language barriers
           dissolve through a transformative language learning
           experience. Our platform cultivates fluency in reading, 
           writing, speaking, and listening, empowering learners to 
           confidently navigate a multilingual future."
           </Text>
        </View>
       </View>

        <View style={{backgroundColor:"#d2527f", elevation:10, 
           margin:15, borderRadius:20}}>
          <Image style={styles.metacover} source={require("./assets/metacover.png")}/>
          <TouchableOpacity onPress={metabtn}>
            <Text style={{alignSelf:"center", textAlign:"center",
            backgroundColor:"#5a228b", color:"white", borderRadius:4,
            fontSize:18, padding:10, width:320, marginTop:20, marginBottom:20
          }}>Try Premium</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.videocont}>
        <Video source={require("./assets/linguavid.mp4")}
         controls={false} muted={true} 
         repeat={true}
         // Can be a URL or a local file.
       ref={(ref) => {
         this.player = ref
       }}                 
                            // Store reference
       onBuffer={this.onBuffer}                // Callback when remote video is buffering
       onError={this.videoError}               // Callback when video cannot be loaded
       style={styles.backgroundVideo}
       
       />
        </View>

        <View style={styles.teamcont}>
          <Text style={styles.teamhead}> Meet Our Team </Text>
         <Image 
         style={styles.teamimg}
         source={require("./assets/sanya.png")}/>

         <Image 
         style={styles.teamimg}
         source={require("./assets/rabi.png")}/>

         <Image 
         style={styles.teamimg}
         source={require("./assets/daniyal.png")}/>
         <TouchableOpacity>
         <Text
         style={{fontSize:18, backgroundColor:"blue", padding:10,
         margin:20, width:200, alignSelf:"center",color:"white", elevation:5,
         borderRadius:5, textAlign:"center"
        }}
         > Visit Portfolio </Text>
         </TouchableOpacity>
        </View>
       
       <Footer />
        </ScrollView>
        <View style={{position:"absolute", top:"88%"}}>
        <View style={styles.tabcont}>
          <TouchableOpacity onPress={showread}>
          <Image style={styles.tabimg}  source={require("./assets/tab4.png")}/>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={showspeak}>
          <Image style={styles.tabimg} source={require("./assets/tab2.png")}/>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={showlisten}>
          <Image style={styles.tabimg} source={require("./assets/tab3.png")}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={showwrite}>
          <Image style={styles.tabimg} source={require("./assets/tab1.png")}/>
          </TouchableOpacity>
        </View>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
  headtext:{
     fontSize:24,
     fontWeight:"bold",
     padding:15
  },
  container:{
   flex:1,
   flexDirection:"row"
    },
  card:{
    
    width:100,
    height:120,
    borderRadius:5,
    margin:10,
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  cardone:{
    backgroundColor:"#5a228b",
    elevation:10,
  },
  cardtwo:{
    backgroundColor:"#d2527f",
    elevation:10,
  },
  cardthree:{
    backgroundColor:"#59abe3",
    elevation:10,
  },
  cardfour:{
    backgroundColor:"#9a12b3",
    elevation:10,
  },

  cardtext:{
   color:"white"
  },

  elevatedhead:{
    fontSize:24,
    fontWeight:"bold",
    padding:15
 },

 elevatedcont:{
  flex:1,
  flexDirection:"row",
  height:180
   },

 elimg:{
  width:120, 
  height:120, 
  margin:10, 
  borderRadius:5
},  
  cardtext:{
  color:"white"
 },

tabcont:{
 flexDirection:"row",
 marginLeft:10
},

tabimg:{
  width:85,
  height:85,
  borderWidth:1,
  borderColor:"lightgray",
  borderRadius:4,
  marginLeft:4,
  },
  
  metacover:{
  width:"100%",
  height:230,
  marginLeft:-17,
  borderBottomRightRadius:60,
  },

  teamcont:{
    flex:1,
    alignItems:"center",
    backgroundColor:"white",
    margin:20,
    borderRadius:10,
    elevation:5
  },

  teamhead:{
   fontSize:28,
   color:"purple",  
  textAlign:"center",
  marginTop:30,
  },

  teamimg:{
   width:210,
   height:300,
   marginTop:20,
   marginBottom:20,
   borderRadius:6,
  },
  backgroundVideo: {
    width:340,
    height:250,
    margin:20,
    marginTop:50
          },
    mission:{
     backgroundColor:"white",
     margin:12,
     borderRadius:10,
     height:320
    } ,
    missionhead:{
     fontSize:22,
     color:"purple",
     margin:15,
     textAlign:"center"
    },
    missionimg:{
    width:110,
    height:80,
    margin:10,
    marginTop:50
    },
    missiontext:{
     width:220,
     fontSize:16,

    }    
})
export default Home

