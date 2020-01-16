import React, { Component } from 'react';
import { View, Text, Button, Alert,TextInput,TouchableOpacity, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'


export default class Task01 extends Component {
  
  render() {
    return (
      <View style={{flex:1, backgroundColor: 'black', alignItems:'center'}} >
         <Image style={{width:100, height:100, marginTop:20}} source={require('./Picture3.png')} ></Image>
        <Text style={{color:'white', marginTop:50}}>Welcome to Adihptham</Text>
       <View style={{flexDirection:'row',borderColor:'white', borderWidth:1, marginTop:40, width:'90%',color:'white'}}>
       <Icon name="user" size={30} color='white' style={{margin:10}}/>
         <TextInput
         placeholder='Name'
         placeholderTextColor='white'
      style={{ width:'80%', borderColor: 'white'}}
      onChangeText={text => onChangeText(text)}
    />
    </View>
    <View style={{flexDirection:'row',borderColor:'white', borderWidth:1, marginTop:30, width:'90%',color:'white'}}>
    <Icon name="phone" size={30} color='white' style={{margin:10}} />
      <TextInput     
      placeholder='Phone No'
      placeholderTextColor='white'
      keyboardType="number-pad"
      style={{ width:'80%', borderColor: 'white' }}
      onChangeText={text => onChangeText(text)}
      secureTextEntry={true}/>
    </View>


    <View style={{flexDirection:'row',borderColor:'white', borderWidth:1, marginTop:30, width:'90%',color:'white'}}>
    <Icon name="lock" size={30} color='white' style={{margin:10}} />
      <TextInput     
      placeholder='Password'
      placeholderTextColor='white'
      style={{ width:'80%', borderColor: 'white' }}
      onChangeText={text => onChangeText(text)}
      secureTextEntry={true}/>
       <Icon name="eye" size={20} color='white' style={{margin:10}}/>
    </View>

        <View style={{margin:'5%', width:'40%', marginBottom:30, marginTop:50}}>
      
         <Button
          title="LOGIN"
          color="skyblue"
          onPress={() => Alert.alert('Login done successfully')}
       /> 
       </View>
      <TouchableOpacity>
       <Text style={{ color:'white',margin:2, fontSize: 15 }}>
       Forgot password?
       </Text>
       </TouchableOpacity>

      </View>
    );
  }
}
      const style= StyleSheet.create({container:{color:'white',fontSize:30,justifyContent:'center',
       paddingHorizontal:15,textAlign:'center',margin:'10%'},
      back:{backgroundColor:'black',flex:1, justifyContent:'center',alignItems:'center'}})