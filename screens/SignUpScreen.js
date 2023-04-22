import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native'
import React, {useState} from 'react'
import logo from '../assets/imgs/logo.png'
import { useNavigation } from '@react-navigation/native'
import CustomButton from "../components/CustomButton";
import SocialSignInButtons from "../components/SocialSignInButtons";
import CustomInput from "../components/CustomInput";

function SignUpScreen() {
  const [username, setUsername] = useState('') 
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('') 
  const [confirmPassword, setConfirmPassword] = useState('')

  const {height} = useWindowDimensions()

  const navigation = useNavigation()

  const onRegisterPressed = () => {
    navigation.navigate('ConfirmEmail')
  }

  const onTermsOfUsePressed = () => {
    console.warn('Terms of use')
  }

  const onPrivacyPressed = () => {
    console.warn('Privacy')
  }

  const onSignInPress = () => {
    navigation.navigate('SignIn')
  }

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
    <View style={styles.container}>
      <Image source={logo} style={[styles.logo, {height: height*0.3}]} />
      <Text style={styles.title}>
        Créer un compte
      </Text>
      <CustomInput 
        placeholder={"Nom d'utilisateur"} 
        value={username}
        setValue={setUsername}
            />   
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
      <CustomInput 
      placeholder={"Confirmer le mot de passe"}
      value={confirmPassword}
      setValue={setConfirmPassword}
      secureTextEntry
      />
      <Text style={styles.text}>
        En créant un compte, vous acceptez nos  
        <Text style={styles.link} onPress={onTermsOfUsePressed}> conditions générales d'utilisation</Text> et notre  
        <Text style={styles.link} onPress={onPrivacyPressed}> politique de confidentialité</Text>.
      </Text>
      <CustomButton 
      text={'Créer un compte'} 
      onPress={onRegisterPressed}
      type={'PRIMARY'}
      />
      <SocialSignInButtons />
      <CustomButton
      text={'Vous avez déjà un compte? Se connecter'} 
      onPress={onSignInPress}
      />
    
    </View>
    </ScrollView>
  )
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
  }

})


export default SignUpScreen