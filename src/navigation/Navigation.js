import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";


import {AuthContext} from "../context/AuthContext";
import {useContext} from "react";
import {View, ActivityIndicator} from "react-native";

import HomeScreen from "../screens/HomeScreen";
import WorkoutScreen from "../screens/WorkoutScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ConfirmEmailScreen from "../screens/ConfirmEmailScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import SignInScreen from "../screens/SignInScreen";
import NewPasswordScreen from "../screens/NewPasswordScreen";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {FontAwesome} from "@expo/vector-icons";
import {GlobalStyles} from "../constants/styles";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();


function AuthStack() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
            <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
        </Stack.Navigator>
    );
}


function AppStack() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={TabsMenu} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Workout" component={WorkoutScreen} />
        </Stack.Navigator>
    );
}

function TabsMenu() {
    return (
        <BottomTabs.Navigator  screenOptions={{
            headerShown: false,
            tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
            tabBarActiveTintColor: GlobalStyles.colors.accent500,
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
                component={WorkoutScreen}
                options={{
                    title: 'Workouts',
                    tabBarLabel: 'Exercices',
                    tabBarIcon: ({color, size}) => <MaterialIcons name="fitness-center" size={size} color={color} />
                }}
            />



        </BottomTabs.Navigator>
    )
}

export default function Navigation() {
    const {isLoading, userToken} = useContext(AuthContext);

    if (isLoading) {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <NavigationContainer>
            {userToken ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    );
}
