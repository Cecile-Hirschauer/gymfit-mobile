import { View, Text, image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native'
import React, {useState} from 'react'
import logo from '../assets/imgs/logo.png'
import { useNavigation } from '@react-navigation/native'
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

function ForgotPasswordScreen() {
  const [username, setUsername] = useState('') 
  
  const {height} = useWindowDimensions()

  const navigation = useNavigation()

  const onSendPress = () => {
    navigation.navigate('NewPassword')
  }

  const OnSigninPress = () => {
    navigation.navigate('SignIn')
  }

 
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
    <View style={styles.container}>
      <image source={logo} style={[styles.logo, {height: height*0.3}]} />
      <Text style={styles.title}>
        Réinitialiser votre mot de passe
      </Text>
      <CustomInput
        placeholder={"Votre nom d'utilisateur"}
        value={username}
        setValue={setUsername}
        
      />
      
      <CustomButton 
      text={'Envoyer'} 
      onPress={onSendPress}
      type={'PRIMARY'}
      bgColor={'#FF914D'}
      />
      <CustomButton 
      text={'Retour à la connexion'} 
      onPress={OnSigninPress}
      type={'TERCIARY'}
      fgColor={'gray'}
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
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 5,
  },
  text: {
    color: 'gray',
    marginHorizontal: 10,
  },
  link: {
    color: '#f14688',
  }

})


export default ForgotPasswordScreen