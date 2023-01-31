import React, { useState } from "react";
import { StyleSheet, View, Text, Button, TextInput} from "react-native";

export default function AddTodo({ submitHandler }) {
    const [text, setText] = useState(''); //keeps a track of what the user types in the input field

    const changeHandler = (val) => {
        setText(val);
    }
    return(
        <View>
            <TextInput
                style={styles.input}
                placeholder="New ToDo..."
                onChangeText={changeHandler} //this fires a function whenever a user types something into the actual field itself
            />

            {/* <Button onPress={() => console.log(text)} title='Add ToDo' color='corol' /> */}
            <View style={styles.buttonStyle}>
            <Button style={styles.button} onPress={() => submitHandler(text)} title='Add ToDo' color='#fff'/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6, //up n down direction
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    buttonStyle: {
        backgroundColor: 'coral',
    },
})