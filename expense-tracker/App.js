import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RecentExpensesScreen from './screens/RecentExpenses';
import AllExpensesScreen from './screens/AllExpenses';
import { NavigationContainer } from '@react-navigation/native'
import ManageExpenseScreen from './screens/ManageExpense';
import { Button } from 'react-native';

const BottomTabs = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

function ViewExpensesNavigator({navigation}) {
    function handleNavigation() {
        navigation.navigate('ManageExpense')
    }
    const navButton = <Button title='+' onPress={handleNavigation} />

    return (
        <BottomTabs.Navigator
            screenOptions={{
                headerRight: () => navButton
            }}>
            <BottomTabs.Screen name='RecentExpenses' component={RecentExpensesScreen} />
            <BottomTabs.Screen name='AllExpenses' component={AllExpensesScreen} />
        </BottomTabs.Navigator>
    )
}

export default function App() {
    return (
        <>
        <StatusBar style="auto" />
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='ViewExpenses'
                    component={ViewExpensesNavigator}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen name='ManageExpense' component={ManageExpenseScreen} />
            </Stack.Navigator>
        </NavigationContainer>
        </>
  );
}
