import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import WorkoutScreen from "../screens/WorkoutScreen";
import Profile from "../screens/Profile";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ConfirmEmailScreen from "../screens/ConfirmEmailScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import NewPasswordScreen from "../screens/NewPasswordScreen";

import {GlobalStyles} from "../constants/styles";
import {FontAwesome, MaterialIcons} from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

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
                component={Profile}
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


            <BottomTabs.Screen
                name={'SignInScreen'}
                component={SignInScreen}
                options={{
                    title: 'Logout',
                    tabBarLabel: 'Se déconnecter',
                    tabBarIcon: ({color, size}) => <MaterialIcons name="logout" size={size} color={color} />
                }}
            />
        </BottomTabs.Navigator>
    )
}

export default function Navigation() {
    return (
        <>
            <StatusBar style="auto"/>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen name="SignIn" component={SignInScreen} />
                    <Stack.Screen name="SignUp" component={SignUpScreen} />
                    <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
                    <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
                    <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
                    <Stack.Screen name={'Home'} component={TabsMenu}
                                  options={{headerShown: false}}/>

                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}


