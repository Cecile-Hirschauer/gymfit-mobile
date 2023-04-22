import React, {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, useWindowDimensions, View} from "react-native";
import logo from "../assets/imgs/logo.png";
import exercices from '../data/data'

function WorkoutScreen() {
    const {height} = useWindowDimensions();
    const [data, setData] = useState([]);




    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Image source={logo} style={[styles.logo, {height: height*0.3}]} />
                <Text style={styles.title}>Exercises</Text>
                <View>
                    {exercices.map((exercise) => (
                        <Text>{exercise.name}</Text>
                    ))}
                </View>
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

export default WorkoutScreen;