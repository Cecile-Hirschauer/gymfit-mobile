import React, { createContext, useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = process.env.API_URL;

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);
    const [error, setError] = useState(null);  // Ajout d'un état pour les erreurs

    const api = axios.create({
        baseURL: `${API_URL}/api`,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*', // Ajoutez ici le header CORS
        },
    });

    const login = async (username, password) => {
        setIsLoading(true);

        try {
            const response = await api.post('/login_check',
                {
                username,
                password,
            });

            await AsyncStorage.setItem('@token', response.data.token);
            setUserToken(response.data.token);
        } catch (error) {
            console.log('error', error);
            console.log('error message', error.message);
            console.log('error response', error.response);
            console.log('error request', error.request);
            setError('Une erreur est survenue lors de la connexion. Veuillez réessayer.');  // Mettre à jour l'état d'erreur
        }

        setIsLoading(false);
    };

    const logout = async () => {
        setIsLoading(true);

        try {
            // Pour se déconnecter, vous devez probablement envoyer une requête à l'API
            // En supposant qu'il y a un endpoint '/logout' sur votre API, le code pourrait ressembler à cela :
            await api.post('/logout');
            await AsyncStorage.removeItem('@token');
            setUserToken(null);
        } catch (error) {
            // Gérer l'erreur
        }

        setIsLoading(false);
    };

    return (
        <AuthContext.Provider value={{ login, logout, isLoading, userToken, error }}>
            {children}
        </AuthContext.Provider>
    );
};
