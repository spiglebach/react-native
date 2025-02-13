import { StatusBar } from 'expo-status-bar';
import CategoriesScreen from './screens/CategoriesScreen';
import * as SystemUI from "expo-system-ui"

export default function App() {
    SystemUI.setBackgroundColorAsync("#aa2288")
    return (
        <>
        <StatusBar style='light'/>
        <CategoriesScreen />
        </>
    )
}

