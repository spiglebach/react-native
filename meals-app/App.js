import { StatusBar } from 'expo-status-bar';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <>
        <StatusBar style='dark'/>
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: 'maroon'
                },
                headerTintColor: 'silver',
                contentStyle: {
                    backgroundColor: 'brown'
                }
            }}>
                <Stack.Screen
                    name="MealCategories"
                    component={CategoriesScreen}
                    options={{
                        title: 'Categories',
                    }}
                    />
                <Stack.Screen
                    name="MealsOverview"
                    component={MealsOverviewScreen}
                    />
            </Stack.Navigator>
        </NavigationContainer>
        </>
    )
}

