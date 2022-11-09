import React from "react";
import { StyleSheet, View, Text, TextInput, Image, Button } from 'react-native';
import { styles } from './styles';
import img_add from './image/add.png';
import img_menu from './image/menu.png';
import img_more from './image/down-arrow.png';
import img_profil from './image/user_profile.jpg';

const App = () => {
  	return (
		<View style={styles.container}>
			<View style={styles.viewRow1}>
				<View style={{flex: 5, backgroundColor:'white', justifyContent:'center'}}>
					<Text style={{fontSize:20}}>  Wahyu Indra</Text>
				</View>
				<TampilanGambar simbol={img_add} />
				<TampilanGambar simbol={img_menu} />
			</View>
			<View style={styles.viewRow2}>
				<FotoProfil foto={img_profil} />
				<CardProfil angka="100" keterangan="Postingan" />
				<CardProfil angka="1000" keterangan="Pengikut" />
				<CardProfil angka="2000" keterangan="Mengikuti" />
			</View>
				<View style={{flex: 2, backgroundColor:'white'}}>
				</View>
				<View style={styles.viewRow1}>
					<View style={{flex:7}}>
						<Button title="Edit Profil" />
					</View>
					<TampilanGambar simbol={img_more} />
				</View>
				<View style={{flex: 2, backgroundColor:'white'}}>
				</View>
				<View style={{flex: 1, backgroundColor:'gray'}}>
				</View>
				<View style={{flex: 2, backgroundColor:'white'}}>
				</View>
				<View style={{flex: 1, backgroundColor:'gray'}}>
				</View>
        </View>
  	)
 
}

const TampilanGambar = (props) => {
	return (
		<View style={styles.viewGambar}>
			<Image style={styles.gambar}
			source={props.simbol}/>
		</View>
	)
}

const FotoProfil = (props) => {
	return (
		<View style={styles.viewGambar}>
			<Image style={styles.gambarProfil}
			source={props.foto}/>
		</View>
	)
}

const CardProfil = (props) => {
	return (
		<View style={styles.viewGambar}>
			<Text style={styles.textProfil}>{props.angka}</Text>
			<Text style={styles.ketProfil}>{props.keterangan}</Text>
		</View>
	)
}

export default App;
