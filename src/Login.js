import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, {useEffect,useState} from 'react'
import LinearGradient from 'react-native-linear-gradient'
import * as Animatable from 'react-native-animatable';
import Input from './Input';
import Toast from 'react-native-toast-message';
import CheckBox from 'react-native-check-box'
const Login = ({navigation}) => {
  const [isChecked, setIsChecked] = useState({
    remember: false
  })

  function showhome(){
    Toast.show({
      type:'success',
      text1:'Login Success',
      text2:'Successfully Logged In',
      visibilityTime:2000,
      onHide:()=>{
        navigation.navigate('Home')
      }
    })
  }
  function showsignup(){
    navigation.navigate('Signup')
}

  return (
    <View>
        <LinearGradient colors={['#42a1f5' , '#03bafc' , '#42c5f5']}
        start={{x:0, y:0}} end={{x:1 , y:0}}
        style={{width:'100%', height:280, borderBottomLeftRadius:20,
                borderBottomRightRadius:20,borderTopRightRadius:20}}>
    <View>
      <Animatable.Image duration={3000} animation={'bounceIn'}
        source={require("./assets/favicon.png")} 
      style={styles.loginimg}/>
    </View>   
        </LinearGradient>
        <Animatable.View duration={2500} animation={'bounceInUp'} style={styles.formcontainer}>
          <Text style={styles.formhead}> Login User</Text>
          <Input
           title='Username'
           placeholder='Enter Username'
           placeholderTextColor={'gray'}
           />
          
          <Input
           title='Password'
           placeholder='Enter Password'
           placeholderTextColor={'gray'}
           is_password={true}
           />
           <View style={{flexDirection:"row", margin:10}}>
            <CheckBox isChecked={isChecked.remember}
     onClick={()=>setIsChecked({...isChecked, remember: !isChecked.remember})}
    checkedCheckBoxColor='green'/>
            <Text style={{color:"black", fontSize:14}}> Remember Me? </Text>
           </View>
           <Text style={{color:"red", alignItems:"flex-end",
            textAlign:"right", margin:10, fontSize:16 }}>
              Forgot Password?
              </Text>
            
            <Text onPress={showhome} style={styles.loginbtn}>Sign In</Text>  
      
            <Text 
             onPress={showsignup}
            style={{textAlign:"center", marginTop:40,
             marginBottom:50}}>Don't have account? Register Now</Text>  

        </Animatable.View>
<Toast />
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    loginimg:{
        width:150,
        height:110,
        marginTop:30,
        marginLeft:120,
    },
    formcontainer:{
     elevation:10,
     borderRadius:20,
     backgroundColor:"white",
     marginTop:-100,
     width:"90%",
     marginLeft:20
    },

    formhead:{
        fontSize:26,
        fontWeight:"bold",
        textAlign:"center",
        marginTop:15
    },

    loginbtn:{
      marginTop:10,
      padding:10,
      backgroundColor:"blue",
      color:"white",
      fontSize:18,
      textAlign:"center",
      alignSelf:"center",
      borderRadius:5,
      width:130
    }

})