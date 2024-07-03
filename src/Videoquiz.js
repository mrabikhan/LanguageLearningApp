import { ScrollView, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import Video from 'react-native-video';
import Footer from './components/Footer'
import Quizes from './components/Quizes'
const Videoquiz = ({navigation}) => {
    const gotolistening = () => {
        navigation.navigate('Listening')
    }
  return (
    <View>
      <ScrollView>
        <View style={styles.vidquizcont}>
            <Text style={styles.vidquiztext}>Interactive Video Lessons</Text>
            <View style={styles.videocont}>
        <Video source={require("./assets/xrvideo.mp4")}
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
        </View>
        <Quizes 
      title= 'Attempt Quiz'
      statement='1. Who is the main protagonist of DBZ?'
      option1= ' Vegeta  '
      option2= ' Piccolo '
      option3= 'Goku '
      option4= 'Gohan '
/>

<Quizes 
      statement='2. What is the primary theme explored in "Dragon Ball Z"?'
      option1= 'Romance 1'
      option2= 'Superheroism 2'
      option3= 'Friendship and self-improvement 3'
      option4= 'Mystery 4'
/>

<Quizes 
      statement='3. What is Goku race in the serie?'
      option1= 'Saiyin 1'
      option2= 'Human 2'
      option3= 'Namekian 3'
      option4= 'Android 4'
/>

<Quizes 
      statement='4. Which of the following is not a villain faced by Goku in "Dragon Ball Z"?'
      option1= 'Frieza 1'
      option2= 'Raditz 2'
      option3= 'Aizen 3'
      option4= 'Magin Buu 4'
/>

<Quizes 
      statement='5. Who is Goku long-lost brother in the beginning of "Dragon Ball Z"?'
      option1= 'Gohan'
      option2= 'Piccolo'
      option3= 'Raditz'
      option4= 'Vegeta'
/>
<TouchableOpacity onPress={gotolistening}>
     <Text style={{ textAlign:"center", alignSelf:"center", fontSize:18,
     fontWeight:"bold", padding:12, width:150, borderRadius:5, backgroundColor:"green",
     color:"white", marginTop:50, marginBottom:20
     }}> Submit </Text>
     </TouchableOpacity>
        <Footer />
      </ScrollView>
    </View>
  )
}

export default Videoquiz

const styles = StyleSheet.create({
    backgroundVideo: {
        width:"100%",
        height:170,
        margin:20,
        marginTop:50
              },
    vidquiztext:{
     marginTop:30,
     textAlign:"center",
     fontSize:28,
     color:"purple",

    },
           
})