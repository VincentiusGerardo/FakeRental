import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Image, Button, Input, Card, Icon, Header } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';


export default class CarPage extends Component {
    render() {
        return (

            <ScrollView vertical={true} >
                <Header
                    backgroundColor = '#2f4461'
                    centerComponent={{ text: 'List Mobil', style: { color: '#fff' } }}
                />
                
                <View style={{ flex: 1, }}>
                <TouchableOpacity
                  onPress =  {() => this.props.navigation.navigate('CarDetails')}
                >
                    <Card
                        image={require('../../images/033420f314fa8f201f7e03e5eb9d7a652eea5664e71eeb7a2de01c8c9776b006.jpg')}
                        containerStyle={{ borderRadius: 20, elevation:6 ,shadowOffset:{height :10, }, shadowRadius: 5, shadowColor : '#ffff', shadowOpacity: 1, }}
                    >

                        <View style={{ flexDirection: 'row', flex: 2, }}>
                            <Text>Lamborghini</Text>
                            <Text style={{ marginLeft: '60%' }}>Oppai</Text>
                        </View>

                        <View style={{ flexDirection: 'row', flex: 2, borderTopWidth: 2, marginTop: '4%' }}>
                            <Text style={{ paddingTop: '5%' }}>Kapasistas</Text>
                            <Text style={{ marginLeft: '50%', paddingTop: '5%' }}>Harga Sewa</Text>
                        </View>

                    </Card>   
                    </TouchableOpacity>      
                </View>
                
            </ScrollView>
        );
    }
}