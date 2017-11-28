import React from 'react';
import { NavigatorIOS, StyleSheet } from 'react-native';
import LoginForm from '../components/LoginForm';
import { Header, Button, Spinner } from '../components/common';


const LoginTab = ({props}) => (
    <NavigatorIOS
        style={styles.container}
        initialRoute={{
            title: 'Log In',
            component: LoginForm,
            barStyle: 'black'
        }}/>
);

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default LoginTab;