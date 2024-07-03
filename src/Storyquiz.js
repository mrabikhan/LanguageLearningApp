import { StyleSheet, Text, View , ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import Quizes from './components/Quizes'
import Footer from './components/Footer'
const Storyquiz = ({navigation}) => {
      const gostorymenu = () => {
            alert('Quiz Submitted Successfully!')
            navigation.navigate('Reading')
      }
  return (
    <View>
       <ScrollView>
      <Quizes 
      title= 'Attempt Quiz'
      statement='1. What is the name of the author of the "Harry Potter" series?'
      option1= 'J.R.R. Tolkien 1'
      option2= 'J.K. Rowling2'
      option3= 'George R.R. Martin 3'
      option4= 'Suzanne Collins 4'
/>

<Quizes 
      statement='2. At what age does Harry Potter discover that he is a wizard?'
      option1= '10 1'
      option2= '11 2'
      option3= '12 3'
      option4= '13 4'
/>

<Quizes 
      statement='3. Which school does Harry Potter attend to learn magic?'
      option1= 'Dragon Academy 1'
      option2= 'Merlins Institute 2'
      option3= 'Hogwarts School of Witchcraft and Wizardry 3'
      option4= 'Mystic Arts Academy 4'
/>

<Quizes 
      statement='4. What is the central theme explored in the "Harry Potter" series?'
      option1= 'Romance 1'
      option2= 'Science Fiction 2'
      option3= 'Mystery 3'
      option4= 'Friendship and the triumph of good over evil 4'
/>

<Quizes 
      statement='5. How many books are there in the "Harry Potter" series?'
      option1= '5 1'
      option2= '7 2'
      option3= '10 3'
      option4= '12 4'
/>
     <TouchableOpacity onPress={gostorymenu}>
     <Text style={{ textAlign:"center", alignSelf:"center", fontSize:18,
     fontWeight:"bold", padding:12, width:150, borderRadius:5, backgroundColor:"green",
     color:"white", marginTop:50, marginBottom:20
     }}>Submit</Text>
     </TouchableOpacity>
     <Footer />
</ScrollView>
    </View>
  )
}

export default Storyquiz

const styles = StyleSheet.create({})