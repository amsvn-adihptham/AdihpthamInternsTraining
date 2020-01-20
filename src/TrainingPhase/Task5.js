import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import Icon  from 'react-native-vector-icons/FontAwesome';
import ImageSlider from 'react-native-image-slider';
import { Avatar } from 'react-native-paper';
import { Container, Content, Header, Left,Right, Body, Button, Footer, FooterTab, Card } from 'native-base';

export default class Task5 extends Component {
  constructor(props) {
    super(props);
    this.state = { password:''
    };
  }

  render() {
    return (

        <Container>
            <Header>
            <Left>
            <Button transparent>
              <Icon name='arrow-left' style={{fontSize:20, color:'white'}}/>
            </Button>
          </Left>
          
          <View style={{flexDirection:'row', borderColor:'white', height:40 , marginTop:8, marginRight:-55, marginBottom:10 , backgroundColor:"white", width:'75%'}}>
        <Icon name="search" size={20} color='black' style={{margin:10}}/> 
        <TextInput 
        placeholderTextColor='black'
        style={{color:'white', width:'75%'}}/>
        </View>
              
            
            <Right>
            <Button transparent>
              <Icon name='bell' style={{fontSize:18, color:'white'}}/>
            </Button>
            </Right>
            </Header>
<ScrollView>
            <Card style={{height:120, width:'95%',marginLeft:9 }}>
            <ImageSlider 
            loopBothSides
            autoPlayWithInterval={3000}
            images={[
    'http://placeimg.com/640/480/any',
    'https://placeimg.com/640/640/nature',
    'https://placeimg.com/640/640/beer',
    'https://placeimg.com/640/640/people',
      'https://placeimg.com/640/640/animals',
      "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree"
  ]}
 />
  </Card>

  <View style={{flexDirection:'row', marginTop:10, marginLeft:30}}>
      <Button transparent>
  <Avatar.Icon size={40} icon="folder" />
  <Text style={{marginTop:75, marginLeft:-38}}>
      Folder
  </Text>
  </Button>

  <Button transparent style={{marginLeft:20}}>
  <Avatar.Icon size={40} icon="camera" style={{marginLeft:20}}/>
  <Text style={{marginTop:75, marginLeft:-43}}>
      Camera
  </Text>
  </Button>

  <Button transparent style={{marginLeft:40}}>
  <Avatar.Icon size={40} icon="settings" />
  <Text style={{marginTop:75, marginLeft:-44}}>
      Settings
  </Text>
  </Button>

  <Button transparent style={{marginLeft:40}}>
  <Avatar.Icon size={40} icon="home" />
  <Text style={{marginTop:75, marginLeft:-38}}>
      Home
  </Text>
  </Button>
          </View>

          <Text style={{marginTop:45, marginBottom:5, fontSize:18, fontWeight:'bold'}}>
              Most Popular
          </Text>

            <View style={{flexDirection:'row', marginLeft:18}}>
                <TouchableOpacity>
          <Card style={{height:60, borderLeftWidth:5, borderColor:'black', width:140}}>
              <Text style={{fontSize:17, marginLeft:10}}>
                  Product   Banner
              </Text>
          </Card>
          </TouchableOpacity>

            <TouchableOpacity>
          <Card style={{height:60, width:140, borderLeftWidth:5, borderColor:'skyblue', marginLeft:40}}>
              <Text style={{fontSize:17, marginLeft:10}}>
                  Product   Banner
              </Text>
          </Card>
          </TouchableOpacity>
          </View>

            <View style={{flexDirection:'row', marginLeft:18}}>
                <TouchableOpacity>
          <Card style={{height:60, borderLeftWidth:5, borderColor:'red', width:140}}>
              <Text style={{fontSize:17, marginLeft:10}}>
                  Product   Banner
              </Text>
          </Card>
            </TouchableOpacity>

            <TouchableOpacity>
                <Card style={{height:60, width:140, marginLeft:40, borderLeftWidth:5, borderColor:'green'}}>
              <Text style={{fontSize:17, marginLeft:10}}>
                  Product   Banner
              </Text>
          </Card>
          </TouchableOpacity>
          </View>

          <Text style={{fontSize:18, fontWeight:'bold', marginTop:15, marginBottom:5}}>
              Best Seller
          </Text>

          <TouchableOpacity>
              <Card style={{width:'90%', marginLeft:18, height:75, marginBottom:'0%', borderLeftWidth:5, borderColor:"gold"}}>
                  <Text style={{fontSize:25, marginLeft:60, marginTop:15}}>
                      Promotion Banner
                  </Text>
              </Card>
          </TouchableOpacity>

          <TouchableOpacity>
              <Card style={{width:'90%', marginLeft:18, height:75, marginBottom:'0%', borderLeftWidth:5, borderColor:"steelblue"}}>
                  <Text style={{fontSize:25, marginLeft:60, marginTop:15}}>
                      Promotion Banner
                  </Text>
              </Card>
          </TouchableOpacity>

          <Text style={{fontSize:18, fontWeight:'bold', marginTop:20, marginBottom:5}}>
              Items Viewed Before
          </Text>

          <ScrollView >
         <View style={{flexDirection:'row', flex:4}}>
             <TouchableOpacity>
              <Card style={{width:'90%',flexDirection:'row', marginLeft:18, height:75, marginBottom:'0%', borderLeftWidth:5, borderColor:"purple"}}>
                  <Text style={{fontSize:25, marginLeft:60, marginTop:15}}>
                      Slide Banner
                  </Text>
              </Card>
          </TouchableOpacity>

          <TouchableOpacity>
              <Card style={{width:'90%',flexDirection:'row', marginLeft:18, height:75, marginBottom:'0%', borderLeftWidth:5, borderColor:"orange"}}>
                  <Text style={{fontSize:25, marginLeft:60, marginTop:15}}>
                      Slide Banner
                  </Text>
              </Card>
          </TouchableOpacity>

          <TouchableOpacity>
              <Card style={{width:'90%', marginLeft:18,flexDirection:'row', height:75, marginBottom:'0%', borderLeftWidth:5, borderColor:"pink"}}>
                  <Text style={{fontSize:25, marginLeft:60, marginTop:15}}>
                      Slide Banner
                  </Text>
              </Card>
          </TouchableOpacity>

          <TouchableOpacity>
              <Card style={{width:'90%', marginLeft:18, height:75,flexDirection:'row', marginBottom:'0%', borderLeftWidth:5, borderColor:"grey"}}>
                  <Text style={{fontSize:25, marginLeft:60, marginTop:15}}>
                      Slide Banner
                  </Text>
              </Card>
          </TouchableOpacity> 

         

</View>
</ScrollView>


            <Content/>
            </ScrollView>

            <Footer>
                <FooterTab>

                <Button>
              <Icon name="compass" style={{fontSize:20}} />
              <Text>Dashboard</Text>
              </Button>              
              <Button style={{marginLeft:15}}>
              <Icon name="search" style={{fontSize:20}}/>
              <Text>Categories</Text>
              </Button>              
              <Button>
              <Icon name="shopping-cart" style={{fontSize:20}}/>
              <Text>Cart</Text>
              </Button>              
              <Button>
              <Icon name="user" style={{fontSize:20}}/>
              <Text>Profile</Text>
              </Button>              

                </FooterTab>
            </Footer>
        </Container>
    
      
    );
  }
}
