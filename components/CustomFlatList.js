import React from 'react';
import {FlatList, Image, View, Text, Pressable} from "react-native";
import {exercises} from "../data/exercises";

const CustomFlatList = ({category}) => {

    const renderItem = (e) => (
        <Pressable style={styles.flatList}>
            <Image source={{uri: e.item.image}} style={styles.exercise_img}/>
           <View style={styles.text_container}>
               <Text style={styles.text_name}>
                   {e.item.name}
               </Text>
               <Text style={styles.text_description}>
                   {e.item.description}
               </Text>
           </View>
        </Pressable>
    )

    return (
        <View style={styles.container}>
            <FlatList data={exercises} renderItem={renderItem}/>


        </View>
    );
};

const styles = {
    container: {
        display: 'flex',
        width: '100%',
        padding: 15,
        marginVertical: 10,
        alignItems: 'center',
        borderRadius: 5,
    },
    flatList: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: 400,
        marginVertical: 3,
        padding: 5
    },
    exercise_img: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    text_name: {
        fontSize: 20,
        color: '#221c30',
        fontWeight: 'bold',
    },
    text_description: {
        fontSize: 16,
        color: '#39324a'
    },
    text_container: {
        justifyContent: 'center',
        marginLeft: 10
    }
}

export default CustomFlatList;
