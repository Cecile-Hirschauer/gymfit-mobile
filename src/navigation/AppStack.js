import TabNavigator from "./TabNavigator";
import ProfileScreen from "../screens/ProfileScreen";
import WorkoutScreen from "../screens/WorkoutScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();


export default function AppStack() {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Home" component={TabNavigator} options={{
                title: "GYMFIT",
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerStyle: {
                    backgroundColor: '#E83283'
                },
                headerTintColor: '#fff',
                headerTitleAlign: 'center'

            }} />
            <Stack.Screen name="Profile" component={ProfileScreen} options={{
                headerShown: false
            }} />
            <Stack.Screen name="Workout" component={WorkoutScreen} />
        </Stack.Navigator>
    );
}