import React, { useState } from 'react';//importing state from the React library
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
    //creating the state using a hook
    const [name, setName] = useState('Shawn');
    const [person, setPerson] = useState({ name: 'mario', age: 40});

    const clickButton = () => {
      setName('sam');
      setPerson({name:'liza', age: 29});
    }


  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>My name is {person.name} and his age is {person.age}</Text>
      <View style={styles.buttonContainer}>
        <Button title='Update Name' onPress={clickButton}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: 'pink',
    marginTop: 10,
    padding: 5,
  },
  boldText: {
    fontWeight: 'bold',
  }
});