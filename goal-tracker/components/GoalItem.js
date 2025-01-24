import { StyleSheet, Text, View, Pressable } from "react-native"


function GoalItem(props) {

    function onDeleteItem() {
        props.onDeleteItem(props.id)
    }

    // props.onDeleteItem.bind(this, props.id)

    return (
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{color: '#210644'}}
                onPress={onDeleteItem}
                style={({pressed}) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#111acc'
  },
  pressedItem: {
    opacity: 0.5,
    backgroundColor: 'red'
  },
  goalText: {
    padding: 8,
    color: 'white'
  }
})

export default GoalItem