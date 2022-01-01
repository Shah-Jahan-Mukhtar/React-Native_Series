import React from "react";
import { SafeAreaView, FlatList } from "react-native";
import ColorBox from "./components/colorBox";

const ColorPalette = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={COLORS}
        keyExtractor={(item) => item.hexCode}
        renderItem={({ item }) => (
          <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
        )}
        ListHeaderComponent={<Text style={styles.heading}>Solarized</Text>}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: 30,
    paddingHorizontal: 8,
    paddingBottom: 10,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    paddingHorizontal: 5,

    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 10,
  },
});

export default ColorPalette;
