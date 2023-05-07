import React, {useEffect, useState} from 'react'
import {Button, Image, ScrollView, StyleSheet, Text, TextInput, useWindowDimensions, View} from "react-native";
import logo from "../assets/imgs/logo.png";
import * as imagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import defaultAvatar from '../assets/imgs/defaultProfil.jpeg';
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import {FontAwesome, FontAwesome5, Ionicons} from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';


function ProfileScreen() {
    const {height} = useWindowDimensions();

    const [birthday, setBirthday] = useState(new Date())
    const [show, setShow] = useState(false)
    const [image, setImage] = useState(null);
    const [username, setUsername] = useState('');
    const [imgFetched, setImgFetched] = useState(false);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await imagePicker.launchImageLibraryAsync({
            mediaTypes: imagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.canceled) {
            await storeData(result.assets[0].uri)
            setImage(result.assets[0].uri);
        }
    }

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false)
        setBirthday(currentDate)
    }

    const storeData = async (image) => {
        try {
            await AsyncStorage.setItem('@picImg_Key', image)
        } catch (e) {
            console.error(e, 'problem with storage')
        }
    }

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


    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Image source={logo} style={[styles.logo, {height: height * 0.3}]}/>
                <Text style={styles.title}>Bienvenue Lulu</Text>
            </View>
            <View style={styles.avatar}>
                {(image && imgFetched) && <Image source={{uri: image}} style={{
                    width: 100,
                    height: 100,
                    marginHorizontal: 10,
                    borderRadius: 100,
                    borderColor: "#f14688",
                    borderWidth: 2
                }}/>}
                {!image && <Image style={{width: 100, height: 100, marginHorizontal: 10}} source={defaultAvatar}/>}
                <CustomButton
                    type={'SECONDARY'}
                    text="Télécharge ton avatar"
                    onPress={pickImage}/>
            </View>
            <View style={styles.container}>

                <CustomInput
                    placeholder='Ton prénom'
                    style={styles.input}
                    value={''}

                />
                <CustomInput
                    placeholder='Ton nom de famille'
                    style={styles.input}
                    value={''}

                />
                <CustomInput
                    placeholder='Ton email'
                    style={styles.input}
                    value={''}

                />
                <CustomInput
                    placeholder='Ton n° de téléphone'
                    style={styles.input}
                    value={''}

                />
                <View style={styles.row}>
                    <View style={styles.box}>
                        <FontAwesome name="birthday-cake" size={24} color="black" />
                        <CustomInput placeholder={'Age'} type={'Secondary'} />
                    </View>
                    <View style={styles.box}>
                        <FontAwesome5 name="weight" size={24} color="black" />
                        <CustomInput placeholder={'Poids'} type={'Secondary'} />
                    </View>
                    <View style={styles.box}>
                        <Foundation name="target" size={24} color="black" />
                        <CustomInput placeholder={'Ojectif'} type={'Secondary'} />
                    </View>
                    <View style={styles.box}>
                        <Ionicons name="fitness-sharp" size={24} color="black" />
                        <CustomInput placeholder={'IMC'} type={'Secondary'} />
                    </View>
                </View>
                <CustomButton type={'PRIMARY'} fgColor={'#FFF'} text={'Sauvegarder'} />


            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    avatar: {
        flex: 1,
        alignItems: "center",
        marginVertical: 2,
        marginHorizontal: 2,
    },
    inputsContainer: {
        flex: 1,

    },
    logo: {
        width: '100%',
        maxHeight: 200,
        marginBottom: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 3,
    },
    text: {
        color: 'gray',
        marginHorizontal: 10,
    },
    link: {
        color: '#f14688',
    },
    box: {
        width: 90,
        height: 80,
        alignItems: "center",

    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 10,
    }
    })


export default ProfileScreen;
