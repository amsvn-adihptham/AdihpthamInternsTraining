import React, { Component } from 'react';
import { View, TextInput,Text } from 'react-native';
import{Avatar,} from 'react-native-elements';
import { Container,SafeAreaView, Header, Content, Title, Footer, Icon, FooterTab, Left, Body, Right, Button } from 'native-base';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
 
 
var radio_props = [
  {label: 'Male             ', value: 1 },
  {label: 'Female', value: 0 }
];
 
export default class Task3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Container>

        <Header span style={{backgroundColor:'maroon'}}>
          <Left>
            <Button transparent>
              <Icon name='md-arrow-dropleft' style={{marginTop:"70%"}}/>
            </Button>
          </Left>
          <Body style={{ alignItems: 'center',marginLeft:'20%' }}>
            <Title>Edit Profile</Title>
            <Avatar rounded title="M" size="medium" />
            <Text>Change Photo</Text>
          </Body>
          <Right>
              <View style={{marginTop:"10%",width:"50%"}}>
          <Button style={{backgroundColor:'maroon'}}
  onPress={() => {
    alert('You have successfully saved information!');
  }}>

<Text style={{color:'white',marginLeft:"2%"}}> SAVE</Text>
    </Button>
</View>
          </Right>
        </Header> 
        <View>
                    <View style={{flexDirection:"row"}}>
                    <View style={{marginLeft:"10%",marginTop:"10%"}}>
                        <Text>First Name</Text>
                        <TextInput placeholder="Fname" />
                    </View>
                    <View style={{marginLeft:"40%",marginTop:"10%"}}>
                        <Text>Last name</Text>
                        <TextInput placeholder="Lname" style={{justifyContent: 'flex-end',}} />
                    </View>
                </View>
                <View style={{ backgroundColor:"skyblue"}}>
                    <Text style={{justifyContent:"center",marginTop:"5%", marginLeft:"10%"}}>EmailID</Text>
                    <TextInput placeholder="Email" marginLeft="10%" marginBottom="5%" keyboardType="email-address" />
                    </View>
                    <View>
                    <Text style={{justifyContent:'center',marginTop:"5%", marginLeft:"10%"}}>Phone Number</Text>
                    <TextInput placeholder="PhoneNo." marginLeft="10%" marginBottom="5%"keyboardType="numeric"/>
                    </View>
                    <View>
                    <Text style={{justifyContent:'center',marginTop:"5%",marginBottom:"5%", marginLeft:"10%"}}>Gender</Text>
                    <View style={{marginLeft:"10%"}}>
        <RadioForm
        formHorizontal={true}
          radio_props={radio_props}
          initial={0}
          onPress={(value) => {this.setState({value:value})}}
        />
      </View>
                    </View>
              
                   
                    </View>
    
      </Container>
    
    );
  }
}
