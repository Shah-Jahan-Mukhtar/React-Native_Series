import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
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
        {props.colorName}:{props.hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 10,

    marginTop: 10,

    width: 320,

    borderRadius: 5,
  },
  orange: {
    backgroundColor: "#DAEE01",
  },
  boxText: {
    fontWeight: "bold",
    color: "white",
  },
});

export default ColorBox;
