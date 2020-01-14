import React, { Component } from 'react';
import { View, Text, Button, Alert,TextInput,TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'


export default class Main extends Component {
  
  render() {
    return (
      <View style={{flex:1, backgroundColor: 'black', alignItems:'center'}} >
         <Image style={{width:100, height:100, marginTop:20}} source={require('./Picture3.png')} ></Image>
        <Text style={{color:'white', marginTop:50}}>Welcome to Adihptham</Text>
       <View style={{flexDirection:'row',borderColor:'white', borderWidth:1, marginTop:40, width:'80%',color:'white'}}>
       <Icon name="user" size={30} color='white' style={{margin:10}}/>
         <TextInput
      style={{ width:'80%', borderColor: 'white'}}
      onChangeText={text => onChangeText(text)}
    />
    </View>
    <View style={{flexDirection:'row',borderColor:'white', borderWidth:1, marginTop:30, width:'80%',color:'white'}}>
    <Icon name="lock" size={30} color='white' style={{margin:10}} />
      <TextInput
      style={{ width:'80%', borderColor: 'white' }}
      onChangeText={text => onChangeText(text)}
      secureTextEntry={true}/>
    </View>

        <View style={{margin:'5%', width:'40%', marginBottom:30, marginTop:50}}>
      
         <Button
          title="LOGIN"
          color="skyblue"
          onPress={() => Alert.alert('Button with adjusted color pressed')}
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
