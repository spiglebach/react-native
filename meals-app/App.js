import { StatusBar } from 'expo-status-bar';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import { SafeAreaView } from 'react-native';
import FavouritesScreen from './screens/FavouritesScreen';
import { Ionicons } from '@expo/vector-icons'
import FaviouritesContextProvider from './store/context/favourites-context';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

function DrawerNavigator() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: 'maroon'
                },
                headerTintColor: 'silver',
                sceneStyle: {
                    backgroundColor: 'brown'
                },
                drawerContentStyle: {
                    backgroundColor: 'silver'
                },
                drawerActiveTintColor: 'maroon'
        }}>
            <Drawer.Screen
                name="Categories"
                component={CategoriesScreen}
                options={{
                    title: "All Categories",
                    drawerIcon: ({color, size}) => <Ionicons name="restaurant" color={color} size={size} />
                }}
            />
            <Drawer.Screen
                name="Favourites"
                component={FavouritesScreen}
                options={{
                    drawerIcon: ({color, size}) => <Ionicons name="heart" color={color} size={size} />
                }}
            />
        </Drawer.Navigator>
    )
}

export default function App() {
    return (
        <>
        <StatusBar style='light'/>
        <SafeAreaView style={{flex: 1, backgroundColor: 'maroon'}}>
        <Provider store={store}>
        <FaviouritesContextProvider>
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
                    component={DrawerNavigator}
                    options={{
                        title: 'All Categories',
                        headerShown: false
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
        </FaviouritesContextProvider>
        </Provider>
        </SafeAreaView>
        </>
    )
}

