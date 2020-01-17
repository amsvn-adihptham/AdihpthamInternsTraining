import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Header, Footer, FooterTab, Container, Left, Body,  Card, Button, Title, Right, Content, CardItem } from 'native-base';
import Icon  from 'react-native-vector-icons/FontAwesome';
import UserAvatar  from 'react-native-user-avatar';

export default class Task4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Container style={{backgroundColor:'grey'}}>
          <Header style={{backgroundColor:'steelblue'}}>
              <Left>
                  <Button transparent>
                    <Icon name="arrow-left" style={{fontSize:20}}/>
                  </Button>
                </Left>
                <Body>
                    <Title style={{color:'black', fontWeight:'bold'}}>Profile</Title>
                </Body>
                <Right>
                    <Icon name="pencil" style={{fontSize:20}}/>
                </Right>
          </Header>

        
          <Card style={{marginBottom:20, height:130, width:'95%', marginLeft:9, marginTop:8}}>
              <View style={{flexDirection:'row', marginBottom:5}}>
              <UserAvatar size="75" name="Pooja Polampalli"/>
          <Text style={{fontSize:25, marginTop:25, marginLeft:25, fontWeight:'bold', fontStyle:'italic'}}> Pooja Polampalli</Text>
          </View>
          <View style={{flexDirection:'row'}}>
          <Button style={{width:'30%', marginLeft:40, backgroundColor:'grey'}}>
              <Title style={{marginLeft:7, fontSize:17, color:'black'}}>
                  View Profile
              </Title>
          </Button>
          <Button style={{width:'24%', marginLeft:80, backgroundColor:'green'}}>
              <Title style={{marginLeft:8, fontSize:17, color:'black'}}>
                  Add User
              </Title>
          </Button>
          </View>

          </Card>

          <Card>
              <View style={{flexDirection:'row'}}>
              <UserAvatar size="45" name="Syeda Maria Anjum" />
              <Text style={{marginTop:12, marginLeft:15, fontSize:15, marginRight:20, fontWeight:'bold', fontStyle:'italic'}}> Syeda Maria Anjum</Text>

          <Button style={{width:'15%', marginRight: 10, marginLeft:10, marginTop:1, marginBottom:1, backgroundColor:'red'}}>
            <Icon name="arrow-down" style={{marginRight:-1, marginLeft:10}}/>
            <Text style={{color:'black', marginRight:7}}>
                -16
            </Text>
          </Button>
          <Button style={{width:'15%', marginTop:1, backgroundColor:'grey'}}>
            <Icon name="female" style={{marginLeft:20, fontSize:20}}/>
          </Button>
              </View>
          </Card>

          <Card>
          <View style={{flexDirection:'row'}}>
              <UserAvatar size="45" name="P Trupthi" />
              <Text style={{marginTop:12, marginLeft:15, marginRight:89, fontSize:15, fontWeight:'bold', fontStyle:'italic'}}> P Trupthi</Text>

          <Button style={{width:'15%', marginRight: 10, marginLeft:10, marginTop:1, marginBottom:1, backgroundColor:'green'}}>
            <Icon name="arrow-up" style={{marginRight:1, marginLeft:9}}/>
            <Text style={{color:'black', marginRight:6}}>
                +16
            </Text>
          </Button >
          <Button style={{width:'15%', marginTop:1, marginBottom:1, backgroundColor:'grey'}}>
            <Icon name="female" style={{marginLeft:20, fontSize:20}}/>
          </Button>
              </View>
          </Card>

          <Card>
          <View style={{flexDirection:'row'}}>
              <UserAvatar size="45" name="Praveen Deshmukh" />
              <Text style={{marginTop:12, marginLeft:15, marginRight:20, fontSize:15, fontWeight:'bold', fontStyle:'italic'}}> Praveen Deshmukh</Text>

          <Button style={{width:'15%', marginRight: 10, marginLeft:11, marginTop:1, marginBottom:1, backgroundColor:'green'}}>
            <Icon name="arrow-up" style={{marginRight:1, marginLeft:9}}/>
            <Text style={{color:'black', marginRight:6}}>
                +16
            </Text>
          </Button >
          <Button style={{width:'15%', marginTop:1, marginBottom:1, backgroundColor:'grey'}}>
            <Icon name="male" style={{marginLeft:21, fontSize:20}}/>
          </Button>
              </View>
          </Card>

          <Card>
              <View style={{flexDirection:'row'}}>
              <UserAvatar size="45" name="Pramod Kumar Naik" />
              <Text style={{marginTop:12, marginLeft:15, fontSize:15, marginRight:20, fontWeight:'bold', fontStyle:'italic'}}>Pramod Kumar Naik</Text>

          <Button style={{width:'15%', marginRight: 10, marginLeft:10, marginTop:1, marginBottom:1, backgroundColor:'red'}}>
            <Icon name="arrow-down" style={{marginRight:-1, marginLeft:10}}/>
            <Text style={{color:'black', marginRight:7}}>
                -16
            </Text>
          </Button>
          <Button style={{width:'15%', marginTop:1, backgroundColor:'grey'}}>
            <Icon name="male" style={{marginLeft:21, fontSize:20}}/>
          </Button>
              </View>
          </Card>

          <Content/>
          
          <View style={{alignItems:'center', marginBottom:'2%'}}>
              <TouchableOpacity>
              <Icon name="sign-out" style={{marginLeft: 18, fontSize:20}}/>
              <Text style={{fontWeight:'bold', fontSize:15}}>Signout</Text>
              </TouchableOpacity>
          </View>

          <Footer>
              <FooterTab style={{backgroundColor:'steelblue'}}>
              <Button>
              <Icon name="home" style={{fontSize:20}}/>
              <Text>Home</Text>
              </Button>
            <Button >
              <Icon name="bars" style={{fontSize:20}}/>
              <Text>Menu</Text>
            </Button>
            <Button>
              <Icon name="camera" style={{fontSize:20}}/>
              <Text>Camera</Text>
            </Button>
            <Button style={{borderWidth:2,borderColor:'red'}}>
              <Icon name="user" style={{fontSize:20}} />
              <Text>User</Text>
            </Button>
            </FooterTab>
          </Footer>
      </Container>
    );
  }
}
