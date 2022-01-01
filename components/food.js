import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Foods = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "teals",
    color: "black",
    padding: 5,

    marginBottom: 6,

    width: 320,
    height: 300,
  },
  text: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
  },
});

export default Foods;
