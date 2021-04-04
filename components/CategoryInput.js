import React from 'react';
import { View, StyleSheet, TextInput, Keyboard } from 'react-native';
import Colors from '../constantes/Colors';
import MyButton from './MyButton';

const CategoryInput = (props) => {
  
    return (
        <View style={styles.addContainer}>
        <TextInput
          // onPressIn = {() => Keyboard.scheduleLayoutAnimation }
          placeholder = {props.placeholder}
          onChangeText = {props.inputHandler}
          value= {props.value}
          style={styles.inputText}
        />
        <MyButton title = 'Ajouter' onClick = {props.onAdd}/>
      </View>
    );
};

const styles = StyleSheet.create({
    addContainer:{
        height: 60,
        backgroundColor: Colors.secondary,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.primary,
        margin: 15,
      },
      inputText:{
        fontSize: 20,
        color: 'black',
      }
});

export default CategoryInput;