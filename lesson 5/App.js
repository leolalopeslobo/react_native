import React, { useState } from 'react';//importing state from the React library
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
    //creating the state using a hook
    const [people, setPeople] = useState([
      { name: 'zero', id: '0' },
      { name: 'one', id: '1' },
      { name: 'two', id: '2' },
      { name: 'three', id: '3' },
      { name: 'four', id: '4' },
      { name: 'five', id: '5' },
      { name: 'six', id: '6' },
      { name: 'seven', id: '7' },
      { name: 'eight', id: '8' },
      { name: 'nine', id: '9' },
      { name: 'ten', id: '10' },
    ]); //List

    const pressHandler = (id) => {
      console.log(id);
      setPeople((prevPeople) => {
        return prevPeople.filter(person => person.id != id) //return a new array which does not contain the item that was selected.
      })
    }

  return (
    <View style={styles.container}>
      
      {/* The other way to output a list using 'FlatList'*/}
      <FlatList 
        numColumns={3} //creats two columns
        //splits them into columns
        keyExtractor={(item) => item.id} //lets you set the key to a particular attribute
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>

        )}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    // paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24,
  },
});