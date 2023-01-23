import React, { useState } from 'react';//importing state from the React library
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
    //creating the state using a hook
    const [people, setPeople] = useState([
      { name: 'shawn', id: '1' },
      { name: 'lucy', id: '2' },
      { name: 'jane', id: '3' },
      { name: 'sam', id: '4' },
      { name: 'mary', id: '5' },
      { name: 'jade', id: '6' },
      { name: 'oswald', id: '7' },
      { name: 'yoshi', id: '8' },
      { name: 'kean', id: '9' },
      { name: 'mario', id: '10' },
    ]); //List

  return (
    <View style={styles.container}>

      {/* Allows the user to Scroll */}
      {/* <ScrollView>
        { people.map((item) => {
          return (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          )
        })}
      </ScrollView> */}

      {/* The other way to output a list using 'FlatList'*/}
      <FlatList 
        // numColumns={2} //creats two columns
        //splits them into columns
        keyExtractor={(item) => item.id} //lets you set the key to a particular attribute
        data={people}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name}</Text>
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
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
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