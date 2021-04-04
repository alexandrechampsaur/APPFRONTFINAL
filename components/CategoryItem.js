import React from 'react';
import {View, TouchableOpacity, StyleSheet } from 'react-native';
import MyText from './MyText';
import Colors from '../constantes/Colors';

const CategoryItem = (props) => {

    return(
        <TouchableOpacity
            onLongPress={props.onDelete}
            onPress={props.onPressHandler}
        >
            <View style={styles.card}>
                <MyText text={props.title} size={32} color={Colors.primary}/>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card:{
        borderWidth:2,
        borderColor: Colors.primary,
        borderRadius:10,
        backgroundColor: Colors.secondary,
        height: 180,
        width: 180,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        marginTop: 23
    }
});

export default CategoryItem;