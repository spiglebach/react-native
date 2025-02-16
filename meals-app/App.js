import { StatusBar } from 'expo-status-bar';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import { SafeAreaView } from 'react-native';

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <>
        <StatusBar style='light'/>
        <SafeAreaView style={{flex: 1, backgroundColor: 'maroon'}}>
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
                <Stack.Screen
                    name="MealDetails"
                    component={MealDetailsScreen}
                    />
            </Stack.Navigator>
        </NavigationContainer>
        </SafeAreaView>
        </>
    )
}

