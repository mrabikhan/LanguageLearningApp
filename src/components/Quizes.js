import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RadioButtonRN from 'radio-buttons-react-native';


const Quizes = ({title, option1, option2, option3, option4, statement}) => {
    const data = [
        {
          label: ' A. '+ option1
         },
         {
          label: ' B. '+ option2
         },
         {
          label:' C. '+ option3
         },
         {
          label: ' D. '+option4
         },
        ];

  return (
    <View style={styles.quizcont}>
      <Text style={styles.quizhead}>{title}</Text>
      <Text style={styles.quizstatement}>{statement}</Text>
      <RadioButtonRN
         style={{padding:20}}
         data={data}
         selectedBtn={(e) => console.log(e)}
        />
    </View>
  )
}

export default Quizes

const styles = StyleSheet.create({
    quizcont:{
        backgroundColor:'white',
        margin:10,
        padding:5,
        elevation:10,
        borderRadius:10
    },
    quizhead:{
        textAlign:"center",
        fontSize:18,
        padding:10
    },
    quizstatement:{
        color:"black",
        marginLeft:20
    }
})