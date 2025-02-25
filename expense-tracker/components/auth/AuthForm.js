import { useState } from "react"
import { View } from "react-native"
import Input from '../ManageExpense/Input'
import Button from "../ui/Button"

function AuthForm({isLogin, onSubmit, credentialsInvalid}) {
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredPassword, setEnteredPassword] = useState('')
    const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('')

    const {
        username: usernameIsInvalid,
        password: passwordIsInvalid,
        confirmPassword: confirmPasswordIsInvalid
    } = credentialsInvalid

    function updateInputValueHandler(inputType, enteredValue) {
        switch (inputType) {
            case 'username':
                setEnteredUsername(enteredValue)
                break
            case 'password':
                setEnteredPassword(enteredValue)
                break
            case 'confirmPassword':
                setEnteredConfirmPassword(enteredValue)
                break
        }
    }

    function submitHandler() {
        onSubmit({
            username: enteredUsername,
            password: enteredPassword,
            confirmPassword: enteredConfirmPassword
        })
    }

    return (
        <View>
            <Input
                label="Username"
                invalid={usernameIsInvalid}
                textInputProps={{
                    autoCapitalize: 'none',
                    onChangeText: updateInputValueHandler.bind(this, 'username'),
                    value: enteredUsername
            }} />
            <Input
                label="Password"
                secure
                invalid={passwordIsInvalid}
                textInputProps={{
                    autoCapitalize: 'none',
                    onChangeText: updateInputValueHandler.bind(this, 'password'),
                    value: enteredPassword,
                    secureTextEntry: true
            }} />
            {!isLogin && (
                <Input
                    label="Confirm Password"
                    invalid={confirmPasswordIsInvalid}
                    textInputProps={{
                        autoCapitalize: 'none',
                        onChangeText: updateInputValueHandler.bind(this, 'confirmPassword'),
                        value: enteredConfirmPassword,
                        secureTextEntry: true
                }} />
            )}
            <View>
                <Button onPress={submitHandler}>
                    {isLogin ? 'Log In' : 'Sign Up'}
                </Button>
            </View>
        </View>
    )
}

export default AuthForm