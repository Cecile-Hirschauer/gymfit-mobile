import React, {useState} from 'react';
import {FlatList, Image, ScrollView, StyleSheet, Text, useWindowDimensions, View} from "react-native";
import logo from "../assets/imgs/logo.png";
import {exercises} from "../data/exercises";
import {body_part} from "../data/body_part";
import CustomButton from "../components/CustomButton";
import CustomFlatList from "../components/CustomFlatList";

export {body_part} from '../data/body_part';

function WorkoutScreen() {
    const {height} = useWindowDimensions();

    const [bodyPart, setBodyPart] = useState('Tous les exercices');

    const exercisesFiltered = exercises.filter(
        (item) => item.body_part = bodyPart
    )


    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Image source={logo} style={[styles.logo, {height: height * 0.3}]}/>
                <Text style={styles.title}>Exercices</Text>
            </View>
            <View style={styles.bodyPartsContainer}>
                <CustomButton
                    text={'Tous les exercices'}

                    type={'PRIMARY'}
                    bgColor={'#ff5757'}/>
                <CustomButton
                    text={'Séance Full Body'}
                    type={'PRIMARY'}
                    bgColor={'#cb6ce6'}
                    onPress={() => setBodyPart('Séance Full Body')}
                />
                <CustomButton
                    text={'Séance Bas du Corps'}
                    type={'PRIMARY'}
                    bgColor={'#8F52FC'}
                    onPress={() => setBodyPart('Séance Bas du Corps')}
                />
                <CustomButton
                    text={'Séance Bas du Corps'}
                    type={'PRIMARY'}
                    bgColor={'#5e17eb'}
                    onPress={() => setBodyPart('Séance Haut du Corps')}

                />
            </View>
            <CustomFlatList/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: "center",
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
    },
    bodyPartsContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
        marginTop: 30,
        borderRadius: 10

    },
    bodyPart: {
        paddingVertical: 10,
        color: "#fff",
        fontWeight: "bold",
        fontSize: 20,
        textTransform: 'uppercase'
    }

})

export default WorkoutScreen;