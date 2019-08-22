import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Image, Button, Input, Card,Icon } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';

export default class Homepage extends Component {
    render() {
        return (
            <ScrollView vertical={true} scrollEventThrottle={16}>
               <View style={{height: 150, flex: 1}}>
                  <ScrollView horizontal={true} style={{marginTop : '10%'}}>  
                    <Card  containerStyle={{width: 120, height:70}}
                    image={require('../../images/033420f314fa8f201f7e03e5eb9d7a652eea5664e71eeb7a2de01c8c9776b006.jpg')}>
                        
                    </Card>

                    <Card  containerStyle={{width: 120, height:100,}}
                    image={require('../../images/banner1.png')}
                    imageStyle = {{width : wp('50%'), height :hp('50%')}}>
                    </Card>

                    <Card  containerStyle={{width: 120, height:70}}
                    image={require('../../images/033420f314fa8f201f7e03e5eb9d7a652eea5664e71eeb7a2de01c8c9776b006.jpg')}>
                        
                    </Card>

                    <Card  containerStyle={{width: 120, height:70}}
                    image={require('../../images/033420f314fa8f201f7e03e5eb9d7a652eea5664e71eeb7a2de01c8c9776b006.jpg')}>
                        
                    </Card>

                    <Card  containerStyle={{width: 120, height:70}}
                    image={require('../../images/banner1.png')}>
                        
                    </Card>

                    <Card  containerStyle={{width: 120, height:70}}
                    image={require('../../images/033420f314fa8f201f7e03e5eb9d7a652eea5664e71eeb7a2de01c8c9776b006.jpg')}>
                        
                    </Card>
                    </ScrollView>   
               </View>
                
            </ScrollView>
        );
    }
}