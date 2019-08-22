import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Order from './screen/Car/Order';
import BottomTab from './screen/Home/BottomNavigator';
import Switchnav from './screen/Car/Stacknavigator1';
import {MediaQuery} from 'react-native-responsive-ui';
import { BottomNavigation } from 'react-native-paper';
import HomePage from './screen/Home/Homepage';

export default class App extends React.Component {
  render() {
  return (
    <View style = {{flex: 1}}>
      <BottomTab />
     
    </View>
  );
  }
}

