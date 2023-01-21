import React, { useState } from 'react';//importing state from the React library
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
    //creating the state using a hook
    const [name, setName] = useState('Shawn');
    const [age, setAge] = useState('45');

  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput 
      multiline //lets you take multiple lines of text
      style={styles.input}
      placeholder='e.g. Paul Smith' 
      onChangeText={(val) => setName(val)}/>

      <Text>Enter age:</Text>
      <TextInput 
      keyboardType='numeric'
      style={styles.input}
      placeholder='e.g. 34' 
      onChangeText={(val) => setAge(val)}/>

      <Text>My name is {name} and his age is {age}</Text>
      
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
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
});