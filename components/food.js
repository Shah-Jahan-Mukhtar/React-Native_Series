import { View, Text, StyleSheet } from "react-native";

const Foods = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.Name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
  },
});

export default Foods;
