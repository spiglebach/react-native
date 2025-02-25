import { useState } from "react"
import AuthContent from "../components/auth/AuthContent"
import { httpAuthenticate } from "../util/http"
import LoadingOverlay from "../components/ui/LoadingOverlay"
import { Alert } from "react-native"

function LoginScreen() {
    const [isAuthenticating, setIsAuthenticating] = useState(false)

    async function loginHandler({username, password}) {
        setIsAuthenticating(true)
        try {
            const response = await httpAuthenticate(username, password)
            console.log(response.data)
        } catch (error) {
            console.error(error)
            Alert.alert('Authentication failed!', 'Could not log you in. Please check your credentials or try again later!')
        }
        setIsAuthenticating(false)
    }

    if (isAuthenticating) {
        return <LoadingOverlay />
    }

    return <AuthContent isLogin onAuthenticate={loginHandler} />
}

export default LoginScreen