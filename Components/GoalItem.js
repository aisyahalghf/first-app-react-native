import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = (props) => {
  return (
    <Pressable
      android_ripple={{ color: "#dddddd" }}
      onPress={props.onDeleteItem.bind(this, props.id)}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.itemGoals}>
        <Text style={styles.textGoals}>{props.text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  itemGoals: {
    borderWidth: 1,
    backgroundColor: "#311b6b",
    borderRadius: 8,
    marginBottom: 10,
  },
  textGoals: {
    color: "white",
    padding: 10,
  },
  pressedItem: {
    backgroundColor: "#dddddd",
    textDecorationLine: "underline",
    marginTop: 4,
  },
});

export default GoalItem;
