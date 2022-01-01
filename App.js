import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/home";
import ColorPalette from "./screens/ColorPalette";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.screen name="Home" component={Home} />
        <Stack.screen name="ColorPalette" component={ColorPalette} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// FlatLIST EXAMPLE

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

// SECTION LIST EXAMPLE:

// const FOODS = [
//   { title: "Healthy", data: ["Apples", "Broccoli"] },
//   { title: "Not so Healthy", data: ["Cookies", "Doritos", "Eclairs"] },
// ];

//       {/* <SafeAreaView
//         style={{ top: 60, alignItems: "center", justifyContent: "center" }}
//       > */}
//         {/* <View style={styles.container}>
//         <ColorBox colorName="yellow" hexCode="#fbb117" />
//         <ColorBox colorName="cyan" hexCode="#2aa198" />
//         <ColorBox colorName="blue" hexCode="#268bd2" />
//         <ColorBox colorName="Magenta" hexCode="#d33682" />
//       </View> */}

//         {/* <FlatList
//           // style={styles.container}
//           data={COLORS}
//           keyExtractor={(item) => item.hexCode}
//           renderItem={({ item }) => (
//             <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
//           )}
//           // renderSectionHeader={({ section }) => (
//           //   <Text style={styles.header}>{section.title}:</Text>
//           // )}
//           ListHeaderComponent={<Text style={styles.heading}>Solarized</Text>}
//         /> */}

//         {/* <SectionList
//         sections={FOODS}
//         keyExtractor={(item) => item}
//         renderItem={(data) => <Foods name={data.item} />}
//         renderSectionHeader={({ section }) => (
//           <Text style={styles.heading}>{section.title}</Text>
//         )}
//       /> */}
//       {/* </SafeAreaView> */}

// {/* }; */}

// // const styles = StyleSheet.create({
// //   container: {
// //     // alignItems: "center",
// //     // justifyContent: "center",
// //     paddingTop: 30,
// //     paddingHorizontal: 8,
// //     paddingBottom: 10,
// //   },
//   // text: {
//   //   fontWeight: "bold",
//   //   fontSize: 18,
//   //   color: "black",
//   // },
// //   heading: {
// //     fontSize: 30,
// //     fontWeight: "bold",
// //     color: "black",
// //     paddingHorizontal: 5,

// //     borderRadius: 5,
// //     justifyContent: "center",
// //     alignItems: "center",
// //     marginBottom: 10,
// //     marginTop: 10,
// //   },
// // });
