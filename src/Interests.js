import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React,{useState} from 'react'

import CheckBox from 'react-native-check-box'
import LinearGradient from 'react-native-linear-gradient'
import * as Animatable from 'react-native-animatable';

const Interests = ({navigation}) => {

    const [isChecked, setIsChecked] = useState({
        science:false,
        education:false,
        sports:false,
        it:false,
        fashion:false,
        workout:false,
        news:false,
        food:false

    });
    const intbtn = () =>{
        navigation.navigate('Language')
      }
    const intbtn2 = () => {
    navigation.navigate('Difficulty')
    }

  return (
    <View>
      <ScrollView>
      <LinearGradient colors={['#42a1f5' , '#03bafc' , '#42c5f5']}
    start={{x:0, y:0}} end={{x:1 , y:0}}
    style={{width:'100%', height:260, borderBottomLeftRadius:25,
            borderBottomRightRadius:25,borderTopRightRadius:25}}>
<View>
  <Animatable.Image duration={3000} animation={'bounceIn'}
    source={require("./assets/favicon.png")} 
    style={styles.loginimg}/>
</View>   
    </LinearGradient>
    <Text style={{fontSize:28, color:"purple",
    textAlign:"center", padding:10, marginTop:30}}>Choose Any 3 Interests</Text>
    <View style={{ backgroundColor:"white", borderRadius:20,
    padding:15, margin:20, 
}}>
    <CheckBox style={styles.checkstyle} isChecked={isChecked.science}
     onClick={()=>setIsChecked({...isChecked, science: !isChecked.science})}
    rightText="Science & Technology" rightTextStyle={{fontSize:20, color:isChecked.science?'green' : 'black'}}
    checkedCheckBoxColor='green'
    />
        <CheckBox style={styles.checkstyle} isChecked={isChecked.education} onClick={()=>setIsChecked({...isChecked, education: !isChecked.education})}
    rightText="Education" rightTextStyle={{fontSize:20, color:isChecked.science?'green' : 'black'}} checkedCheckBoxColor='green'
    />
        <CheckBox style={styles.checkstyle} isChecked={isChecked.sports} onClick={()=>setIsChecked({...isChecked , sports: !isChecked.sports})}
    rightText="Sports" rightTextStyle={{fontSize:20 ,color:isChecked.science?'green' : 'black'}} checkedCheckBoxColor='green'
    />
        <CheckBox style={styles.checkstyle} isChecked={isChecked.it} onClick={()=>setIsChecked({...isChecked,it:!isChecked.it})}
    rightText="Information Technology" rightTextStyle={{fontSize:20,color:isChecked.science?'green' : 'black'}} checkedCheckBoxColor='green'
    />
        <CheckBox style={styles.checkstyle} isChecked={isChecked.fashion} onClick={()=>setIsChecked({isChecked, fashion:!isChecked.fashion})}
    rightText="Fashion & Beauty" rightTextStyle={{fontSize:20,color:isChecked.science?'green' : 'black'}} checkedCheckBoxColor='green'
    />
        <CheckBox style={styles.checkstyle} isChecked={isChecked.workout} onClick={()=>setIsChecked({...isChecked,workout:!isChecked.workout})}
    rightText="Workout & Fitness" rightTextStyle={{fontSize:20,color:isChecked.science?'green' : 'black'}} checkedCheckBoxColor='green'
    />

<CheckBox style={styles.checkstyle} isChecked={isChecked.news} onClick={()=>setIsChecked({isChecked,news:!isChecked.news})}
    rightText="Local / Global News " rightTextStyle={{fontSize:20,color:isChecked.science?'green' : 'black'}} checkedCheckBoxColor='green'
    />
    <CheckBox style={styles.checkstyle} isChecked={isChecked.food} onClick={()=>setIsChecked({isChecked,food:!isChecked.food})}
    rightText="Food / Diet " rightTextStyle={{fontSize:20,color:isChecked.science?'green' : 'black'}} checkedCheckBoxColor='green'
    />
</View>
        <View style={{flexDirection:"row", marginLeft:10}}>
        <Text style={styles.diffbtn} onPress={intbtn}>Back</Text>
        <Text style={styles.diffbtn2} onPress={intbtn2}>Next</Text>
        </View>
        
      </ScrollView>
  </View>  
  )
}

export default Interests

const styles = StyleSheet.create({
    loginimg:{
        width:150,
        height:110,
        marginTop:30,
        marginLeft:120,
    },
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
       },
       checkstyle:{
        marginTop:20,
        marginBottom:10

       }
})