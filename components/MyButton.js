import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import MyText from './MyText';
import Colors from '../constantes/Colors';


const MyButton = (props) => {
    return(
        <TouchableOpacity onPress={props.onClick}>
            <View style={styles.myButton}>
                <MyText text='Ajouter' size={20} color='white' />
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    myButton:{
        width: 130,
        height: 40,
        backgroundColor: Colors.primary,
        borderColor: Colors.third,
        borderRadius: 90,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
    }
});

export default MyButton;