import React, {Component} from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {Image, Button, Input } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class Login extends Component{
    
    
    render(){
        return (
          
          <View style = {{ justifyContent:"center", maxHeight : '100%', alignItems : 'center', flexDirection : 'column' }}>
            <Image 
                source={require('../../images/logo2.png')}
                containerStyle={{marginTop : '20%'}}
            />
            <ScrollView vertical={true} showsVerticalScrollIndicator={false}>

            <Text h1 style = {{fontWeight:"bold", marginTop:'10%', textAlign: "center", paddingBottom: '5%' }}>Sign Up</Text>
            <Input
                placeholder = 'Nama'
                containerStyle = {{width : wp('70%'),}}
                errorStyle = {{color: 'red'}} 
                autoCompleteType = 'name'
            />
            <Input
                placeholder = 'Email'
                errorStyle = {{color : 'red'}}
                containerStyle = {{width : wp('70%')}}
                inputStyle = {{paddingTop : '10%', }}
                autoCompleteType = 'email'
            />
            <Input
                placeholder = 'Password'
                errorStyle = {{color : 'red'}}
                containerStyle = {{width : wp('70%')}}
                inputStyle = {{paddingTop : '10%', }}
                autoCompleteType = 'password'
                secureTextEntry = {true}
            />
             <Input
                placeholder = 'Confirm password'
                errorStyle = {{color : 'red'}}
                containerStyle = {{width : wp('70%')}}
                inputStyle = {{paddingTop : '10%', }}
                autoCompleteType = 'password'
                secureTextEntry = {true}
              />

            <Button
                type = 'solid'
                title = 'Login now'
                titleStyle = {{marginBottom : '10%'}}
                buttonStyle = {{marginTop : '10%',width : wp('70%'),  borderRadius : 30, height: hp('7%') }}
            />
            </ScrollView>
          </View>
            
        );
    }
}
