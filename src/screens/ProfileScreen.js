import React, {useContext, useEffect, useState} from 'react'
import { Image, ScrollView, StyleSheet, View} from "react-native";
import * as imagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-community/async-storage';
import defaultAvatar from '../assets/imgs/defaultProfil.jpeg';
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import {FontAwesome, FontAwesome5, Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import {AuthContext} from "../context/AuthContext";

const API_URL = process.env.API_URL;

function ProfileScreen() {

    const [image, setImage] = useState(null);
    const [imgFetched, setImgFetched] = useState(false);
    const [userDetails, setUserDetails] = useState({});
    const { userToken } = useContext(AuthContext);
    const [age, setAge] = useState(0);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [userSize, setSizeUser] = useState(0);
    const [userWeight, setUserWeight] = useState(0);
    const [imc, setIMC] = useState(0);

    let tokenPayload = jwtDecode(userToken);
    let memberId = tokenPayload.memberId;

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/members/${memberId}`);
                setUserDetails(response.data);
                console.log(response.data);
                setFirstname(response.data.firstName);
                setLastname(response.data.lastName);
                setEmail(response.data.email);
                setPhoneNumber(response.data.phoneNumber);
                setAge(response.data.userAge);
                setSizeUser(response.data.sizeUser);
                setUserWeight(response.data.weightUser);
            } catch (error) {
                console.error("Erreur lors de la récupération des détails de l'utilisateur: ", error);
            }
        };
        fetchUserDetails();
    }, [memberId]);

    const calculateIMC = (weight, size) => {
        const imc = weight / Math.pow(size / 100, 2);
        return imc.toFixed(2);
    }

    useEffect(() => {
        const IMC = calculateIMC(userWeight, userSize);
        setIMC(IMC);
    }, [userWeight, userSize]);
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
        setImage(image)
        getData()
    }, [image]);


    return (
        <ScrollView showsVerticalScrollIndicator={false}>

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
                    style={styles.input}
                    value={firstname}

                />
                <CustomInput
                    style={styles.input}
                    value={lastname}

                />
                <CustomInput
                    style={styles.input}
                    value={email}

                />
                <CustomInput
                    style={styles.input}
                    value={phoneNumber}

                />
                <View style={styles.row}>
                    <View style={styles.box}>
                        <FontAwesome name="birthday-cake" size={24} color="black" />
                        <CustomInput value={age ? age.toString() + ' ans': 0} type={'Secondary'}  />
                    </View>
                    <View style={styles.box}>
                        <MaterialCommunityIcons name="human-male-height" size={24} color="black" />
                        <CustomInput value={userSize ? userSize.toString() / 100 + ' m': 0} type={'Secondary'} />
                    </View>
                    <View style={styles.box}>
                        <FontAwesome5 name="weight" size={24} color="black" />
                        <CustomInput value={ userWeight ? userWeight.toString() + ' kg': 0 } type={'Secondary'} />
                    </View>
                    <View style={styles.box}>
                        <Ionicons name="fitness-sharp" size={24} color="black" />
                        <CustomInput value={imc ? imc : 0} type={'Secondary'} />
                    </View>
                </View>


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
        width: 80,
        height: 80,
        alignItems: "center",
        justifyContent: "center"
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 10,
    }
})


export default ProfileScreen;