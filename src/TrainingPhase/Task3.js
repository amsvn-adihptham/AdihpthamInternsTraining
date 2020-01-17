import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, SafeAreaView, StyleSheet, Alert } from 'react-native';
import { Header, Footer, FooterTab, Right, Left, Body, Button, Container, Title, Card, CardItem, Content } from 'native-base';
import  UserAvatar from 'react-native-user-avatar';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Task3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
       return (
      <Container>
          <Header style={{backgroundColor:'maroon'}}>
          <Left>
            <Button transparent>
              <Icon name='bars' style={{fontSize:25}}/>
            </Button>
          </Left>
          <Body>
              <Title> Hello Pooja!</Title>
              <TouchableOpacity onPress={this.onPress}>
                <Text style={{color:'white'}}> Edit Profile
                </Text > 
                </TouchableOpacity> 
            </Body>
            <Right>
               <UserAvatar size="38" name="P"/>    
            </Right>
          </Header>
          
          <Content>
            
        <Card>
             <CardItem>
                <Icon name="shopping-bag" style={{fontSize:20}}/>
                <TouchableOpacity style={{flexDirection:'row'}}>
              <Text style={{marginLeft:10, fontSize:20}}>Purchase History</Text>
              
                <Icon name="arrow-right" style={{marginLeft:120, fontSize:15, marginTop:8}}/>
              
              </TouchableOpacity>
        </CardItem>
        </Card>
        

        <Card>
        <CardItem>
              <Icon name="gift" style={{fontSize:25}} />
              <TouchableOpacity style={{flexDirection:'row'}}>
              <Text style={{marginLeft:10, fontSize:20}}>Rewards</Text>
               <Icon name="arrow-right" style={{marginLeft:193, fontSize:15, marginTop:8}} />
            
              </TouchableOpacity>
              </CardItem>
        </Card>

        <Card>
             <CardItem>
              <Icon name="cog" style={{fontSize:25}} />
              <TouchableOpacity style={{flexDirection:'row'}}>
              <Text style={{marginLeft:10, fontSize:20}}>Account and Settings</Text>
            
                <Icon name="arrow-right" style={{marginLeft:80, fontSize:15, marginTop:8}}/>
            
              </TouchableOpacity>
              </CardItem>
        </Card>
                
        <Card>
             <CardItem>
              <Icon name="sun-o" style={{fontSize:25}} />
              <TouchableOpacity style={{flexDirection:'row'}}>
              <Text style={{marginLeft:10, fontSize:20}}>Offers</Text>
              
                <Icon name="arrow-right" style={{marginLeft:212, fontSize:15, marginTop:8}} />
              
              </TouchableOpacity>
              </CardItem>
        </Card>

        <Card> 
            <CardItem>
              <Icon name="google-wallet" style={{fontSize:25}} />
              <TouchableOpacity style={{flexDirection:'row'}}>
              <Text style={{marginLeft:10, fontSize:20}}>Gift Card</Text>
              
                <Icon name="arrow-right" style={{marginLeft:189, fontSize:15, marginTop:8}}/>
              
              </TouchableOpacity>
              </CardItem>
        </Card>

        <Card>
             <CardItem>
              <Icon name="headphones" style={{fontSize:25}}/>
              <TouchableOpacity style={{flexDirection:'row'}}>
              <Text style={{marginLeft:10, fontSize:20}}>Help and Support</Text>
              
                <Icon name="arrow-right" style={{marginLeft:113, fontSize:15, marginTop:8}} />
              
              </TouchableOpacity>
              </CardItem>
        </Card>

        </Content>
        
        <View style={{flexDirection:'row', marginBottom:60}}>
        <TouchableOpacity onPress={this.onPress}>
            <Text style={{marginLeft:13, color:'red', fontSize:18}}>
                Share
            </Text>
        </TouchableOpacity>

        <Text style={{marginLeft:35, marginRight:25, fontSize:18}}>
          |
        </Text>

        <TouchableOpacity onPress={this.onPress}>
            <Text style={{marginRight:'5%', marginLeft:'10%', color:'blue', fontSize:18}}>
                Rate Us
            </Text>
        </TouchableOpacity>

        <Text style={{marginRight:25, marginLeft:-7, fontSize:18}}>
          |
        </Text>

        <TouchableOpacity onPress={this.onPress}>
            <Text style={{color:'green', fontSize:18}}>
                Adihptham
            </Text>
        </TouchableOpacity>
        </View>
        <View style={{marginBottom:10, marginLeft:'33%'}}>
        <Text style={{fontSize:15}}> App Version 5.8.13</Text> 
        </View>

    </Container>
  );
}
}    
