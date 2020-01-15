import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Button, TextInput, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Task1 extends Component {
  constructor(props) {
    super(props);
    this.state = {password:''
    };
    
  }

  render() {
    return (
      <View style={{flex:1, backgroundColor:'black', alignItems:'center', borderRadius:15, borderWidth:2}} >

        <Image style={{width:125, height:125,margin:20, marginBottom:'2%'}}
        source={require('./Picture3.png')}/>

        <Text style={{color:'white', margin:'8%', fontWeight:'bold', fontSize:20, textDecorationLine:'underline'}}>Welcome To ADIHPTHAM</Text>

        <View style={{flexDirection:'row', borderColor:'white', borderWidth:1,marginTop:5, marginBottom:15, width:'80%', color:'white'}}>
        <Icon name="user" size={25} color='white' style={{margin:10}}/> 
        <TextInput 
        placeholder='Number'
        placeholderTextColor='white'
        keyboardType={'numeric'}
        style={{color:'white', width:'50%'}}/>
        </View>

        <View style={{flexDirection:'row', borderColor:'white', borderWidth:1,marginTop:5, marginBottom:35, width:'80%', color:'white'}}>
        <Icon name="lock" size={25} color='white' style={{margin:10}}/> 
        <TextInput style={{color:'white', width:'80%'}}
          placeholder='Password'
          placeholderTextColor='white'
          secureTextEntry={true}
                    value={this.state.password}
                    onChangeText={ (password) => this.setState({ password }) }
                />
        <Icon name="eye" size={25} color='grey' style={{margin:10, marginLeft:'-4%'}}/>
         </View>

         <View style={{margin:'5%', width:'80%', marginBottom:8}}>
        <Button title="Login" color='steelblue' 
        onPress={()=>{alert('You have successfully logged in!');}}/>
        </View>

        <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={this.onPress}>
          <Text style={{color:'white',marginLeft:'33%'}}> Forgot Password?
            </Text > 
          </TouchableOpacity> 

          <TouchableOpacity onPress={this.onPress}>
          <Text style={{color:'white'}}> Sign Up
            </Text>
          </TouchableOpacity>
          </View>

      </View>
    );
  }
}
