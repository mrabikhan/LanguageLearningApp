import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AirbnbRating } from 'react-native-ratings'
import Toast from 'react-native-toast-message'
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';

const Ratings = ({navigation}) => {

   const ratebackbtn = () =>{
    navigation.navigate('Difficulty')
   }
   const ratenextbtn = () =>{
    Toast.show({
      type:'success',
      text1:'Success Message',
      text2:'Your Record Is Saved',
      visibilityTime:2000,
      onHide:()=>{
        navigation.navigate('Home')
      }
    })
    alert('Record Saved Successfully!')
   }
  return (
    <View>
      <Text style={{textAlign:"center", fontSize:34,
      fontWeight:"bold", marginTop:40, color:"purple"
    }}>Rate Your Skills</Text>
<Animatable.View
duration={2000} animation={'fadeInUp'}
style={{marginTop:50,backgroundColor:"white",elevation:10,
 margin:10, borderRadius:20}}>

<View style={{flexDirection:"row"}}>
  <Text style={{fontSize:28, color:"black", width:"34%",
  borderRadius:20,margin:25
}}>Reading:</Text>
    <AirbnbRating 
    starContainerStyle={{}}
    reviews={['Poor', 'Okay', 'Average', 'Good', 'Excellent']}
    reviewColor='darkgreen'
    reviewSize={20}
    size={28}
    defaultRating={2}
    />
</View>

<View style={{flexDirection:"row"}}>
  <Text style={{fontSize:26, color:"black", width:"35%",
  borderRadius:20,margin:25
}}>Listening:</Text>
    <AirbnbRating 
    starContainerStyle={{}}
    reviews={['Poor', 'Okay', 'Average', 'Good', 'Excellent']}
    reviewColor='darkgreen'
    reviewSize={20}
    size={28}
    defaultRating={1}
    />
</View>  

<View style={{flexDirection:"row"}}>
  <Text style={{fontSize:26, color:"black", width:"34%",
  borderRadius:20,margin:25
}}>Speaking:</Text>
    <AirbnbRating 
    starContainerStyle={{}}
    reviews={['Poor', 'Okay', 'Average', 'Good', 'Excellent']}
    reviewColor='darkgreen'
    reviewSize={20}
    size={28}
    defaultRating={3}
    />
</View>  

<View style={{flexDirection:"row"}}>
  <Text style={{fontSize:26, color:"black", width:"34%",
  borderRadius:20,margin:25,
}}>Writing:</Text>
    <AirbnbRating 
    starContainerStyle={{}}
    reviews={['Poor', 'Okay', 'Average', 'Good', 'Excellent']}
    reviewColor='darkgreen'
    reviewSize={20}
    size={28}
    defaultRating={4}
    />
</View> 
      <View style={{flexDirection:"row", marginTop:20,marginBottom:20}}>
      <Text style={styles.diffbtn} onPress={ratebackbtn}>Back</Text>
      <Text style={styles.diffbtn2} onPress={ratenextbtn}>Next</Text>
      </View>
</Animatable.View>
<Toast />
</View>
  )
}

export default Ratings

const styles = StyleSheet.create({
  diffbtn:{
    backgroundColor:"green",
    textAlign:"center",
    alignSelf:"center",
    marginTop:30,
    fontSize:18,
    padding:10,
    color:"white",
    borderRadius:5,
    width:140,
    margin:20
   },
   diffbtn2:{
    backgroundColor:"purple",
    textAlign:"center",
    alignSelf:"center",
    marginTop:30,
    fontSize:18,
    padding:10,
    color:"white",
    borderRadius:5,
    width:140,
    margin:20
   }
})