import React from 'react';
import { NavigatorIOS, StyleSheet } from 'react-native';
import Search from './Search';


const SearchTab = ({props}) => (
    <NavigatorIOS
        style={styles.flex1}
        initialRoute={{
            title: 'Search',
            component: Search,
            navigationBarHidden: false,
            barStyle: 'black',
            statusBarHidden: true
            
        }}/>
);

const styles = StyleSheet.create({
    flex1: {
        flex: 1, 
    }
});

export default SearchTab;