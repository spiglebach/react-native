import { StyleSheet, Text, View } from "react-native"
import { MEALS } from "../data/dummy-data"

function MealsOverviewScreen({ navigation, route }) { // useRoute() hook can be used
    const categoryId = route.params.categoryId
    MEALS
    return (
        <View style={styles.container}>
            <Text>Meals Overview Screen - {categoryId}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})

export default MealsOverviewScreen