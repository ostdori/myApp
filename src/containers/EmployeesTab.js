import React from 'react';
import { NavigatorIOS, StyleSheet } from 'react-native';
import Employees from './Employees';


const EmployeesTab = ({props}) => (
    <NavigatorIOS
        style={styles.container}
        initialRoute={{
            title: 'Employees list',
            component: Employees,
            navigationBarHidden: false,
            barStyle: 'black'
        }}/>
);

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default EmployeesTab;