import { StyleSheet, Text, View , ScrollView} from 'react-native'
import React from 'react'
import Input from './Input'
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import Toast from 'react-native-toast-message';

const Payment = ({navigation}) => {

        const paybtn = () => {
            Toast.show({
            type:'success',
            text1:'Message',
            text2:'Payment Successfully Transfered',
            visibilityTime:3000,
            onHide: () =>{
                 navigation.navigate('XRmenu')
            }
        })
    }

   const payback = () =>{
    navigation.navigate('XRhome')
  } 

  return (
    <View>
      <ScrollView>
<LinearGradient colors={['#42a1f5' , '#03bafc' , '#ffffff']}
        start={{x:0, y:0}} end={{x:1 , y:0}}
        style={{width:'100%', height:280, borderBottomLeftRadius:20,
                borderBottomRightRadius:20,borderTopRightRadius:20}}>
    <View>
      <Animatable.Image duration={3000} animation={'bounceIn'} 
       source={require("./assets/favicon.png")} 
       style={{width:140,height:105,marginLeft:130,marginTop:25}}/>
    </View>   
        </LinearGradient>

        <View style={{backgroundColor:"white",borderRadius:15,
            padding:10, margin:20, marginTop:-140, elevation:10, 
        }}>
            <Text style={{color:"black", fontSize:32,
             fontWeight:"bold", textAlign:"center",
             padding:10
        }}>Add Payment</Text>
            <Input
           title='Card / Account No'
           placeholder='XXXX-XXXX-XXXX-XXXX'
           placeholderTextColor={'gray'}
           />
            <Input
           title='Card Expiry'
           placeholder='07/26'
           placeholderTextColor={'gray'}
           />
            <Input
           title='CVC / CVV'
           placeholder='000'
           placeholderTextColor={'gray'}
           />

           <Animatable.Image
           duration={2000}
           animation={'fadeInLeft'}
           source={require("./assets/visa.png")}
           style={{width:200,height:80,
             borderColor:"black",borderWidth:1, width:"100%"
        }}
           />
           <View style={{flexDirection:'row',width:"100%"}}>
           <Text style={{backgroundColor:"black", fontSize:18,
             alignSelf:"center", textAlign:"center", color:"white",
             marginTop:20, marginBottom:30,padding:10,borderRadius:5,
             width:150
         }}
             onPress={payback}>Back</Text>
         
         <Text style={{backgroundColor:"green", fontSize:18,
             alignSelf:"center", textAlign:"center", color:"white",
             marginTop:20, marginBottom:30,padding:10,borderRadius:5,
             width:150,marginLeft:20
         }}
         onPress={paybtn}
         >Pay Now</Text>
           </View>
           
        </View>
        <Toast />
        </ScrollView>
    </View>
  )
}

export default Payment

const styles = StyleSheet.create({})