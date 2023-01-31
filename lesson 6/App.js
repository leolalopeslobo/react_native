import React, { useState } from 'react';
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>one</Text>
      <Text style={styles.boxTwo}>two</Text>
      <Text style={styles.boxThree}>three</Text>
      <Text style={styles.boxFour}>four</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      // flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around', //main-axis
      alignItems: 'center', //cross-axis
      paddingTop: 40,
      backgroundColor: '#bbb',
  },
  boxOne: {
      flex: 6,
      backgroundColor: 'violet',
      padding: 10,
  },
  boxTwo: {
      flex: 1,
      backgroundColor: 'gold',
      padding: 20,
  },
  boxThree: {
      flex: 5,
      backgroundColor: 'coral',
      padding: 30,
  },
  boxFour: {
      flex: 1,
      backgroundColor: 'skyblue',
      padding: 40,
  }
});