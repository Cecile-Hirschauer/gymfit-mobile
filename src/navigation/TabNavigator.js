import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from "../screens/ProfileScreen";
import ExercisesListScreen from "../screens/ExercisesListScreen";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {FontAwesome} from "@expo/vector-icons";
import {GlobalStyles} from "../constants/styles";

const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <BottomTabs.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
                tabBarActiveTintColor: GlobalStyles.colors.accent500,
                tabBarInactiveTintColor: '#fff',
                headerShown: false
            }}>
            <BottomTabs.Screen
                name={'HomePage'}
                component={HomeScreen}
                options={{
                    title: 'Accueil',
                    tabBarLabel: 'Accueil',
                    tabBarIcon: ({color, size}) => <MaterialIcons name="home" size={size} color={color} />

                }}
            />
            <BottomTabs.Screen
                name={'Profile'}
                component={ProfileScreen}
                options={{
                    title: 'Profil',
                    tabBarLabel: 'Profil',
                    tabBarIcon: ({color, size}) => <FontAwesome name="user" size={size} color={color}/>

                }}
            />
            <BottomTabs.Screen
                name={'Workout'}
                component={ExercisesListScreen}
                options={{
                    title: 'Workouts',
                    tabBarLabel: 'Exercices',
                    tabBarIcon: ({color, size}) => <MaterialIcons name="fitness-center" size={size} color={color} />
                }}
            />
        </BottomTabs.Navigator>
    );
};

const getTabBarVisibility = route => {
    // console.log(route);
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
    // console.log(routeName);

    if( routeName == 'WorkoutDetails' ) {
        return 'none';
    }
    return 'flex';
};

export default TabNavigator;