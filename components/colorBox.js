import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const ColorBox = ({ colorName, hexCode }) => {
  return (
    <SafeAreaView>
      <View style={styles.box}>
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

    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10,
    width: 320,

    borderRadius: 3,
    backgroundColor: "#DAEE01",
  },
  //   orange: {
  //     backgroundColor: "#DAEE01",
  //   },
  boxText: {
    fontWeight: "bold",
    color: "black",
  },
});

export default ColorBox;
