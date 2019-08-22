import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TouchableHighlight, Platform, Picker } from 'react-native';
import { Image, Button, Input, Card, Icon, Header, CheckBox } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';
import {createStackNavigator, createAppContainer, createSwitchNavigator,} from 'react-navigation';
import HistoryDetails from './HistoryDetail';


export default class History extends Component {
    
    render() {
        return (
            <ScrollView style={{ flex: 1,}}> 
             <Header
                    backgroundColor='#2f4461'
                    centerComponent={{ text: 'List Mobil', style: { color: '#fff' } }}
                    leftComponent={<Button
                        title='Back'
                       
                    />}
                />
            <View style={{ flex: 2, }}>
            <TouchableOpacity
                  onPress =  {() => this.props.navigation.navigate('HistoryDetail')}
                >
                <Card containerStyle={{ borderRadius: 10, }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text>Id Pemesanan</Text>
                        <Text> Nomor ID</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: '2%' }}>
                        <Text>Tanggal booking</Text>
                        <Text> Tanggalnya </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: '2%', borderBottomWidth: 2, borderBottomColor: '#e3dbdb' }}>
                        <Text>Status</Text>
                        <Text> Statusnya </Text>
                    </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: '2%',}}>
                    <Image
                        style={{ width: wp('40%'), height: hp('10%'), marginTop: '5%' }}
                        source={require('../../images/banner1.png')}
                    />

                    <View style={{marginRight: '10%'}}>
                    <Text>Total Pembayaran</Text>
                    <Text> Total </Text>
                    </View>
                </View> 
                </Card>
            </TouchableOpacity>    
            </View>
        </ScrollView>     
        );
    }
}


  