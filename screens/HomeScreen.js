import React, {useEffect, useState} from 'react';
import {image, StyleSheet, Text, useWindowDimensions, View} from "react-native";
import logo from "../assets/imgs/logo.png";
import imgHomePage from "../assets/imgs/imgs_hp.png"
import defaultAvatar from "../assets/imgs/defaultProfil.jpeg";
import AsyncStorage from "@react-native-async-storage/async-storage";

function HomeScreen() {
    const {height} = useWindowDimensions();
    const [image, setImage] = useState(null);
    const [imgFetched, setImgFetched] = useState(false);

    const getData = async () => {
        try {
            const profilePic = await AsyncStorage.getItem('@picImg_Key')
            if (profilePic !== null) {
                setImgFetched(true)
                setImage(profilePic)
            }
        } catch (e) {
            console.error(e, 'problem with get storage')
        }
    }


    useEffect(() => {
        getData();
    }, []);

    const getWorkout =  () => {
        const workoutList = fetch('../data/workout.json')
            .then((res) => res.json())
            .then((item) => console.log(item.name))
    }

    useEffect(() => {
        getWorkout();
    }, [] )



    return (
        <>
            <View style={styles.container}>
                <image source={logo} style={[styles.logo, {height: height * 0.3}]}/>

            </View>
            <View style={styles.home}>
                <View style={styles.avatar}>
                    {(image && imgFetched) && <image source={{uri: image}} style={{
                        width: 100,
                        height: 100,
                        marginHorizontal: 10,
                        borderRadius: 100,
                        borderColor: "#f14688",
                        borderWidth: 2
                    }}/>}
                    {!image && <image style={{width: 100, height: 100, marginHorizontal: 10, borderRadius: 100}} source={defaultAvatar}/>}
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