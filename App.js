import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./Components/GoalItem";
import GoalInput from "./Components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const openModalHandler = () => {
    setIsVisibleModal(true);
  };

  const closeModalHandler = () => {
    setIsVisibleModal(false);
  };

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toLocaleString() },
    ]);
    closeModalHandler();
  };

  const removeHandler = (id) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button color="#a065ec" title="Add Goals" onPress={openModalHandler} />
        <GoalInput
          onAddGoal={addGoalHandler}
          visible={isVisibleModal}
          onClose={closeModalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            alwaysBounceVertical={false}
            data={courseGoals}
            renderItem={(itemGoals) => {
              return (
                <GoalItem
                  text={itemGoals.item.text}
                  id={itemGoals.item.id}
                  onDeleteItem={removeHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return index;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    marginTop: 16,
  },

  goalsContainer: {
    flex: 5,
    marginVertical: 16,
  },
});
