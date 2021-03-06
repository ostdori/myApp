import React from 'react';
import { Text, View, TextInput } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry}) => {
const { labelStyle, inputStyle, containerStyle } = styles;

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput 
              secureTextEntry={secureTextEntry}
              placeholder={placeholder}
              autoCorrect={false}
              style={inputStyle}
              value={value}
              onChangeText={onChangeText}
            />
        </View>
    );
};

const styles = {
    inputStyle:{
        color: '#000',
        //paddingRight: 5,
        paddingLeft: 1,
        fontSize: 18,
        lineHeight: 10,
        flex: 100,
        fontStyle: 'italic'
    },
    labelStyle:{
        fontSize: 18,
        paddingLeft: 2,
        flex: 1,
        
    },
    containerStyle:{
        height: 34,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export { Input };