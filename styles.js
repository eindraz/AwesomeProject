import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      	flex:1,
      	backgroundColor:'white'
    },
	gambar: {
		width:30,
		height:30,
		margin:10
	},
	gambarProfil: {
		width:80,
		height:80,
		borderRadius:80/2
	},
	textProfil: {
		fontWeight:'bold',
		fontSize:25
	},
	viewRow1: {
		flex: 1,
		flexDirection:'row',
		backgroundColor:'white'
	},
	viewRow2: {
		flex: 2,
		flexDirection:'row',
		backgroundColor:'white'
	},
	viewGambar: {
		flex: 1,
		justifyContent:'center',
		alignItems:'center'
	},
	gridGambar: {
		width:130,
		height:130,
		borderColor:'black'
	},

  })

  export {styles};