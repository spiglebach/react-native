import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
    const [modalIsVisible, setModalIsVisible] = useState(false)
    const [listOfGoals, setListOfGoals] = useState([
        {text: 'First task', id: 'First task_1'},
        {text: 'Second task', id: 'Second task_2'},
        {text: 'Third task', id: 'Third task_3'},
        {text: 'Fourth task', id: 'Fourth task_4'},
    ])

    function startAddGoalHandler() {
        setModalIsVisible(true)
    }

    function closeAddGoalModalHandler() {
        setModalIsVisible(false)
    }

    function addGoalHandler(enteredGoalText) {
        setListOfGoals(currentCourseGoals => [
        ...currentCourseGoals,
        {text: enteredGoalText, id: `${enteredGoalText}_${Math.random().toString()}`}
        ])
    }

    function deleteGoalHandler(goalId) {
        setListOfGoals(currentCourseGoals => {
            return currentCourseGoals.filter(item => item.id !== goalId)
        })
    }

    return (
        <>
        <StatusBar style='auto'/>
        <View style={styles.appContainer}>
            <Button title='Add New Goal' color='#5e0acc' onPress={startAddGoalHandler} />
            <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={closeAddGoalModalHandler} />
            <View style={styles.goalsContainer}>
                <FlatList
                    alwaysBounceVertical={false}
                    keyExtractor={(item, index) => item.id}
                    data={listOfGoals}
                    renderItem={itemData => (
                        <GoalItem
                            id={itemData.item.id}
                            text={itemData.item.text}
                            onDeleteItem={deleteGoalHandler}
                        />
                    )}
                />
            </View>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 16,
    backgroundColor: 'wheat'
  },
  goalsContainer: {
    flex: 5
  },
});
