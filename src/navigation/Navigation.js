import {NavigationContainer, useNavigation} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";


import {AuthContext} from "../context/AuthContext";
import {useContext, useEffect} from "react";
import {View, ActivityIndicator} from "react-native";

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ConfirmEmailScreen from "../screens/ConfirmEmailScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import SignInScreen from "../screens/SignInScreen";
import NewPasswordScreen from "../screens/NewPasswordScreen";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {FontAwesome} from "@expo/vector-icons";
import {GlobalStyles} from "../constants/styles";
import ExercisesListScreen from "../screens/ExercisesListScreen";
import ExerciseDisplayScreeen from "../screens/ExerciseDisplayScreeen";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();


function TabsMenu() {
    const { logout } = useContext(AuthContext);
    const navigation = useNavigation();  // Utilisez le hook useNavigation pour obtenir l'objet navigation

    return (
        <BottomTabs.Navigator  screenOptions={{
            tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
            tabBarActiveTintColor: GlobalStyles.colors.accent500,
            tabBarInactiveTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerStyle: {
                backgroundColor: '#E83283'
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            title: 'GymFit!'
        }}>
            <BottomTabs.Screen
                name={'HomePage'}
                component={HomeScreen}
                options={{
                    headerShown: false,
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
                name={'Exercises'}
                component={ExercisesListScreen}
                options={{
                    title: 'Exercices',
                    tabBarLabel: 'Exercices',
                    tabBarIcon: ({color, size}) => <MaterialIcons name="fitness-center" size={size} color={color} />
                }}
            />

            <BottomTabs.Screen
                name={'Logout'}
                component={View} // Passer un composant, mais il ne sera pas rendu.
                listeners={{
                    tabPress: async (e) => {
                        e.preventDefault(); // Cela empêche la navigation vers l'écran de déconnexion.
                        await logout();
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'SignIn' }]  // Redirige vers la page SignIn
                        });
                    }
                }}
                options={{
                    tabBarLabel: 'Déconnexion',
                    tabBarIcon: ({color, size}) => <MaterialIcons name="exit-to-app" size={size} color={color}/>
                }}
            />

        </BottomTabs.Navigator>
    )
}


export default function Navigation() {
    const {isLoading, userToken} = useContext(AuthContext);
    // const isLoggedIn = userToken !== null;
    const isLoggedIn = userToken !== null;

    useEffect(() => {
        console.log('User token changed:', userToken);  // Doit changer à null après la déconnexion
    }, [userToken]);


    if (isLoading) {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={isLoggedIn ? "Home" : "SignIn"}>
                {/* Auth screens */}
                <Stack.Screen name="SignIn" component={SignInScreen} options={{headerShown: false}} />
                <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown: false}} />
                <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen}  />
                <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}  />
                <Stack.Screen name="NewPassword" component={NewPasswordScreen}  />

                {/* App screens */}
                <Stack.Screen name="Home" component={TabsMenu} options={{headerShown: false}} />
                <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}} />
                <Stack.Screen name="Exercises" component={ExercisesListScreen} options={{headerShown: false}} />
                <Stack.Screen name="Exercice" component={ExerciseDisplayScreeen} options={{headerShown: false}} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}
