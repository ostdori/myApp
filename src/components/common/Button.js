import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({onPress, children}) => {
    const { buttonStyle, textStyle } = styles;


    return (
        <TouchableOpacity onPress={onPress}   style={buttonStyle}>
          <Text style={textStyle}>
              {children}
          </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 17,
        fontWeight: '800',
        paddingTop: 15,
        paddingBottom: 15,
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'center',
        backgroundColor: 'lightslategrey',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'lightslategrey',
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 5,
        }
};

export { Button } ;