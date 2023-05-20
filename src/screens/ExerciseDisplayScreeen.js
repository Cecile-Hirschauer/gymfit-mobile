import React from 'react';
import Timer from "../components/Timer";
import {View, StyleSheet, Dimensions} from "react-native";
import ExerciseItem from "../components/ExerciseItem";
import {exercises} from "../utils/exercises/exercises";

const screen = Dimensions.get('screen')

const ExerciseDisplay = ({route}) => {
    const exerciseId = route.params.id;

    const selectedExercise = exercises.find(
        (exercise) => exercise.id === exerciseId
    )
    return (
        <View style={styles.container}>
            <View style={styles.exerciseContainer}>
                <ExerciseItem
                    imageUrl={selectedExercise.image}
                    name={selectedExercise.name}
                    description={selectedExercise.description}
                    movement={selectedExercise.movement}
                    repeat={selectedExercise.repeat}
                    recuperation={selectedExercise.recuperation}
                    body_part={selectedExercise.body_part}
                    infos={selectedExercise.body_part}
                />
            </View>
            <View style={styles.timerContainer}>
                <Timer />
            </View>
        </View>
    );
};

export default ExerciseDisplay;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    exerciseContainer: {
        height: screen.height / 1.5
    },
    timerContainer: {
        height: screen.height / 2,
        paddingBottom: 100
    }
})
