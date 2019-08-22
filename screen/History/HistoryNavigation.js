import React, {Component} from 'react';
import {Text, View, TouchableOpacity, ScrollView,} from 'react-native';
import {Image, Button, Input, Icon } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {createStackNavigator, createAppContainer, createSwitchNavigator,} from 'react-navigation';
import History from './History'
import HistoryDetail from './HistoryDetail';
  
const MainNavigator = createSwitchNavigator({
    History: {screen: History},
    HistoryDetail : {screen: HistoryDetail},
    
    
  },
    {
      initialRouteName : 'History'
    }
  );
  
  export default createAppContainer (MainNavigator);
  