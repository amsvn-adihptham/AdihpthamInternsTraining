import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Button, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Task1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }

    
  }

  render() {
    return (
      <View style={{flex:1, backgroundColor:'black', alignItems:'center'}} >
        <Image style={{width:100, height:100, margin:'8%'}}
        source={require('./Picture3.png')}/>
        <Text style={{color:'white', margin:'8%'}}>WELCOME TO ADIHPTHAM</Text>
        <View style={{flexDirection:'row', borderColor:'white', borderWidth:1,marginTop:5, width:'80%', color:'white'}}>
        <Icon name="user" size={25} color='white' style={{margin:10}}/> 
        <TextInput style={{color:'white', width:'50%'}}/>
        </View>
        <View style={{flexDirection:'row', borderColor: 'white',marginTop:25, marginBottom:25, borderWidth: 1, width:'80%', color:'white'}}>
        <Icon name="lock" size={25} color='white' style={{margin:10}}/> 
        <TextInput style={{color:'white', width:'50%'}}
          secureTextEntry={true} />
         </View>
         <View style={{margin:'5%', width:'50%', marginBottom:10}}>
        <Button title="Login" color='steelblue' />
        </View>
        <TouchableOpacity onPress={this.onPress}>
          <Text style={{color:'white', margin:2}}> Forgot Password?
            </Text> 
            </TouchableOpacity> 
      </View>
    );
  }
}
