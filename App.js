import React from "react";
import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native";

import ColorBox from "./components/colorBox";

const COLORS = [
  { colorName: "Base03", hexCode: "#002b36" },
  { colorName: "Base02", hexCode: "#073642" },
  { colorName: "Base01", hexCode: "#586e75" },
  { colorName: "Base00", hexCode: "#657b83" },
  { colorName: "Base0", hexCode: "#839496" },
  { colorName: "Base1", hexCode: "#93a1a1" },
  { colorName: "Base2", hexCode: "#eee8d5" },
  { colorName: "Base3", hexCode: "#fdf6e3" },
  { colorName: "Yellow", hexCode: "#b58900" },
  { colorName: "Orange", hexCode: "#cb4b16" },
  { colorName: "Red", hexCode: "#dc322f" },
  { colorName: "Magenta", hexCode: "#d33682" },
  { colorName: "Violet", hexCode: "#6c71c4" },
  { colorName: "Blue", hexCode: "#268bd2" },
  { colorName: "Cyan", hexCode: "#2aa198" },
  { colorName: "Green", hexCode: "#859900" },
];

// const Colors = (props) => {
//   return (
//     <SafeAreaView>
//       <View style={styles.container}>
//         <Text style={styles.text}>{props.name}</Text>
//       </View>
//     </SafeAreaView>
//   );
// };

const App = () => {
  return (
    <View>
      <SafeAreaView style={{ top: 60 }}>
        {/* <View style={styles.container}>
        <ColorBox colorName="yellow" hexCode="#fbb117" />
        <ColorBox colorName="cyan" hexCode="#2aa198" />
        <ColorBox colorName="blue" hexCode="#268bd2" />
        <ColorBox colorName="Magenta" hexCode="#d33682" />
      </View> */}

        <FlatList
          style={{ alignItems: "center", justifyContent: "center" }}
          data={COLORS}
          keyExtractor={(Item) => Item.hexCode}
          renderItem={({ Item }) => (
            <ColorBox hexCode={Item.hexCode} colorName={Item.colorName} />
          )}
          ListHeaderComponent={<Text style={styles.heading}>Solarized</Text>}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  // text: {
  //   fontWeight: "bold",
  //   fontSize: 18,
  //   color: "black",
  // },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default App;
