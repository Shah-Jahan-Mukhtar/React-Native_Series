import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const ColorBox = ({ colorName, hexCode }) => {
  const boxColor = {
    backgroundColor: hexCode,
  };
  return (
    <SafeAreaView>
      <View style={[styles.box, boxColor]}>
        <Text style={styles.boxText}>
          {colorName}:{hexCode}
        </Text>
      </View>
    </SafeAreaView>
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

    borderRadius: 5 ,
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
