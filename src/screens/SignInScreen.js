import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native'
import React, {useContext, useState} from 'react'
import {useNavigation} from "@react-navigation/native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import SocialSignInButtons from "../components/SocialSignInButtons";
import logo from '../assets/imgs/logo.png'
import {AuthContext} from "../context/AuthContext";

function SignInScreen() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const {height} = useWindowDimensions()
    const navigation = useNavigation()

    const {login} = useContext(AuthContext);


    const onSignInPress = () => {
        navigation.navigate('Home');
    }

    const onForgotPasswordPress = () => {
        navigation.navigate('ForgotPassword');
    }

    const onSignUp = () => {
        navigation.navigate('SignUp');
    }

    return (
        <ScrollView showsHorizontalScrollIndicator={false}>
            <View style={styles.container}>
                <Image source={logo} style={[styles.logo, {height: height * 0.4}]}/>
                <CustomInput
                    placeholder={"Email"}
                    value={email}
                    setValue={setEmail}
                />
                <CustomInput
                    placeholder={"Mot de passe"}
                    value={password}
                    setValue={setPassword}
                    secureTextEntry

                />
                <CustomButton
                    text={'Se connecter'}
                    onPress={() => {login()}}
                    type={'PRIMARY'}
                />
                <CustomButton
                    text={'Mot de passe oublié'}
                    onPress={onForgotPasswordPress}
                    type={'TERTIARY'}
                />
                <SocialSignInButtons/>
                <CustomButton
                    text={'Vous n\'avez pas de compte ? Inscrivez-vous'}
                    onPress={onSignUp}
                />
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    logo: {
        width: '100%',
        maxHeight: 300,
        marginBottom: 20,
    },
    container: {
        alignItems: 'center',
    }

})


export default SignInScreen