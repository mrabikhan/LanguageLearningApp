import { StyleSheet, Text, View } from 'react-native'
import React,{useState,useMemo} from 'react'
import RadioButtonRN from 'radio-buttons-react-native';
import LinearGradient from 'react-native-linear-gradient';
import Inputregister from './Inputregister';
import * as Animatable from 'react-native-animatable';
import RadioGroup from 'react-native-radio-buttons-group';
import Toast from 'react-native-toast-message';
const Signup = ({navigation}) => {

  const backsignup = () =>{
    navigation.navigate('Login')
  }

  const btnsignup = () =>{
    Toast.show({
      type:'success',
      text1:'Registeration',
      text2:'Sign Up Successfull',
      visibilityTime:2000,
      onHide:()=>{
        navigation.navigate('Language')
      }
    })
  }
  const radioButtons = useMemo(() => ([
    {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: 'Malee',
        value: 'M'
    },
    {
        id: '2',
        label: 'Femalee',
        value: 'F'
    },
    {
      id: '3',
      label: 'Otherr',
      value: 'O'
  }
]), []);

const [selectedId, setSelectedId] = useState();

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
        <Animatable.View duration={2500} animation={'bounceInUp'}
         style={styles.formcontainer}>
          <Text style={styles.formhead}> Register User</Text>
          
          <Inputregister
           title='Email Address'
           placeholder='Enter Email'
           placeholderTextColor={'gray'}
           />

          <Inputregister
           title='Username'
           placeholder='Enter Username'
           placeholderTextColor={'gray'}
           />
          
          <Inputregister
           title='Password'
           placeholder='Enter Password'
           placeholderTextColor={'gray'}
           is_password={true}
           />

           <Inputregister
           title='Mobile No '
           placeholder='Enter Mobile Number'
           placeholderTextColor={'gray'}
           />

          <Text style={{fontSize:13, color:"purple", padding:5}}>Select Gender</Text>
          <View style={{marginLeft:25, marginTop:10}}>
      <RadioGroup 
            radioButtons={radioButtons} 
            onPress={setSelectedId}
            selectedId={selectedId}
            layout='row'
        />
        </View>
            
    <View style={styles.btncontainer}>
    <Text style={styles.backbtn} onPress={backsignup}>Back</Text>  
    <Text style={styles.loginbtn} onPress={btnsignup}>Sign Up</Text>  
    </View>
        </Animatable.View>
        <Toast />
    </View>
  )
}

export default Signup

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
 marginTop:-120,
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
  marginLeft:20,
  padding:10,
  backgroundColor:"blue",
  color:"white",
  fontSize:16,
  textAlign:"center",
  alignSelf:"center",
  borderRadius:5,
  width:130
},
backbtn:{
  marginTop:10,
  marginLeft:20,
  padding:10,
  backgroundColor:"black",
  color:"white",
  fontSize:16,
  textAlign:"center",
  alignSelf:"center",
  borderRadius:5,
  width:130
},
btncontainer:{
flexDirection:"row",
margin:10,
marginBottom:40
}


})