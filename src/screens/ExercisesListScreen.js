import React from 'react';
import {
    StyleSheet,

    View
} from "react-native";
import CustomExercisesList from "../components/CustomExercisesList";
import { ScrollView } from 'react-native-virtualized-view'


function ExercisesListScreen() {


    return (
        <ScrollView showsVerticalScrollIndicator={true} nestedScrollEnabled={true}>
            <View style={styles.container}>
                <CustomExercisesList/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    logo: {
        width: '100%',
        maxHeight: 300,
    },



})

export default ExercisesListScreen;