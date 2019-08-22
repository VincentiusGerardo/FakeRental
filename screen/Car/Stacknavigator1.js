import React, {Component} from 'react';
import {Text, View, TouchableOpacity, ScrollView,} from 'react-native';
import {Image, Button, Input, Icon } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {createStackNavigator, createAppContainer, createSwitchNavigator,} from 'react-navigation';
import CarPage from './CarPage';
import CarDetails from './CarDetails';

import Order from './Order';

  
const MainNavigator = createSwitchNavigator({
    CarPage: {screen: CarPage},
    CarDetails : {screen: CarDetails},
    Order : {screen: Order},
    
  },
    {
      initialRouteName : 'CarPage'
    }
  );
  
  export default createAppContainer (MainNavigator);
  