import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native'
import React, {useContext, useState} from 'react'
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import SocialSignInButtons from "../components/SocialSignInButtons";
import logo from '../assets/imgs/logo.png'
import {AuthContext} from "../context/AuthContext";
import Toast from "react-native-toast-message";

function SignInScreen({navigation}) {
    const { login, error } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const {height} = useWindowDimensions()



    const onSignInPress = async () => {
        try {
            await login(email, password);
            navigation.navigate('Home', {screen: 'HomePage'});
        } catch (error) {
            if (error.response && error.response.status === 404){
                Toast.show({
                    type: 'error',
                    position: 'bottom',
                    text1: 'Erreur de connexion',
                    text2: "L'URL de connexion n'a pas été trouvée. Veuillez vérifier votre configuration.",
                    visibilityTime: 4000,
                    autoHide: true,
                });
            } else {
                console.log('error', error);
                console.log('error message', error.message);
                console.log('error response', error.response);
                console.log('error request', error.request);
                setErrorMessage('Une erreur est survenue lors de la connexion. Veuillez réessayer.');  // Mettre à jour l'état d'erreur
            }

        };
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
                    onPress={onSignInPress}
                    type={'PRIMARY'}
                />
                {errorMessage && <Text>{errorMessage}</Text>}
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