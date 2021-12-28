import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import ColorBox from "./components/colorBox";

const App = () => {
  return (
    <SafeAreaView style={{ top: 60 }}>
      <View style={styles.container}>
        <Text style={styles.text}>Here are some boxes of different colors</Text>
        <Text style={styles.text1}>Cyan #2aa198</Text>
        <Text style={styles.text2}>Blue #268bd2</Text>
        <Text style={styles.text3}>Magenta #d33682</Text>
        <Text style={styles.text4}>Orange #cb4b16</Text>
      </View>
      <ColorBox colorName="yellow" hexCode="#DAEE01" />
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
  text1: {
    backgroundColor: "#2aa198",
    width: 320,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginTop: 10,
    color: "white",
    borderRadius: 3,
    fontWeight: "bold",
  },
  text2: {
    backgroundColor: "#268bd2",
    width: 320,
    paddingVertical: 10,

    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginTop: 10,
    color: "white",
    borderRadius: 3,
    fontWeight: "bold",
  },
  text3: {
    backgroundColor: "#d33682",
    width: 320,
    paddingVertical: 10,

    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginTop: 10,
    color: "white",
    borderRadius: 3,
    fontWeight: "bold",
  },
  text4: {
    backgroundColor: "#cb4b16",
    width: 320,
    paddingVertical: 10,

    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginTop: 10,
    color: "white",
    borderRadius: 3,
    fontWeight: "bold",
  },

  //   lime: {
  //     backgroundColor: "lime",
  //   },
  //   safeArea: {
  //     top: 25,
  //     flex: 1,
  //   },
});

export default App;
