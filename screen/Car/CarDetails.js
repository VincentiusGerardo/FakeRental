import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Image, Button, Input, Card, Icon, Header } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';

export default class CarDetails extends Component{
    render(){
        return(
         <ScrollView vertical={true}>   
            <View style = {{flex : 1}}>
                  <Header
                    backgroundColor = '#2f4461'
                    leftComponent={<Button 
                        title = 'Back'
                        onPress =  {() => this.props.navigation.navigate('CarPage')}
                    />}
                    centerComponent={{ text: 'Detail Mobil', style: { color: '#fff' } }}
                    />

                   <Image 
                      source={require('../../images/banner1.png')}
                      style={{height : hp('30%'), width : wp('100%')}}  
                   />

                <View style={{height: 50,marginTop : '5%',flexDirection:'row',  justifyContent: 'space-between',}}>
                    <Text style={{fontWeight: 'bold', paddingLeft: '5%'}}>Lorem ipsum</Text>  
                    <Text style={{paddingRight: '5%'}}>Doler sit oppai</Text>
                </View>                   


                <View style={{marginTop: '-5%'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 30,paddingLeft: '5%',}}>Detail</Text>

                                        <View style={{height: 50,marginTop : '2%',flexDirection:'row',  justifyContent: 'space-between',}}>
                                            <Text style={{fontWeight: 'bold', paddingLeft: '5%'}}>Jenis Mobil</Text>  
                                            <Text style={{paddingRight: '5%'}}>Doler sit oppai</Text>
                                        </View>  
                                        
                                        <View style={{height: 50,marginTop : '2%',flexDirection:'row',  justifyContent: 'space-between',}}>
                                        <Text style={{fontWeight: 'bold', paddingLeft: '5%'}}>Kapasitas</Text>  
                                        <Text style={{paddingRight: '5%'}}>Doler sit oppai</Text>
                                    </View>   

                                    <View style={{height: 50,marginTop : '2%',flexDirection:'row',  justifyContent: 'space-between',}}>
                                        <Text style={{fontWeight: 'bold', paddingLeft: '5%'}}>Warna</Text>  
                                        <Text style={{paddingRight: '5%'}}>Doler sit oppai</Text>
                                    </View>   

                                    <View style={{height: 50,marginTop : '2%',flexDirection:'row',  justifyContent: 'space-between',}}>
                                        <Text style={{fontWeight: 'bold', paddingLeft: '5%'}}>Bahan Bakar</Text>  
                                        <Text style={{paddingRight: '5%'}}>Doler sit oppai</Text>
                                    </View>   

                                    <View style={{height: 50,marginTop : '2%',flexDirection:'row',  justifyContent: 'space-between',}}>
                                        <Text style={{fontWeight: 'bold', paddingLeft: '5%'}}>Bagasi</Text>  
                                        <Text style={{paddingRight: '5%'}}>Doler sit oppai</Text>
                                    </View> 

                                     <View style={{height: 50,marginTop : '2%',flexDirection:'row',  justifyContent: 'space-between',}}>
                                        <Text style={{fontWeight: 'bold', paddingLeft: '5%'}}>Tahun Keluaran</Text>  
                                        <Text style={{paddingRight: '5%'}}>2001</Text>
                                    </View>   
                        <Button title = 'Borrow'
                        buttonStyle ={{backgroundColor:'#ee4035'}}
                        onPress =  {() => this.props.navigation.navigate('Order')}    >
                        </Button>
                </View>
            </View>
        </ScrollView>    
        );
    }
}