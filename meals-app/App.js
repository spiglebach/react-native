import { StatusBar } from 'expo-status-bar';
import CategoriesScreen from './screens/CategoriesScreen';
import * as SystemUI from "expo-system-ui"
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export default function App() {
    SystemUI.setBackgroundColorAsync("#aa2288")
    return (
        <>
        <StatusBar style='dark'/>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="MealCategories" component={CategoriesScreen} />
            </Stack.Navigator>
        </NavigationContainer>
        </>
    )
}

