import React from 'react';
import {Image, Text, useWindowDimensions, View, StyleSheet} from "react-native";
import logo from "../assets/imgs/logo.png";
import imgHomePage from "../assets/imgs/imgs_hp.png"

export default function HomeScreen() {
    const {height} = useWindowDimensions();
    return (
            <>
                <View style={styles.container}>
                    <Image source={logo} style={[styles.logo, {height: height*0.3}]} />
                    <Text style={styles.title}>Atteignez vos objectifs de fitness avec nos programmes d'entraînement personnalisés</Text>
                    <Image source={imgHomePage} style={styles.img} />
                    </View>

                    </>
                    );
                }

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    logo: {
        width: '100%',
        maxHeight: 300,
        marginBottom: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#39324a',
        margin: 6,
        textAlign: "center"
    },
    img: {
        width: '90%',
    }

})