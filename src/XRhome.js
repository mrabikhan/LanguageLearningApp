import { StyleSheet, Text, View, ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native-animatable'
import Video from 'react-native-video';
import Footer from './components/Footer';

const XRhome = ({navigation}) => {
  const xrhomebtn = () =>{
        navigation.navigate('Payment')
  }

  return (
    <View>
      <ScrollView>
        <Image source={require("./assets/metaback.jpg")}
        style={{width:385, height:200, borderBottomRightRadius:20,
          borderBottomLeftRadius:20
        }}
        / >
        <Image source={require("./assets/favicon.png")}
        style={{width:100, height:80,marginLeft:20,marginTop:15,position:"absolute"}}
        />

        <View styles={{backgroundColor:"white", elevation:10, margin:50}}>
          <Text style={{fontSize:28, color:"purple",
           textAlign:"center", marginTop:20,padding:20}}>Immersive Experience</Text>
        <View style={{flexDirection:"row", backgroundColor:"#043b5c",
         elevation:10,padding:10, borderRadius:20,margin:10
      }}>
        <Image 
        style={{width:"40%",height:200,borderRadius:10,
        marginTop:30}}
        source={require("./assets/xrimg.png")}/>
        <Text style={{width:200,color:"white", marginLeft:15,marginTop:10, marginBottom:10}}>
          Using Extended Reality (XR) technology for language learning
          provides an immersive and interactive experience, allowing
          learners to engage with virtual environments and native 
          speakers. Through augmented reality (AR) and virtual reality
          (VR), language learners can practice real-life scenarios,
           enhancing both linguistic proficiency and cultural understanding.
          </Text>
        </View>

        <View style={{backgroundColor:"blue", margin:12, elevation:10,
         borderRadius:20, marginTop:50
      }}>
          <Text style={{fontSize:28, color:"white",textAlign:"center"
          , marginTop:30,fontWeight:"900"
        }}>XR Pricing Plan</Text>
          <Text style={{fontSize:20, color:"orange",textAlign:"center"
           , marginTop:10,fontWeight:"900", borderBottomWidth:1, borderBottomColor:"gray"
        }}>100 USD/Month</Text>

        <Text style={{fontSize:18, color:"white",marginLeft:50
           , marginTop:25, fontWeight:"bold"
        }}>
          1. 8 GB RAM{'\n\n'}
          2. 4 CPU Cores{'\n\n'}
          3. 3x VR Environments{'\n\n'}
          4. 1x AR Talking Avatar{'\n\n'}
          5. 100 Gb Nvme Space{'\n\n'}
          6. 24/7 Customer Support
        </Text>
        <TouchableOpacity>
        <Text style={{fontSize:20, backgroundColor:"yellow",
        color:"black",textAlign:"center",alignSelf:"center",
        padding:14, width:220, borderRadius:50, marginTop:30,
        marginBottom:50
      }}
      onPress={xrhomebtn}
      >Get Started</Text></TouchableOpacity>
        </View>
        </View>

        <Text style={{textAlign:"center", fontSize:28,
         color:"purple", padding:10, marginTop:60}}>
            How It Works?</Text>

            <Video source={require("./assets/xrvideo.mp4")} controls={true}  // Can be a URL or a local file.
       ref={(ref) => {
         this.player = ref
       }}                 
                            // Store reference
       onBuffer={this.onBuffer}                // Callback when remote video is buffering
       onError={this.videoError}               // Callback when video cannot be loaded
       style={styles.backgroundVideo}
       
       />

        <View style={{backgroundColor:"white", elevation:10,
        margin:25,padding:15, borderRadius:20}}>
        <Text style={{fontSize:20,fontWeight:"bold",color:"purple",
    }}>Instructions:</Text>
<Text style={{marginBottom:15}}>
{'\n'} 
1.Hardware:
VR Headset (for VR apps): Oculus Rift, HTC Vive, Valve Index, etc.
AR Glasses (for AR apps): Microsoft HoloLens, Magic Leap, etc.
{'\n\n'}
2.Sytem Specifications:
Processor (CPU): A powerful multicore processor (e.g., Intel i5/i7 or AMD Ryzen).{'\n'}
Graphics Card (GPU): Dedicated and powerful GPU (e.g., NVIDIA GTX 1060 or higher for VR).
RAM: 8GB or more.
Storage: The amount of storage depends on the size of the XR content.
{'\n\n'}
3.Operating System:
VR: Windows 10 is commonly used for PC-based VR systems. Oculus Rift also supports macOS.
{'\n\n'}
4.Sensors and Input Devices:
VR Controllers: Oculus Touch, HTC Vive controllers, etc.
{'\n'}
</Text>
        </View>
      <Footer />
      </ScrollView>
    </View>
  )
}

export default XRhome

const styles = StyleSheet.create({
    backgroundVideo: {
width:"100%",
height:200,
margin:20
      }
})
