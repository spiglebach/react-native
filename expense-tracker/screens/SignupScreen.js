import { useContext, useState } from "react"
import AuthContent from "../components/auth/AuthContent"
import { httpSignUp } from "../util/http"
import LoadingOverlay from "../components/ui/LoadingOverlay"
import { Alert } from "react-native"
import { AuthContext } from "../store/context/auth-context"

function SignupScreen() {
    const {authenticate} = useContext(AuthContext)
    const [isAuthenticating, setIsAuthenticating] = useState(false)
    async function signUpHandler({username, password}) {
        setIsAuthenticating(true)
        try {
            const response = await httpSignUp(username, password)
            const token = response.data
            authenticate(token)
        } catch (error) {
            console.error(error)
            Alert.alert('Signup failed!', 'Could not create user. Please check your input or try again later!')
            setIsAuthenticating(false)
        }
    }

    if (isAuthenticating) {
        return <LoadingOverlay />
    }

    return <AuthContent onAuthenticate={signUpHandler} />
}

export default SignupScreen