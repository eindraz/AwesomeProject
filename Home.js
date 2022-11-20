import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Home = ({navigation}) => {
    return (
        <View>
            <Button title='Data Karyawan' onPress={()=>navigation.navigate('ListKaryawan')} />               
            <Button title='Katalog Produk' onPress={()=>navigation.navigate('KatalogProduk')} />
        </View>
    );
};

export default Home;