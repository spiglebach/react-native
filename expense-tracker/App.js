import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RecentExpensesScreen from './screens/RecentExpenses';
import AllExpensesScreen from './screens/AllExpenses';
import { NavigationContainer } from '@react-navigation/native'
import ManageExpenseScreen from './screens/ManageExpense';
import { GlobalStyles } from './constants/styles';
import { Ionicons } from '@expo/vector-icons'
import IconButton from './components/ui/IconButton';
import ExpensesContextProvider from './store/context/expenses-context';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import AuthContextProvider, { AuthContext } from './store/context/auth-context';
import { useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';

const BottomTabs = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

function AuthStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: GlobalStyles.colors.headerBackground
                },
                tabBarStyle: {
                    backgroundColor: GlobalStyles.colors.headerBackground
                },
                tabBarActiveTintColor: GlobalStyles.colors.activeTabColor,
                tabBarInactiveTintColor: GlobalStyles.colors.inactiveTabColor,
                headerTintColor: GlobalStyles.colors.headerTintColor
            }}>
            <Stack.Screen
                name='Login'
                component={LoginScreen}
                options={{
                    title: 'Login'
                }}/>
            <Stack.Screen
                name='SignUp'
                component={SignupScreen}
                options={{
                    title: 'Sign Up'
                }}/>
        </Stack.Navigator>
    )
}

function ViewExpensesNavigator() {
    const {logout} = useContext(AuthContext)
    return (
        <BottomTabs.Navigator
            screenOptions={({navigation}) => ({
                headerRight: ({tintColor}) => <IconButton icon="add" size={24} color={tintColor} onPress={() => navigation.navigate('ManageExpense')}/>,
                headerLeft: () => <IconButton icon="exit" size={24} color='maroon' onPress={logout}/>,
                headerStyle: {
                    backgroundColor: GlobalStyles.colors.headerBackground
                },
                tabBarStyle: {
                    backgroundColor: GlobalStyles.colors.headerBackground
                },
                tabBarActiveTintColor: GlobalStyles.colors.activeTabColor,
                tabBarInactiveTintColor: GlobalStyles.colors.inactiveTabColor,
                headerTintColor: GlobalStyles.colors.headerTintColor
            })}>
            <BottomTabs.Screen
                name='RecentExpenses'
                component={RecentExpensesScreen}
                options={{
                    title: 'Recent Expenses',
                    tabBarIcon: ({color, size}) => <Ionicons name='hourglass' size={size} color={color} />
                }}
            />
            <BottomTabs.Screen
                name='AllExpenses'
                component={AllExpensesScreen}
                options={{
                    title: 'All Expenses',
                    tabBarIcon: ({color, size}) => <Ionicons name='calendar' size={size} color={color} />
                }}
            />
        </BottomTabs.Navigator>
    )
}

function AuthenticatedStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: GlobalStyles.colors.headerBackground
            },
            headerTintColor: GlobalStyles.colors.headerTintColor
        }}>
            <Stack.Screen
                name='ViewExpenses'
                component={ViewExpensesNavigator}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='ManageExpense'
                component={ManageExpenseScreen} 
                options={{
                    presentation: 'modal'
                }}
            />
        </Stack.Navigator>
    )
}

function Navigation() {
    const {isAuthenticated} = useContext(AuthContext)

    let activeNavigationStack
    if (isAuthenticated) {
        activeNavigationStack = <AuthenticatedStack />
    } else {
        activeNavigationStack = <AuthStack />
    }

    return (
        <NavigationContainer>
            {activeNavigationStack}
        </NavigationContainer>
    )
}

function Root() {
    const [isTryingToLogin, setIsTryingToLogin] = useState(true)
    const {authenticate} = useContext(AuthContext)
    useEffect(() => {
        async function fetchToken() {
            const storedToken = await AsyncStorage.getItem('token')
            console.log(storedToken)
            if (storedToken) {
                authenticate(storedToken)
            }
            setIsTryingToLogin(false)
        } 
        fetchToken()
    }, [])

    if (isTryingToLogin) {
        return <AppLoading />
    }
    return <Navigation />
}

export default function App() {
    return (
        <>
        <StatusBar style="light" />
        <AuthContextProvider>
        <ExpensesContextProvider>
            <Root />
        </ExpensesContextProvider>
        </AuthContextProvider>
        </>
  );
}
