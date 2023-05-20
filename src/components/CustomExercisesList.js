import React, {useState} from 'react';
import {FlatList, Image, View, Text, TouchableOpacity, Dimensions} from "react-native";
import {exercises} from "../utils/exercises/exercises";
import {listTab} from "../utils/listTab";
import {useNavigation} from "@react-navigation/native";



const CustomExercisesList = ({id}) => {
    const [status, setStatus] = useState('Tout');
    const [dataList, setDataList] = useState(exercises)

    const  navigation = useNavigation();

    const selectExerciseHandler = () => {
        navigation.navigate('DisplayExercise', {
            exerciseId: id,
        })
    }

    const setStatusFilter = (status) => {
        if (status !== 'Tout') {
            setDataList([
                ...exercises.filter(
                (e) => e.status === status)]
            )
        }else {
            setDataList(exercises)
        }
        setStatus(status)

    }
    const renderItem = (e) => (
        <TouchableOpacity
            key={e.item.id}
            style={styles.flatList}
            onPress={() => navigation.navigate('DisplayExercise', {
                id: e.item.id
            })}
        >
            <Image source={{uri: e.item.image}} style={styles.exercise_img}/>
           <View style={styles.text_container}>
               <Text style={styles.text_name}>
                   {e.item.name}
               </Text>
               <Text style={styles.text_description}>
                   {e.item.description}
               </Text>
           </View>
        </TouchableOpacity>
    )

    return (
        <View style={styles.container}>
            <View style={styles.listTabs}>
                {
                    listTab.map((item) => (
                        <TouchableOpacity
                            style={[styles.btnTab, status === item.status && styles.btnTabActive]}
                            onPress={() => setStatusFilter(item.status)}
                        >
                            <Text style={[styles.textTabs, status === item.status && styles.texTabActive]}>{item.status}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
            <FlatList data={dataList}
                      renderItem={renderItem}
                      keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

const styles = {
    container: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 10,
        justifyContent: 'center',
        borderRadius: 5,
    },
    flatList: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#fff',
        margin: 5,
        padding: 5,
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
    },

    listTabs: {
        flex: 1,
        padding: 2,
        flexDirection: 'row',
        alignSelf: 'center',
        marginVertical: 5
    },
    btnTab: {
        width: Dimensions.get('window').width / 4,
        flexDirection: 'row',
        justifyContent: 'center',

    },
    btnTabActive: {
        backgroundColor: '#ff914d',
    },
    textTabs: {
        fontSize: 10,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        padding: 5,
        justifyContent: 'center',
        color: '#39324a'
    },
    texTabActive: {
        color: '#fff'
    }

}

export default CustomExercisesList;
