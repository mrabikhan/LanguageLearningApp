import { StyleSheet, Text, View, RadioButton } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';
import RadioButtonRN from 'radio-buttons-react-native';

const Language = ({navigation}) => {
    const langsbtn = () =>{
        navigation.navigate('Interests')
    }
    
    const data = [
        {
          label: 'English 1'
         }
        ];
    
        const data2 = [
            {
              label: 'Chinese 2'
             }
            ];
        const data3 = [
            {
            label: 'French 3'
            }
            ];
    
        const data4 = [
            {
            label: 'Arabic 4'
            }
            ];        

  return (
    <View>
    <Text style={{fontSize:30, color:"purple",
    textAlign:"center", padding:10, marginTop:50}}>Select Language</Text>
    <Text style={{fontSize:14, color:"purple",
    textAlign:"center", padding:5, marginTop:5}}>You Want To Learn</Text>
        <View style={styles.radiocontainer}>
        <RadioButtonRN
         data={data}
         selectedBtn={(e) => console.log(e)}
        /> 
        <Animatable.Image 
        duration={2000}
        animation={'bounceIn'}
        style={styles.radioimg}
        source={require("./assets/uk.png")} />
        </View>
        <View style={styles.radiocontainer}>
        <RadioButtonRN
         data={data2}
         selectedBtn={(e) => console.log(e)}
        /> 
        <Animatable.Image
         duration={2000}
         animation={'bounceIn'}
         style={styles.radioimg}
         source={require("./assets/china.png")} />
        </View>
<View style={styles.radiocontainer}>
        <RadioButtonRN
         data={data3}
         selectedBtn={(e) => console.log(e)}
        /> 
        <Animatable.Image 
        duration={3000}
        animation={'bounceIn'}
        style={styles.radioimg}
        source={require("./assets/france.png")} />
        </View>

<View style={styles.radiocontainer}>
        <RadioButtonRN
         data={data4}
         selectedBtn={(e) => console.log(e)}
        /> 
        <Animatable.Image 
        duration={4000}
        animation={'bounceIn'}
        style={styles.radioimg}
        source={require("./assets/saudia.png")} />
        </View>
        <Text style={styles.langbtn} onPress={langsbtn}>Next</Text>
    </View>
  )
}

export default Language

const styles = StyleSheet.create({
    radiocontainer:{
        margin:15
    },

    radioimg:{
        width:55,
        height:40,
        position:"absolute",
       marginLeft:270,
       marginTop:20
    },
    langbtn:{
     backgroundColor:"purple",
     textAlign:"center",
     alignSelf:"center",
     marginTop:30,
     fontSize:18,
     padding:10,
     color:"white",
     borderRadius:5,
     width:140
    }
})