import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';



const EmployeeDetails = ({employee}) => (
    <View style={styles.employee}>
        <Image style={styles.cover}
               source={{uri: employee.picture.large}}/>
        <View style={styles.info}>
            <Text style={styles.name}>
                {`${employee.name.first.toUpperCase()} ${employee.name.last.toUpperCase()}`}
            </Text>
            <Text style={styles.container}>
                <Text style={styles.fontBold}>Phone: </Text>
                {employee.cell}
            </Text>
            <Text style={styles.container}>
                <Text style={styles.fontBold}>Email: </Text>
                {employee.email}
            </Text>
            <Text style={styles.container}>
                <Text style={styles.fontBold}>Location: </Text>
                {employee.location.city},
                {employee.location.street}
            </Text>
            <Text style={styles.container}>
                <Text style={styles.fontBold}>Registrated Date: </Text>
                {employee.registered}
            </Text>
        </View>
    </View>
);

EmployeeDetails.propTypes = {
    ...View.propTypes,
    employee: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
    employee: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 30,
        backgroundColor: 'lightslategrey'     
    },
    cover: {
        flex: 1,
        height: 150,
        marginTop: 40,
        resizeMode: 'contain',
        
    },
    info: {
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'center',
        padding: 10,
        
    },
    name: {
        alignSelf: 'center',
        marginBottom: 12,
        fontSize: 16,
        fontWeight: '700',
        color: '#222222',
        fontFamily: 'Futura',
        textDecorationColor: 'white'
    },
    fontBold: {
        fontWeight: '700',
        
    },
    container: {
        paddingTop: 20,
        borderColor: 'black',
        borderStyle: 'solid',
        backgroundColor: 'lightslategrey',
        fontFamily: 'Futura',
        //paddingLeft: 100
        textDecorationColor: 'white'
    }
});

export default EmployeeDetails;