import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';

const Employee = ({employee}) => {
    return (
        <View style={styles.employee}>
            <Image style={styles.cover}
                   source={{uri: employee.picture.large}}/>
            <View style={styles.info}>
                <Text style={styles.name}>
                    {`${employee.name.first.toUpperCase()} ${employee.name.last.toUpperCase()}`}
                </Text>
                <Text style={styles.myTextStyle}>
                    Phone: {employee.cell}
                </Text>
                <Text style={styles.myTextStyle}>
                     Email: {employee.email}
                </Text>
                <Text style={styles.myTextStyle}>
                   City: {`${employee.location.city.toUpperCase()}`}
                </Text>
            </View>
        </View>
    )
};

Employee.propTypes = {
    ...View.propTypes
};

const styles = StyleSheet.create({
    employee: {
        flex: 1,
        flexDirection: 'row-reverse',
        backgroundColor: 'lightslategrey',
        borderBottomColor: 'lightslategrey',
        borderBottomWidth: 10,
        borderTopColor: 'lightslategrey',
        borderTopWidth: 10,
        justifyContent: 'center',
        //paddingTop: 1,
        paddingLeft: 3,
        //paddingRight: 20,
    
    },
    cover: {
        flex: 1,
        //width: 150,
        //height: 150,
        marginLeft: 20,
        resizeMode: 'cover',
        padding: 15,
        height: 100,
        borderRadius: 50,
        width: 100
        
    },
    info: {
        flex: 3,
        alignItems: 'flex-end',
        flexDirection: 'column',
        alignSelf: 'center',
        padding: 10,
        
    },
    name: {
        marginBottom: 13,
        fontSize: 15,
        fontFamily: 'Futura',
        fontWeight: '900',
        color: '#222222',
        textAlign: 'center',
        justifyContent: 'flex-start',
        
    },
    myTextStyle: {
        fontWeight: '200',
    }
});

export default Employee;