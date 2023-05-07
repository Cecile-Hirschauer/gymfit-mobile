import { Text, StyleSheet, Pressable, View } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text, type, bgColor, fgColor, bdColor}) => {
    return (
        <Pressable
        onPress={onPress}
        style={[
            styles.container, 
            styles[`container_${type}`],
            bgColor? {backgroundColor: bgColor} : {},
            bdColor ? {borderColor: bdColor} : {}
        ]}
        > 
        <Text style={[
            styles.text, 
            styles[`text_${type}`],
            fgColor? {color: fgColor} : {}
            ]}>
            {text}
        </Text>

        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        padding: 15,
        marginVertical: 10,
        alignItems: 'center',
        borderRadius: 5,
    },
    container_PRIMARY: {
        backgroundColor: '#8F52FC',
    },
    container_SECONDARY: {
        borderColor: '#8F52FC',
        borderWidth: 2,
    },
    container_TERTIARY: {},
    text: {
        fontWeight: 'bold',
    
    },
    text_PRIMARY: {
        color: '#fff',
        fontSize: 20,
        textTransform: 'uppercase',
    },
    text_SECONDARY: {
        color: '#8F52FC',
        fontSize: 20,
    },
    text_TERTIARY: {
        color: '#8F52FC',
    },
})

export default CustomButton
