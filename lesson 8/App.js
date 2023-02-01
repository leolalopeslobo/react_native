import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoitem';
import AddTodo from './components/addtodo';
import Sandbox from './components/sandbox';

export default function App() {
    //creating the state using a hook
    const [todos, setTodos] = useState([
      { text: 'buy coffee', key: '1' },
      { text: 'do the laundry', key: '2' },
      { text: 'create an app', key: '3' }
    ]); //List

    //creating a function
    const pressHandler = (key) => {
      setTodos((prevTodos) => {
        return prevTodos.filter(todo => todo.key != key);
      })
    }

    //add the new todo to the main todo list
    const submitHandler = (text) => {

      //checking and alerting
      if(text.length > 3) {
        setTodos((prevTodos) => {
          return [
            { text: text, key: Math.random().toString() },
            ...prevTodos //... spread operator
          ];
        })
      } else {
        Alert.alert('OOPS!', 'ToDos must be over 3 chars long', [
          {text: 'Understood', onPress: () => console.log('alert closed')}
        ]);
      }
    }

  return (
    // <Sandbox />
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('dismissed keyboard')
    }}>
      <View style={styles.container}>
        <Header/>
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler}/>
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                // <Text>{item.text}</Text>   displays the item
                <TodoItem item={item} pressHandler={pressHandler}/>
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  }
});


/*
When we initialise a new React Native project using Expo, then that project comes along with the availability to add icons out of the box and we do not need to install any other package.
We do that importing -> import Ionicons from '@expo/vector-icons/Ionicons'. This bundles up icons from loads of different sources
*/