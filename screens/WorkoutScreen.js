import React from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    useWindowDimensions,
    View
} from "react-native";
import logo from "../assets/imgs/logo.png";
import CustomFlatList from "../components/CustomFlatList";


function WorkoutScreen() {
    const {height} = useWindowDimensions();


    return (
        <ScrollView showsVerticalScrollIndicator={true} nestedScrollEnabled={true}>
            <View style={styles.container}>
                <Image source={logo} style={[styles.logo, {height: height * 0.3}]}/>

                <CustomFlatList/>
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

export default WorkoutScreen;