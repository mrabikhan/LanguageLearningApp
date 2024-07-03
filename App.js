import { StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Home';
import Splash from './src/Splash';
import Login from './src/Login';
import Signup from './src/Signup';
import Language from './src/Language';
import Difficulty from './src/Difficulty';
import Payment from './src/Payment';
import XRmenu from './src/XRmenu';
import XRhome from './src/XRhome';
import Confroom from './src/Confroom';
import Classroom from './src/Classroom';
import Auditroom from './src/Auditroom';
import Ratings from './src/Ratings';
import Reading from './src/Reading';
import Listening from './src/Listening';
import Writting from './src/Writting';
import Speaking from './src/Speaking';
import Menu from './src/Menu';
import About from './src/About';
import Contact from './src/Contact';
import Interests from './src/Interests';
import Settings from './src/Settings';
import Quizes from './src/components/Quizes';
import Storyone from './src/Storyone';
import Storytwo from './src/Storytwo';
import Storyquiz from './src/Storyquiz';
import Beveragenames from './src/Beveragenames';
import Fruitnames from './src/Fruitnames';
import Flashcards from './src/Flashcards';
import Phrase from './src/Phrase';
import Videoquiz from './src/Videoquiz';
import Storyquiztwo from './src/Storyquiztwo';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Splash' >
           <Stack.Screen name='Login' component={Login} options={{headerShown:false}} />
           <Stack.Screen name='Signup' component={Signup} options={{headerShown:false}} />
           <Stack.Screen name='Home' component={Home} 
           options={{headerShown:true,
           headerTitleAlign:"center"}}/>
           <Stack.Screen name='Splash' component={Splash} />
           <Stack.Screen name='Language' component={Language} options={{headerShown:true}} />
           <Stack.Screen name='Difficulty' component={Difficulty} options={{headerShown:false}}/>
           <Stack.Screen name='Payment' component={Payment} options={{headerShown:false}} />
           <Stack.Screen name='XRhome' component={XRhome} options={{headerShown:true}}  />
           <Stack.Screen name='XRmenu' component={XRmenu} options={{headerShown:false}}  />
           <Stack.Screen name='Confroom' component={Confroom}  options={{headerShown:true}} />
           <Stack.Screen name='Classroom' component={Classroom} />
           <Stack.Screen name='Auditroom' component={Auditroom} />
           <Stack.Screen name='Ratings' component={Ratings} options={{headerShown:true}} />
           <Stack.Screen name='Menu' component={Menu} options={{headerShown:true}} />
           <Stack.Screen name='About' component={About} options={{headerShown:true}} />
           <Stack.Screen name='Contact' component={Contact} options={{headerShown:true}} />
           <Stack.Screen name='Settings' component={Settings} options={{headerShown:true}} />
           <Stack.Screen name='Reading' component={Reading} options={{headerShown:true}} />
           <Stack.Screen name='Speaking' component={Speaking} options={{headerShown:true}} />
           <Stack.Screen name='Listening' component={Listening} options={{headerShown:true}} />
           <Stack.Screen name='Writting' component={Writting} options={{headerShown:true}} />
           <Stack.Screen name='Interests' component={Interests} options={{headerShown:true}} />
           <Stack.Screen name='Storyone' component={Storyone} options={{headerShown:true}} />
           <Stack.Screen name='Storytwo' component={Storytwo} options={{headerShown:true}} />
           <Stack.Screen name='Storyquiz' component={Storyquiz} options={{headerShown:true}} />
           <Stack.Screen name='Storyquiztwo' component={Storyquiztwo} options={{headerShown:true}} />
           <Stack.Screen name='Beveragenames' component={Beveragenames} options={{headerShown:true}} />
           <Stack.Screen name='Fruitnames' component={Fruitnames} options={{headerShown:true}} />
           <Stack.Screen name='Flashcards' component={Flashcards} options={{headerShown:true}} />
           <Stack.Screen name='Phrase' component={Phrase} options={{headerShown:true}} />
           <Stack.Screen name='Videoquiz' component={Videoquiz} options={{headerShown:true}} />

        </Stack.Navigator>
    </NavigationContainer>

  )
}
export default App
const styles = StyleSheet.create({})