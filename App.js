import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Home';
import DetailScreen from './Detail';

// function HomeScreen() {
//     return (
//         <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
//             <Text>Home Screen</Text>
//         </View>
//     );
// }

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} 
                    options={{
                    title:'Data Karyawan',
                    headerStyle: { backgroundColor:'#006aff' },
                    headerTintColor: '#fff'
                }} />
                <Stack.Screen name="Detail" component={DetailScreen} 
                    options={{
                    title: 'Detail Karyawan',
                    headerStyle: { backgroundColor:'#006aff' },
                    headerTintColor: '#fff'
                  }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;