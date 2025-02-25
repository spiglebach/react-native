import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from "axios";
import { createContext, useEffect, useLayoutEffect, useState } from "react";

export const AuthContext = createContext({
    token: '',
    isAuthenticated: false,
    authenticate: (token) => {},
    logout: () => {}
})

function AuthContextProvider({children}) {
    const [authToken, setAuthToken] = useState()

    useLayoutEffect(() => {
        async function fetchToken() {
            const storedToken = await AsyncStorage.getItem('token')
            console.log(storedToken)
            if (storedToken) {
                authenticate(storedToken)
            }
        } 
        fetchToken()
    }, [])

    function authenticate(token) {
        setAuthToken(token)
        AsyncStorage.setItem('token', token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }

    function logout() {
        setAuthToken(null)
        AsyncStorage.removeItem('token')
        axios.defaults.headers.common['Authorization'] = null
    }

    const value = {
        token: authToken,
        isAuthenticated: !!authToken,
        authenticate: authenticate,
        logout: logout
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContextProvider