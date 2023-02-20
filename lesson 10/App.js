import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Button } from 'react-native';

export default function App() {

  const moveDown = (index) =>  {
    let a = index;
    let b;
    let newfruits = [...fruits];
    if (index == fruits.length-1) {
      b = 0;
      newfruits[0] = fruits[a];
      newfruits[index] = fruits[b];
    }
    else {
      b = index + 1;
      newfruits[index+1] = fruits[a];
      newfruits[index] = fruits[b];
    }    
    setFruits(newfruits);
    // console.log(newfruits,a,b);
  }


  const moveUp = (index) =>  {
    let a = index;
    let b;
    let newfruits = [...fruits];
    if (index == 0){
      b = fruits.length-1;
      newfruits[fruits.length-1] = fruits[a];
      newfruits[index] = fruits[b];
    }
    else {
      b = index - 1;
      newfruits[index-1] = fruits[a];
      newfruits[index] = fruits[b];
    }
    
    setFruits(newfruits);
    // console.log(newfruits,a,b);
  }

  const [fruits, setFruits] = useState([
    { name: 'mango' },
    { name: 'grapes' },
    { name: 'kiwi' },
    { name: 'watermelon' },
    { name: 'banana' }
  ])

  
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.content}>
      <Text style={{fontWeight: '500', textAlign: 'center'}}>Arrange the given fruits according to your preference</Text>
      <FlatList
        data={fruits}
        renderItem={({ item, index }) => (
          <View>
          <Text>{item.name},{index}</Text>
          <View style={{flex:1, flexDirection: 'row-reverse'}}>
            <Button title='DOWN' onPress={() => {moveDown(index)}} />
            <Button title='UP' onPress={() => {moveUp(index)}} />
          </View>
        </View>
        )}
        />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    backgroundColor: '#ADD8E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    paddingHorizontal: '10%',
    width: '100%',
  }
});
