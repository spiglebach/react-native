import { FlatList } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'
import { useNavigation } from '@react-navigation/native'

function CategoryItem({itemData}) {
    const navigation = useNavigation()
    function pressHandler() {
        navigation.navigate("MealsOverview")
    }

    return (
        <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            onPress={pressHandler}    
        />
    )
}

function CategoriesScreen({navigation}) {
    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={item => item.id}
            renderItem={itemData => <CategoryItem itemData={itemData} />}
            numColumns={2}
        />
    )
}


export default CategoriesScreen