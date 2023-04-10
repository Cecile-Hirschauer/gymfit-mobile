import { View } from 'react-native'
import React from 'react'
import CustomButton from "./CustomButton";
const SocialSignInButtons = () => {

const onSignWithGoogle = () => {
    console.warn('Sign in with Google')
      }
      
    return (
        <>
            <CustomButton 
            text={'Se connecter avec Google'} 
            onPress={onSignWithGoogle}
            bgColor={'#FAE9EA'}
            fgColor={'#DD4D44'}
            />
        </>
  )
}

export default SocialSignInButtons