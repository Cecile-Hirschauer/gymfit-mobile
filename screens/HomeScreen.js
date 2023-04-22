import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, useWindowDimensions, View} from "react-native";
import logo from "../assets/imgs/logo.png";
import defaultAvatar from "../assets/imgs/defaultProfil.jpeg";

function HomeScreen() {
    const {height} = useWindowDimensions();
    const [image, setImage] = useState(null);
    const [imgFetched, setImgFetched] = useState(false);







    return (
        <>
            <View style={styles.container}>
                <Image source={logo} style={[styles.logo, {height: height * 0.3}]}/>

            </View>
            <View style={styles.home}>
                <View style={styles.avatar}>
                    <Image style={{width: 100, height: 100, marginHorizontal: 10, borderRadius: 100}} source={defaultAvatar}/>
                </View>
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
    },
    home: {
        width: '100%',
        padding: 5,

    }

})

export default HomeScreen;