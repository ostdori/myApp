import React from 'react';
import {View} from 'react-native';


//we took our props object and then we added in refrence to props.children
//into a jsx .  
const Card = (props) => {
    return (
      <View style={styles.containerStyle}>
          {props.children }
      </View>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 2,
        borderRadius: 7,
        borderColor: 'indianred',
        borderBottomWidth: 0,
        //shadowColor: '#000',
        //shadowOffset: { width: 0, height: 2 },
        //shadowOpacity: 0.1,
        //shadowRadius: 2,
        //elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop:100
    }
};

export { Card } ;