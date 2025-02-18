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

const BottomTabs = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

function ViewExpensesNavigator() {
    return (
        <BottomTabs.Navigator
            screenOptions={({navigation}) => ({
                headerRight: ({tintColor}) => <IconButton icon="add" size={24} color={tintColor} onPress={() => navigation.navigate('ManageExpense')}/>,
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

export default function App() {
    return (
        <>
        <StatusBar style="light" />
        <NavigationContainer>
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
        </NavigationContainer>
        </>
  );
}
