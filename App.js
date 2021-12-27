import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const App = () => {

  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Text style={styles.container}> Hello world </Text>
        <Text style={styles2.container}>This  is new world</Text>
      </View>
    </SafeAreaView>


  )
};

const styles = StyleSheet.create({
  container: {
    // paddingTop: 30,
    // paddingBottom: 30,
    // paddingRight: 0,
    // paddingLeft: 40,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'lime',
    flex: 1,
  },
  safeArea:{
    flex:2
  }
});


const styles2 = StyleSheet.create({
  container: {
    //  paddingVertical:50,
    //   paddingHorizontal:50,

    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center',
    // borderColor: '#14AAF5',
    // borderWidth: 2,
    



  },
  safeArea:{
    flex:1,
  }
});



export default App;
