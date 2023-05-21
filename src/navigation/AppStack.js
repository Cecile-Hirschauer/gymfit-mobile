import TabNavigator from "./TabNavigator";
import ProfileScreen from "../screens/ProfileScreen";
import ExercisesListScreen from "../screens/ExercisesListScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ExerciseDisplay from "../screens/ExerciseDisplayScreeen";
const Stack = createNativeStackNavigator();


export default function AppStack() {
    return (
        <Stack.Navigator initialRouteName={'Home'} screenOptions={{

            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerStyle: {
                backgroundColor: '#E83283'
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center'
        }} >
            <Stack.Screen name="HomePage" component={TabNavigator} options={{
                title: "GYMFIT",


            }} />
            <Stack.Screen name="Profile" component={ProfileScreen} options={{
                headerShown: false
            }} />
            <Stack.Screen name="ExrecisesList" component={ExercisesListScreen} />
            <Stack.Screen
                name={"Exercice"}
                component={ExerciseDisplay}
                options={({route}) => ({title: route.params.name}) }
            />
        </Stack.Navigator>
    );
}