import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Dimensions } from 'react-native';
import {GlobalStyles} from "../constants/styles";

const screen = Dimensions.get('window');

const formatNumber = number => `0${number}`.slice(-2);

const getRemaining = (time) => {
    const mins = Math.floor(time / 60);
    const secs = time - mins * 60;
    return { minutes: formatNumber(mins), seconds: formatNumber(secs) };
}

export default function Timer() {
    const [remainingSecs, setRemainingSecs] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const { minutes, seconds } = getRemaining(remainingSecs);

    const toggle = () => {
        setIsActive(!isActive);
    }

    const reset = () => {
        setRemainingSecs(0);
        setIsActive(false);
    }

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setRemainingSecs(remainingSecs => remainingSecs + 1);
            }, 1000);
        } else if (!isActive && remainingSecs !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, remainingSecs]);


    return (
        <View style={styles.container}>
            <Text style={styles.timerText}>{`${minutes}:${seconds}`}</Text>
            <View style={styles.btnContainer}>
                <TouchableOpacity onPress={toggle} style={styles.button}>
                    <Text style={styles.buttonText}>{isActive ? 'Pause' : 'Start'}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={reset} style={[styles.button, styles.buttonReset]}>
                    <Text style={[styles.buttonText, styles.buttonTextReset]}>Reset</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.primary700,
        justifyContent: "center",
        alignItems: "center"

    },
    btnContainer: {
        display: "flex",
        width: '100%',
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    button: {
        borderWidth: 4,
        borderColor: GlobalStyles.colors.primary100,
        width: screen.width / 4,
        height: screen.width / 4,
        borderRadius: screen.width / 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20
    },
    buttonText: {
        fontSize: 20,
        color: GlobalStyles.colors.primary100,
        fontWeight: 'bold'
    },
    timerText: {
        color: GlobalStyles.colors.primary100,
        fontSize: 32,
        marginBottom: 20
    },
    buttonReset: {
        borderColor: GlobalStyles.colors.primary100
    },
    buttonTextReset: {
        color: GlobalStyles.colors.primary100
    }
});