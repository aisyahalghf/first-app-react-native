import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalTeaxt] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoalTeaxt(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalTeaxt("");
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="write your goals"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.containerButton}>
          <View>
            <Button title="add goal" color="#5e0acc" onPress={addGoalHandler} />
          </View>
          <View>
            <Button title="cancel" color="red" onPress={props.onClose} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    width: "100%",
    padding: 8,
    color: "#120438",
  },
  containerButton: {
    flexDirection: "row",
    marginTop: 16,
    gap: 16,
  },
});
