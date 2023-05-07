import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
    return (
        <View style={styles.container}>
            
            <TextInput 
            value={value}
            onChangeText={setValue}
            style={styles.input}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}   
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '90%',
        borderColor: '#cb6ce6',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginVertical: 15,
        },
    input: {}
})

export default CustomInput;
