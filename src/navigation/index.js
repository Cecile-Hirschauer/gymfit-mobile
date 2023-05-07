import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import WorkoutScreen from "../screens/WorkoutScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ConfirmEmailScreen from "../screens/ConfirmEmailScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import NewPasswordScreen from "../screens/NewPasswordScreen";


import {AuthContext} from "../context/AuthContext";
import {useContext} from "react";
import {View, ActivityIndicator} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const AuthStack = createStackNavigator();

function AuthNavigator() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="SignIn" component={SignInScreen} />
            <AuthStack.Screen name="SignUp" component={SignUpScreen} />
            <AuthStack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
            <AuthStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
            <AuthStack.Screen name="NewPassword" component={NewPasswordScreen} />
        </AuthStack.Navigator>
    );
}

const MainStack = createStackNavigator();

function MainNavigator() {
    return (
        <MainStack.Navigator>
            <MainStack.Screen name="Home" component={HomeScreen} />
            <MainStack.Screen name="Workout" component={WorkoutScreen} />
            <MainStack.Screen name="Profile" component={ProfileScreen} />
        </MainStack.Navigator>
    );
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
            {userToken ? <MainNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    );
}
