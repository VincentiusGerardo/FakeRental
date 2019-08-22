import React, {Component} from 'react';
import {Text, View, TouchableOpacity, ScrollView,} from 'react-native';
import {Image, Button, Input, Icon } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import{createAppContainer} from 'react-navigation';
import HomePage from './Homepage';
import CarPage from '../Car/CarPage';
import History from '../History/HistoryNavigation';
import Switch from '../Car/Stacknavigator1';
import{createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

// Halaman yang bakal di tampilin dude
const CarSport = () =>(
        <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>ini car dude</Text>
        </View>
);



const bottomTab = createMaterialBottomTabNavigator({
    Home:{screen : HomePage,
        navigationOption:{
            tabBarLabel : 'Home',
            tabBarIcon: ({tintColor, activeColor}) => (
                <Icon name= "SportCar" size={30} color={tintColor} />
                )
        }
    },
    Car:{screen : Switch},
    History:{screen : History},
},
{
    shifting: false,
    activeColor: '#8890dd',
    inactiveColor: '#ffff',
    barStyle: {
      backgroundColor: '#2f4461',
      borderStyle: 'solid',
      borderColor: '#d0cfd0',
    },
}
)

export default createAppContainer (bottomTab);