import React, { Component } from 'react';
import { View, Text, Button, Alert,TextInput,TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'


export default class Main extends Component {
  
  render() {
    return (
      <View style={{flex:1, backgroundColor: 'black', alignItems:'center'}} >
         <Image style={{width:100, height:100}} source={require('./Picture3.png')} ></Image>
        <Text style={{color:'white'}}>Welcome to Adihptham</Text>
       <View style={{flexDirection:'row'}}>
       <Icon name="user" size={30} color='white'/>
         <TextInput
      style={{ height: '40%',width:'80%', borderColor: 'white', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
    />
    </View>
    <View style={{flexDirection:'row'}}>
    <Icon name="lock" size={30} color='white' />
      <TextInput
      style={{ height: '40%', width:'80%', borderColor: 'white', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
    />
    </View>


      
         <Button
          title="LOGIN"
          color="skyblue"
          onPress={() => Alert.alert('Button with adjusted color pressed')}
       /> 
      <TouchableOpacity>
       <Text style={{ color:'white', fontSize: 15 }}>
       Forgot password?
       </Text>
       </TouchableOpacity>

      </View>
    );
  }
}
