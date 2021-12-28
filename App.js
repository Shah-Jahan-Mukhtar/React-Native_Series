import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import ColorBox from "./components/colorBox";

const App = () => {
  return (
    <SafeAreaView style={{ top: 60 }}>
      <View style={styles.container}>
        <Text style={styles.text}>Here are some boxes of different colors</Text>
        <ColorBox colorName="yellow" hexCode="#fbb117" />
        <ColorBox colorName="cyan" hexCode="#2aa198" />
        <ColorBox colorName="blue" hexCode="#268bd2" />
        <ColorBox colorName="Magenta" hexCode="#d33682" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default App;
