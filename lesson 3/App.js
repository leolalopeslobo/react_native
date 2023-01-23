import React, { useState } from 'react';//importing state from the React library
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
    //creating the state using a hook
    const [people, setPeople] = useState([
      { name: 'shawn', key: '1' },
      { name: 'lucy', key: '2' },
      { name: 'jane', key: '3' },
      { name: 'sam', key: '4' },
      { name: 'mary', key: '5' },
      { name: 'jade', key: '6' },
      { name: 'oswald', key: '7' },
      { name: 'yoshi', key: '8' },
      { name: 'kean', key: '9' },
      { name: 'mario', key: '10' },
    ]); //List

  return (
    <View style={styles.container}>

      {/* Allows the user to Scroll */}
      <ScrollView>
        { people.map((item) => {
          return (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          )
        })}
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
  },
});