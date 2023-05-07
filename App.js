import {StatusBar} from 'expo-status-bar';
import Navigation from "./src/navigation";
import { AuthProvider} from "./src/context/AuthContext";

export default function App() {
    return (
        <AuthProvider>
            <StatusBar style="auto"/>
            <Navigation />
        </AuthProvider>
    );
}


