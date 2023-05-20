import {Pressable, StyleSheet, Text, View, Image, ScrollView} from 'react-native'
import React, {useState} from 'react'
import {exercises} from "../utils/exercises/exercises";
import {GlobalStyles} from "../constants/styles";

export default function ExerciseItem({name, imageUrl, description, movement, repeat, recuperation, body_part, infos}) {

    return (
        <ScrollView style={styles.container}>

            <View style={styles.titleContainer}>
                <Text style={styles.title}>{name}</Text>
                <Image source={{uri: imageUrl}} style={styles.image} />
                <Text style={styles.subTitle}>{description}</Text>
            </View>
            <View style={styles.exerciseContainer}>
                <View style={styles.exercise}>
                    <Text>Mouvements</Text>
                    <Text>{movement} Secondes</Text>
                </View>
                <View style={styles.exercise}>
                    <Text>Répétitions</Text>
                    <Text>{repeat} séries</Text>
                </View>
                <View style={styles.exercise}>
                    <Text>Récupération</Text>
                    <Text>{recuperation} secondes</Text>
                </View>
                <View style={styles.exercise}>
                    <Text>Objectif</Text>
                    <Text>{body_part}</Text>
                </View>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infos}>{infos}</Text>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 120
    },
    image: {
        width: '50%',
        height: 100,
    },
    titleContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
        color: GlobalStyles.colors.primary400
    },
    subTitle: {
        textAlign: "center",
        color: GlobalStyles.colors.gray700,
        fontSize: 18
    },
    exerciseContainer: {
        flex: 1,
        marginTop: 10
    },
    exercise: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        marginVertical: 3
    },
    infoContainer: {
        flex: 1,
        width: '100%',
        marginTop: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    infos: {
        textAlign: "center",
        fontWeight: "bold",
        fontStyle: "italic",
        color: GlobalStyles.colors.gray500
    },
})