import { View, Text, image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native'
import React, {useState} from 'react'
import logo from '../assets/imgs/logo.png'
import { useNavigation } from '@react-navigation/native'
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

function ConfirmEmailScreen() {
  const [code, setCode] = useState('') 
  
  const {height} = useWindowDimensions()

  const navigation = useNavigation()

  const onConfirmPress = () => {
    navigation.navigate('SignIn')
  }
  
  const onResendCodePress = () => {
    console.warn('Resend code')
  }

  const OnSigninPress = () => {
    navigation.navigate('SignIn')
  }

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
    <View style={styles.container}>
      <image source={logo} style={[styles.logo, {height: height*0.3}]} />
      <Text style={styles.title}>
        Confirmer votre adresse email
      </Text>
      <CustomInput
        placeholder={"Code de confirmation"}
        value={code}
        setValue={setCode}
        
      />
      <CustomButton 
      text={'Confirmer'} 
      onPress={onConfirmPress}
      type={'PRIMARY'}
      bgColor={'#FF914D'}
      />
      <CustomButton 
      text={'Renvoyer le code'} 
      onPress={onResendCodePress}
      type={'SECONDARY'}
      fgColor={'#FF914D'}
      bdColor={'#FF914D'}
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


export default ConfirmEmailScreen