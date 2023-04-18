import React from 'react';
import {image, ScrollView, StyleSheet, Text, useWindowDimensions, View} from "react-native";
import logo from "../assets/imgs/logo.png";

function Schedule() {
    const {height} = useWindowDimensions();
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <image source={logo} style={[styles.logo, {height: height*0.3}]} />
                <Text style={styles.title}>Planning</Text>
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

export default Schedule;