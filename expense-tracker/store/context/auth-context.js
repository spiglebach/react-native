import axios from "axios";
import { createContext, useState } from "react";

export const AuthContext = createContext({
    token: '',
    isAuthenticated: false,
    authenticate: (token) => {},
    logout: () => {}
})

function AuthContextProvider({children}) {
    const [authToken, setAuthToken] = useState()

    function authenticate(token) {
        setAuthToken(token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }

    function logout() {
        setAuthToken(null)
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