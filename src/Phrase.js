import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Buttons from './components/Buttons'
import Footer from './components/Footer'
const Phrase = ({navigation}) => {

    const gowriting = () => {
      navigation.navigate('Writting')
    }

    const gonext = () => {
        setTimeout(() => {
         alert('You Got 0/10 Marks')
        },1)
        navigation.navigate('Writting')
      }
  return (
    <View>
      <ScrollView>
        <Text style={styles.headtext}> Complete The Common Phrase </Text>
        <View style={styles.container}>
          <Text
          style={{fontSize:20, marginTop:10,marginBottom:30, textAlign:"center"}}
          > 1/10 </Text>
          <View style={{flexDirection:"row"}}>
            <Text style={styles.phraseline}>1. First come, first </Text>
            <TextInput 
            style={styles.phraseinput}
            placeholder = 'Phrase...'
            placeholderTextColor= {'gray'}
            />
          </View>

          <View style={{flexDirection:"row", marginTop:10}}>
            <Text style={styles.phraseline}>2. Give piece of </Text>
            <TextInput 
            style={styles.phraseinput}
            placeholder = 'Phrase...'
            placeholderTextColor= {'gray'}
            />
          </View>

          <View style={{flexDirection:"row", marginTop:10}}>
            <Text style={styles.phraseline}>3. I wasn’t born </Text>
            <TextInput 
            style={styles.phraseinput}
            placeholder = 'Phrase...'
            placeholderTextColor= {'gray'}
            />
          </View>

          <View style={{flexDirection:"row", marginTop:10}}>
            <Text style={styles.phraseline}>4. Put him out to </Text>
            <TextInput 
            style={styles.phraseinput}
            placeholder = 'Phrase...'
            placeholderTextColor= {'gray'}
            />
          </View>

          <View style={{flexDirection:"row", marginTop:10}}>
            <Text style={styles.phraseline}>5. Thick as </Text>
            <TextInput 
            style={styles.phraseinput}
            placeholder = 'Phrase...'
            placeholderTextColor= {'gray'}
            />
          </View>

          <View style={{flexDirection:"row", marginTop:10}}>
            <Text style={styles.phraseline}>6. Game of cat and </Text>
            <TextInput 
            style={styles.phraseinput}
            placeholder = 'Phrase...'
            placeholderTextColor= {'gray'}
            />
          </View>

          <View style={{flexDirection:"row", marginTop:10}}>
            <Text style={styles.phraseline}>7. Catch as catch </Text>
            <TextInput 
            style={styles.phraseinput}
            placeholder = 'Phrase...'
            placeholderTextColor= {'gray'}
            />
          </View>

          <View style={{flexDirection:"row", marginTop:10}}>
            <Text style={styles.phraseline}>8. Belle of the </Text>
            <TextInput 
            style={styles.phraseinput}
            placeholder = 'Phrase...'
            placeholderTextColor= {'gray'}
            />
          </View>

          <View style={{flexDirection:"row", marginTop:10}}>
            <Text style={styles.phraseline}>9. Tempest in a </Text>
            <TextInput 
            style={styles.phraseinput}
            placeholder = 'Phrase...'
            placeholderTextColor= {'gray'}
            />
          </View>

          <View style={{flexDirection:"row", marginTop:10}}>
            <Text style={styles.phraseline}>10. Beauty is only </Text>
            <TextInput 
            style={styles.phraseinput}
            placeholder = 'Phrase...'
            placeholderTextColor= {'gray'}
            />
          </View>
        </View>
        <View style={{marginLeft:30}}>
        <Buttons 
        titleback='Back' 
        titlenext='Next'
        pressback={gowriting}
        pressnext={gonext}
        />
        </View>
        <Footer />
      </ScrollView>
    </View>
  )
}

export default Phrase

const styles = StyleSheet.create({

    headtext:{
        textAlign:"center",
        color:"darkgreen",
        fontSize:22,
        marginTop:30,
        padding:10
    },
    container:{
        backgroundColor:"skyblue",
        margin:10,
        borderRadius:10,
        padding:15
    },
    phraseline:{
        color:"darkblue",
        fontSize:20,
    },
    phraseinput:{
        borderBottomWidth:2,

        width:140,
        marginLeft:10,
        borderRadius:5,

    }
})