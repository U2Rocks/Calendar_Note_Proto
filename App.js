import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './screens/MainScreen';
import NoteScreen from './screens/NoteScreen';
import design from './src/constants/global';


const TestScreen = () => {
  return (
    <View styles={styles.container}>
      <Text>Hello World</Text>
    </View>
  )
}


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Main'>
        <Stack.Screen 
        name='Main' 
        component={MainScreen} 
        options={{ title: 'Main Calendar', headerTitleStyle: { fontWeight: "bold" }, headerStyle: { backgroundColor: design.COLOR_PAPER } }}
        />
        <Stack.Screen 
        name='Note' 
        component={NoteScreen}
        options={({route}) => ({title: route.params.dayTitle})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
