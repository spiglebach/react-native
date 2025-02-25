import {useState} from 'react'
import {Alert, View} from 'react-native'
import AuthForm from './AuthForm'
import Button from '../ui/Button'
import {useNavigation} from '@react-navigation/native'

function AuthContent({isLogin, onAuthenticate}) {
    const navigation = useNavigation()
    const [credentialsInvalid, setCredentialsInvalid] = useState({
        username: false,
        password: false,
        confirmPassword: false
    })

    function submitHandler(credentials) {
        let {username, password, confirmPassword} = credentials

        username = username.trim()
        password = password.trim()

        const usernameIsValid = username.length >= 3
        const passwordIsValid = password.length >= 6
        const passwordsAreEqual = password === confirmPassword

        if (!usernameIsValid
            || !passwordIsValid
            || (
                !isLogin && !passwordsAreEqual
            )
        ) {
            Alert.alert('Invalid input', 'Please check your entered credentials.')
            setCredentialsInvalid({
                username: !usernameIsValid,
                password: !passwordIsValid,
                confirmPassword: !passwordsAreEqual
            })
            return
        }
        onAuthenticate({username, password})
    }

    function switchAuthModeHandler() {
        if (isLogin) {
            navigation.replace('SignUp')
        } else {
            navigation.replace('Login')
        }
    }

    return (
        <View>
            <AuthForm
                isLogin={isLogin}
                onSubmit={submitHandler}
                credentialsInvalid={credentialsInvalid}
                />
            <View>
                <Button onPress={switchAuthModeHandler} mode='flat'>
                    {isLogin ? 'Create a new user' : 'Log in instead'}
                </Button>
            </View>
        </View>
    )
}

export default AuthContent