import { StatusBar } from 'expo-status-bar';
import CategoriesScreen from './screens/CategoriesScreen';
import * as SystemUI from "expo-system-ui"
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import { CATEGORIES } from './data/dummy-data';

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
                    options={({route, navigation}) => {
                        const categoryId = route.params.categoryId
                        const category = CATEGORIES.find(category => category.id === categoryId)
                        return {
                            title: category.title
                        }
                    }}
                    />
            </Stack.Navigator>
        </NavigationContainer>
        </>
    )
}

