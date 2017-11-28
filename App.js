import React, { Component } from 'react';
import { StyleSheet, TabBarIOS } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {bind} from './src/utils/utils';
import EmployeesTab from './src/containers/EmployeesTab';
import SearchTab from './src/containers/SearchTab';
import LoginTab from './src/containers/LoginTab';
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm';



const employeesIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAkUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKZYAkcAAAAMdFJOU9cHd7kfMVL+W6uKhh+HnzYAAAGsSURBVEgN7ZbNTgIxEMcxHvBooSCRE0S9GzSoJ014ARK5eyASPfFhHI0P4NmD4j6B0ZM3X4/pTPejtd00QjQE/weWzvzy7860u9uCCFQhkBM/Ba8KsdYb5lymYw1STfLAzZQD6BqkdryOSFPYu9S6gGOONZhnsJw4JTZJaMghBqc5INyQJYEVmHyQ3tIbK8MJhd7hIQVLsEYDsZUFGxz74vLJsQT7fvBxSLkEpGIHWccXFeoLC5S6nC5bC6GrHs8BDnGVi9DvaJ2CWnVwOI5w0m9L2PaA9aTxAFSsDxSfKXmgyvKCKpnVP4jdwG0mYZRtS/zf3Z5K3O1b5HD34Nb+LVDEW+wMp5adDl7cU2Pa1vKCsqm1gzXVms1dX9WLXxnJb84oesap61H06pva7jaOl7fhwcUsvuHBjqKn1cW7lb3e+Uo0/C8fhZbWITZ8u9U6WomGBz8KgeAdnVOsn6LjBBB/ZMzrHKA6kzi0YZ97HIXokHWSCgOroD6Tbsn2PSXoECfMSq0RmzA4sHLG8CnjWC0aKWMw5ltiR/UC8QjfKxlHPci7aMc8hHPB4AzigEN9CtcO6QAAAABJRU5ErkJggg==';
const loginIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAtUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMGgKD4AAAAPdFJOUwT9zxZgufHhjKE4J3hHU2C1oToAAAUFSURBVEgNvZbfixtVFMdPm91tMvmB32mT2XTZpWOpbdWHsbT+oLXs4rZu61aSWpQiioOWWizitJT6EzaIvxWaoiDiQ0LxwYXCbMUuxZdE1/oDlMRSfBFJrUoV2r/B751MspOZbCs+eB4y597zmTPnnHvuvREoMSqypMx7xCrxHjixJCelHrC1NFjtgGOzs7OnluYkRvusw0+PXAfqmsz/DGrfrQcObvy+68pXwh7/sr3IgbUhMgR+42PA6HXB+8lt2PPF1tO7zDXXAz8H8q0Q0Bny085Kf5C28bRFfeuvf7v+1OKjOCqftvxhHVlXZPNJFeeGhj/ZeZyrdTRJIdcS+cNPx/iqawgrdbwk4qV98DjpXC0M+OMB6JbsJPC+K6LtWLrz5nBUzjDtRvvFbTaGfRehh5lzB9BO27PEgYdCiDdMcC1KyFsiyakP9v/AuTMqlqhUMZOA0RC521F5H6qIlBlMVEydhrXkFEbJViTez2UGoylkRdIOcOzdt0yoVOooRDyuQKGqpusw3qEx9ptqtHifxOdQcQyLJsy0nfwEw2UwrfZo8XdwOIXVwry5Otu//dFV6lHZhGcWkY52J315q3ORqejjSpekzbDDUs9ZcpaB3UOOpCsTPBQmMB7mxGGaxZybdGDsfwR4lt00JoN4Mgymub3TNJ2F3hD5BEyjaFgxOx8G4yzOchRiDmrKtJOpqajrqKhhQFYQqKIxiFWSPnmsodmGlcJKYX0DkFLv4KvlrIo+WWSzySWmwrAzqmg90oSIzZ2WZ5SUWpzdNMFCmOECTeii4aYMv+Zg30VmZuoyhHF6bvQ4lHqW9SgM4kSKUcbouIlWHGsYS60XLOVZtNoQGkPMVVj9QRQ0rNTscNrlYWbYmoNVhfWLNYRammk4q+Yjq01wGdwqpK4nUYhzRcxhKel2OEQp51khq2lIKa9hJGbrbt1gJhjT3gvFmJU5SDMndO1kuSKHq7hQR65xiTUKSl1XHskyqwlUEqqYNnDbAELgpRxBdxkqfGMFe/a8InGIrkNHKvNlbZaj1oSVQV6Sb5DbJ1v48eCHhSkrKoECK8O9UhO595qrNuWLvZwsxww7jV2ZYGU2oX3uxMrc2lYv6VFPsGGS6rsObqU5WeKmTHFzBiXNdmD31OGWuIbzwO17pkzgFc60fG7zpJJpDE+a+mQd+85Tm7bhibEwBSx4gMu2+lcy4t/XN4RH5cubu3Kkq0WVmWBG/4/+WfQzD49LXB0MO1WxpXzsFrUBt4TqzSmNvb9M/Vspql3jFcMVzYy0uIijS0It8gTU/VbkOS6xEn8i0qQnk32TcZB7W7Tp3ZZWRni3qrcS/PZdyqW6GQ4sXP39axtec0Rc8hRn3xREzpFsy8sRSE00eeDOQ6+IbDPb3ON9OZ4pDN/EsMX748re40c+viDJN/uiZVaH++8wybZkiv2SEZ4+LPjPrMtlj4vtsvtmTaOprt7XGd/GhQcnX3Oo9M+GLnlvxBTpy2N+DOqx3QoMiniKox12m3vhvq4p44r5XHckwsvwUQ61qb3r1334QMBQ5lYYCYzlT+DV4Lijm2MhkHdC7qOONfA0I380BxzgeZYndqUV4CQKSkplYhxH7w3TB5QBkyRl9Q088sxR/YUD4zcEGeDpa6eCGNcskkyvvTtSoM5jYZ3bnYoocXVs2AQ9ORGxdyeaHtABa935iHLWB68puRoxL04kPeLyP9WdPWxb146WAAAAAElFTkSuQmCC';
const searchIcon = 'data:image/png;base64,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';
const homeIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAqUExURQAAAAAAAAAAAAAAAAAAAAAAAEdwTAAAAAAAAAAAAAAAAAAAAAAAAAAAADQmBmkAAAANdFJOUy/S7A8ecQCaqFlGvIcUCYjkAAACs0lEQVRIDd2Wz2sTQRTHY4up14DXXMQWDCwosbEQPYhpLtqTGBQRYqPPpkZQkHrqrQah9Br04MEIeyjkpLewJyW3HrJYrCbvf/H7Znf2l5vdGNuDfg9vZ2Y//b55M9PsZGhKZabk6ETAeWRvZNUUKirWS/Jwhy5K+wYhdcs2ieZGJfRbPEB8ZBUQqTusIjaNNlF5KOBDLlDdQADBI7zssvAt5guw3eYjIouzCrTNOWauCQEeBPiGhceATiG2n7IL8qLBMLvFvMv81eIx/LtsH/BwlTnHR3seyHy4aeBvD+kBom2uIPLneh7xe1Gi62hJ3psgsiT8JxJ+TATe7tAlRjpnju9gRXQgBJWFQHGyFODPop786JoLdt52MLr5GoHorinxykuJdTV09cszDcpgkv5XsHtuoraIAlX3eKLaM4J2Jl4LHHG0J+xMa3bwVbxeRB0nFj0ruBCfWEY7oXWcULM7HNiZfwFsFH2V8C/q94roBooJHrMB0Vpg/dsnDdp6Vivy45gwR+88bqhfXQopWMyfgOb9fr9GyrHc91ULV21TcxFrMnbAhOWxaf38+51KZRpwqbdVLDrg8h1fZjT1+lLvucHZ9KoB7uaMqcAPVbIcMDl14d7+fr6qUidWjc8c8w9KB+k0KjUd8HrO1yBaNTlKr/q4QRSihUmtSfu2HsDT+RZ2iHqBwb8B3asCHC9XfJVwaZBekX86g5Z8ZOVOATBODf6mhp+wXEOmALfFUINn3vjq4NsvvY+Oo2OowfiqVWrHMB10DTW4igOhZRItS3tepXYNNYjZ/iZVtTZMBbVhGugZpoGeYQroG6aAvmEyOFK77CxH4l6z2mUNbgR6obVscMAQqZuBwx1tyrFxhXv4XvS111fXYR98bHhvIo2AIVLj4MdfUDKhW3+oo+cT9zx+8BfmkiW9brW+ggAAAABJRU5ErkJggg==';


class myApp extends Component {
    

    state = { loggedIn: null };
    
    componentWillMount() { 
        firebase.initializeApp({
          apiKey: "AIzaSyCL5T7Um8trGZr1ipMr5AFtmFzQPv1hPKY",
          authDomain: "authentication-164d3.firebaseapp.com",
          databaseURL: "https://authentication-164d3.firebaseio.com",
          projectId: "authentication-164d3",
          storageBucket: "authentication-164d3.appspot.com",
          messagingSenderId: "784618132421"
        });
    
    //user sign in and sign out event handler for signing in and signing out
    //the App compoenent now know whether the user logging in or logging out
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            this.setState({ loggedIn: true });
          } else {
            this.setState({ loggedIn: false });
          }
        }); 
      }
    

  constructor(props, context) {
    super(props, context);
    this.state = {
        selectedTab: 'search'
    };
    bind(this)('searchOnPress', 'employeesOnPress', 'loginOnPress', 'newsOnPress');
}

renderContent() {
    switch (this.state.loggedIn) {
      case true:
          return (
          <Button onPress={() => firebase.auth().signOut()}>
          Log Out
          </Button>
          );
      case false:
          return <LoginForm />
      default:
          return <Spinner size="large" />
    }
  }

newsOnPress() {
    this.setState({
        selectedTab: 'home'
    })
}

searchOnPress() {
    this.setState({
        selectedTab: 'search'
    })
}

employeesOnPress() {
    this.setState({
        selectedTab: 'employees'
    })
}

loginOnPress() {
    this.setState({
        selectedTab: 'login'
    })
}

render() {
    return (
        <TabBarIOS
            selectedTab={this.state.selectedTab}
            barTintColor='indianred'
            itemPositioning='fill'
            unselectedItemTintColor='white'
            tintColor='black'
            unselectedTintColor='white'>
            <TabBarIOS.Item
                title="News"
                //selected={this.state.selectedTab === 'home'}
                icon={{uri: homeIcon, scale: 3}}
                onPress={this.newsOnPress}>
            </TabBarIOS.Item>
            <TabBarIOS.Item
                title="Search"
                selected={this.state.selectedTab === 'search'}
                icon={{uri: searchIcon, scale: 3}}
                onPress={this.searchOnPress}>
                <SearchTab />
            </TabBarIOS.Item>
            <TabBarIOS.Item
                title="Employees"
                selected={this.state.selectedTab === 'employees'}
                icon={{uri: employeesIcon, scale: 3}}
                onPress={this.employeesOnPress}>
                <EmployeesTab />
            </TabBarIOS.Item>
            <TabBarIOS.Item
                title="Log In"
                selected={this.state.selectedTab === 'login'}
                icon={{uri: loginIcon, scale: 3}}
                onPress={this.loginOnPress}>
                <LoginTab />
            </TabBarIOS.Item> 
        </TabBarIOS>
    )   
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    borderColor: 'indianred'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default myApp;
