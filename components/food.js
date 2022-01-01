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

    color: "black",
    padding: 5,
    backgroundColor: "teal",
    marginBottom: 6,
    width: 320,
    height: 200,
    borderBottomRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  text: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default Foods;
