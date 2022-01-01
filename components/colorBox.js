import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const ColorBox = (props) => {
  const boxColor = {
    backgroundColor: props.hexCode,
  };
  const textStyle = {
    color:
      parseInt(props.hexCode.replace("#", ""), 16) > 0xffffff / 1.1
        ? "black"
        : "white",
  };
  return (
    <View style={[styles.box, boxColor]}>
      <Text style={[styles.boxText, textStyle]}>
        {props.colorName} :{props.hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,

    marginBottom: 6,

    width: 320,

    borderRadius: 3,
    backgroundColor: "teal",
 
  boxText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 18,
  },
});

export default ColorBox;
