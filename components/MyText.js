import React from 'react';
import {Text, StyleSheet} from 'react-native';


const MyText = (props) => {
    return(
        <Text
            style={{   
                    fontSize: props.size,
                    color: props.color,
                }}
        >
            {props.text}
        </Text>
    )
};

const styles = StyleSheet.create({

});

export default MyText;