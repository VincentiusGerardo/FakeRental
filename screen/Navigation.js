import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createStackNavigator, createSwitchNavigator,createAppContainer, SwitchNavigator} from 'react-navigation';

import { Constants } from 'expo';

// You can import from local files


// or any pure javascript modules available in npm

import Login from './Form/Login';
import Register from './Form/Register';
export default class Navigation extends React.Component {
  render() {
    
    return(
      <Cute />
    );

  }
}

  
const MainNavigator = createSwitchNavigator({
  Login: {screen: Login},
  Register : {screen: Register},
  // BaganCard:{screen:BaganCard}

});

const Cute = createAppContainer(MainNavigator)
