import React, {Component} from 'react';
import { View, Text, StyleSheet, Image,ImageBackground, Button, Alert } from 'react-native';

class Holamundo extends Component{

    saludo = () => { Alert.alert(
        'Bienvenido',
        'Para continuar presiona OK',
        [
            {
                text: 'Registrar',
                onPress: () => console.log('')
            },
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') }
        ],
        { cancelable: false }
    ); }

    render(){
        return(
            <ImageBackground source={require('./assets/back.jpg')}  style={styles.image}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <Image source={require('./assets/Triple-A-logo.png')} style={styles.logo}/>
                    </View>

                    <View style={styles.headerRight}>
                        <Button title="Login" onPress={this.saludo} />
                    </View>

                </View>

                <View style={[styles.body , styles.negrita]}>
                    <Text style={styles.innerText}>Bienvenido a Triple A</Text>

                </View>
                <View style={[styles.footer , styles.negrita]}>
                    <Text style={styles.innerText}>{'\u00A9'} Triple A Developers</Text>
                </View>

            </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column'
    },
    negrita: {
        fontWeight: 'bold'
    },
    header:{
        marginTop:40,
        flex: 0.3,
        flexDirection: 'row'
    },
    headerLeft: {
        flex: 1,
    },
    headerRight:{
        flex: 1,
    },
    body:{
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    footer: {
        flex: 0.1,
        alignItems: 'center'
    },
    logo:{
        width: 100,
        height: 100,
        borderRadius:50,
        resizeMode: 'contain'
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    innerText:{
        color: 'white'
    }
})

export default Holamundo