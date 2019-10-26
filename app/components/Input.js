import React from 'react';
import { StyleSheet, TextInput, Dimensions} from 'react-native';

export default function Input({value, changeText, addTodoItem}) { 
  return (
   <TextInput
    value={value}
    onChangeText={changeText}
    onEndEditing={addTodoItem}

    style={styles.input}
    placeholder={" 오늘의 할 일"}
    maxLength={30}
    returnKeyType="done"/>
  );
}

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  input: {
    fontSize:18,
    fontWeight:'bold',
    borderWidth:3,
    borderColor: '#cab5e3',
    marginTop:10,
    marginBottom:20,
    padding:7,
    width: width-80,
  },
});
