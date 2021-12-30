import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

const Colors = (props) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>
          {props.name}:{props.hexCode}
        </Text>
      </View>
    </SafeAreaView>
  );
};

// const COLORS = [
//   { colorName: "Base03", hexCode: "#002b36" },
//   { colorName: "Base02", hexCode: "#073642" },
//   { colorName: "Base01", hexCode: "#586e75" },
//   { colorName: "Base00", hexCode: "#657b83" },
//   { colorName: "Base0", hexCode: "#839496" },
//   { colorName: "Base1", hexCode: "#93a1a1" },
//   { colorName: "Base2", hexCode: "#eee8d5" },
//   { colorName: "Base3", hexCode: "#fdf6e3" },
//   { colorName: "Yellow", hexCode: "#b58900" },
//   { colorName: "Orange", hexCode: "#cb4b16" },
//   { colorName: "Red", hexCode: "#dc322f" },
//   { colorName: "Magenta", hexCode: "#d33682" },
//   { colorName: "Violet", hexCode: "#6c71c4" },
//   { colorName: "Blue", hexCode: "#268bd2" },
//   { colorName: "Cyan", hexCode: "#2aa198" },
//   { colorName: "Green", hexCode: "#859900" },
// ];

// const App = () => {
//   <SafeAreaView>
//     <Flatlist
//       style={{ padding: 20 }}
//       data={COLORS}
//       keyExtractor={(Item) => Item}
//       renderItem={({ Item }) => <colors name={Item.data} hexcode={item.data} />}
//     />
//   </SafeAreaView>;
// };

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: "10",
  },
  text: {
    fontWeight: "bold",
  },
});
