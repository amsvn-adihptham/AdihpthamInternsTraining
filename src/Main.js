import React, { Component } from 'react';
import { View, Text, Image, Style, TextInput, iconLeft, TouchableOpacity, Alert } from 'react-native';
import { Card, CardItem, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', }}>
        <Image style={{ width: 150, height: 150, margin:'5%'}}
          source={require('./images/Picture3.png')} />


        <Text style={{ color: 'green', margin:'5%' }}>WELCOME TO ADIHPTHAM</Text>
        <Card style={{ width: '90%' }}>
          <CardItem>


            <View style={{ top: '0%', left: '33%' }}>
              <Icon
                name="user"
                size={30}
                color={"white"}
                style={iconLeft}


              />
            </View>
            <TextInput
              style={{ height: 60, width: '80%', marginLeft: '5%' }}
              placeholder="Username"
              placeholderTextColor="red"
            />
          </CardItem>
          <CardItem>
            <View style={{ top: '0%', left: '33%' }}>
              <Icon
                name="lock"
                size={30}
                color={"white"}
                style={iconLeft}
              />
            </View>
            <TextInput
              style={{ height: 60, width: '80%', marginLeft: '5%' }}
              placeholder="Password"
              placeholderTextColor="red"
            />
          </CardItem>
        </Card>
        <View style={{margin:'5%'}}>
        <Button
          style={{width:120, justifyContent:'center'}}
          onPress={() => Alert.alert('Simple Button pressed')}
        ><Text>LogIn</Text></Button>
        </View>

        <TouchableOpacity>
          <Text style={{ color: 'orange', }}>forgot passwod</Text>
        </TouchableOpacity>


      </View>


    );
  }
}

export default Main;

