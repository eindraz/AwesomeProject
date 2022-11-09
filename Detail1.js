import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Detail = ({navigation}) => {
    return (
        <View>
            <Text>Detail Screen</Text>
            <Button title='Go Back' onPress={()=>navigation.goback()} />
            <Button title='Go to Home' onPress={()=>navigation.navigate('Home')} />
        </View>
    )
}

export default Detail;