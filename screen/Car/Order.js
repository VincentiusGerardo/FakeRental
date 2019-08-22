import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TouchableHighlight, Platform, Picker } from 'react-native';
import { Image, Button, Input, Card, Icon, Header, CheckBox } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';
import DateTimePicker from 'react-native-modal-datetime-picker';
import SelectPicker from 'react-native-select-picker';


export default class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDateTimePickerVisible: false

        };
    }

    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
    };

    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    };

    handleDatePicked = date => {
        console.log('Date has been picked', date)
        this.hideDateTimePicker();


    };



    render() {

        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#e3e2e2' }}>
                <Header
                    backgroundColor='#2f4461'
                    centerComponent={{ text: 'List Mobil', style: { color: '#fff' } }}
                    leftComponent={<Button
                        title='Back'
                        onPress={() => this.props.navigation.navigate('CarDetails')}
                    />}
                />

                <View style={{ flex: 2, backgroundColor: '#ffff', height: hp(30) }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 30, marginLeft: '3%' }}>Data Diri</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: '5%', marginLeft: '3%' }}>
                        <Text> Email</Text>
                        <Text> Anasfandi@gmail.com </Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: '5%', marginLeft: '3%' }}>
                        <Text> Phone Number</Text>
                        <Text> 085712345599</Text>
                    </View>

                    {/* camera */}
                    <View style={{ flexDirection: 'row', marginTop: '10%', marginLeft: '20%' }}>
                        <Button title='Camera' onPress={() => this.props.navigation.navigate('CameraScreen')} />

                        <View style={{ width: 100, height: hp(5), borderWidth: 2, marginLeft: '20%', }}>
                            <Text>KTP</Text>
                        </View>

                    </View>
                </View>

            {/* Booking information             */}
                <View style={{ flex: 3, marginTop: '7%', height: hp(40), backgroundColor: '#ffff' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: '3%' }}>Booking Information</Text>

                    <View style={{ flexDirection: 'row', marginLeft: '3%', paddingTop: '3%' }}>
                        <Image
                            style={{ width: wp('40%'), height: hp('10%') }}
                            source={require('../../images/banner1.png')}
                        />

                        <View style={{ width: wp(50), height: hp(20), marginLeft: '3%', marginTop: '-2%' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: '5%', marginLeft: '3%', borderBottomWidth: 1, borderBottomColor: '#e3e2e2' }}>
                                <Text style={{ fontSize: 9 }}> Nama Mobil</Text>
                                <Text style={{ fontSize: 9 }}> Mitshubishi Lancer </Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: '5%', marginLeft: '3%', borderBottomWidth: 1, borderBottomColor: '#e3e2e2' }}>
                                <Text style={{ fontSize: 10 }}> Jenis Mobil</Text>
                                <Text style={{ fontSize: 10 }}> Sedan </Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: '5%', marginLeft: '3%', borderBottomWidth: 1, borderBottomColor: '#e3e2e2' }}>
                                <Text style={{ fontSize: 10 }}> Harga</Text>
                                <Text style={{ fontSize: 10 }}> Rp. 8.000.000 </Text>
                            </View>
                            <CheckBox
                                center
                                title='Menggunakan Supir'
                                textStyle={{ fontSize: 9 }}
                            // checked={this.state.checked}
                            />
                        </View>

                    </View>
                    <Button title="Select booking date" onPress={this.showDateTimePicker} buttonStyle={{ width: wp(50), marginLeft: '25%' }} />
                    <DateTimePicker
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this.handleDatePicked}
                        onCancel={this.hideDateTimePicker}
                    />
                    <Text>
                        {this.showDate}
                    </Text>

                </View>
             {/* Booking information             */}

             {/* Metode Pembayaran */}
                <View style={{ flex: 3, marginTop: '7%', height: hp(43), backgroundColor: '#ffff' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: '3%' }}>Metode Pembayaran</Text>

                    <View style={{  justifyContent: 'space-between', paddingTop: '5%', marginLeft: '3%' }}>
                    <Text> Metode Pembayaran</Text> 
                        <Picker
                            selectedValue={this.state.language}
                            style={{  width: 200 }}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({ language: itemValue })
                            }>
                            <Picker.Item label="Rekening BCA" value="Rekening BCA" />
                            <Picker.Item label="Rekening Mandiri" value="Rekening Mandiri" />
                            <Picker.Item label="Rekening BNI" value="Rekening BNI" />
                        </Picker>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: '5%', marginLeft: '3%' }}>
                        <Text> Biaya supir</Text>
                        <Text> Rp. 10000000 </Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: '5%', marginLeft: '3%' }}>
                        <Text> Biaya Layanan</Text>
                        <Text> Rp. 200000</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: '5%', marginLeft: '3%' }}>
                        <Text> Total Biaya</Text>
                        <Text> Rp. 300000 </Text>
                    </View>
                    <Button title="Proceed" buttonStyle={{ marginTop: '5%', backgroundColor: '#EB2125' }}
                        titleStyle={{ paddingBottom: '5%' }}
                    />
                </View>
            {/* Metode Pembayaran     */}
            </ScrollView>
        );
    }

}
