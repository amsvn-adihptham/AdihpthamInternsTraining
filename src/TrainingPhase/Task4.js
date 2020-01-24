import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Header, Footer, FooterTab, Toast, Container, Left, Body,  Card, Button, Title, Right, Content, CardItem } from 'native-base';
import Icon  from 'react-native-vector-icons/FontAwesome';
import UserAvatar  from 'react-native-user-avatar';
import Modal from 'react-native-modal';
import NumericInput from 'react-native-numeric-input';

export default class Task4 extends Component {
  
  

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

        <ScrollView>
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
          <View>
          <Button style={{width:'70%', marginLeft:61, backgroundColor:'green'}}
           onPress={this.props.toggleModal}>
              <Title style={{marginLeft:16, fontSize:17, color:'black'}}>
                  Add User
              </Title>

          </Button>

          <Modal isVisible={this.props.isModalVisible}>
          <View style={{ flex: 1 }}>
          <Card style={{width:'100%', height:'90%'}}>
            <View >
      <Card style={{flexDirection:'row', marginTop:40}}> 
        <TextInput
      placeholder='Name1'
      placeholderTextColor='black'
      onChangeText={(text)=>this.props.handleName1Change(text)}
      maxLength={20}
      style={{width:'30%'}}>
      </TextInput>
      <NumericInput 
           value={this.props.Age1} 
            onChange={value => this.props.handleAge1Change(value)}                     
            maxValue={60}
            totalWidth={100} 
            totalHeight={50} 
            iconSize={25}
            step={1}
            valueType='real'
            rounded 
            textColor='black' 
            iconStyle={{ color: 'white' }} 
            rightButtonBackgroundColor='black' 
            leftButtonBackgroundColor='black'/>
      <TextInput
      placeholder='Gender1'
      placeholderTextColor='black'
      onChangeText={(text)=>this.props.handleGender1Change(text)}
      style={{width:'30%'}}
      >
      </TextInput>
    </Card>
    </View>

      <Card style={{flexDirection:'row'}}>        
      <TextInput
      placeholder='Name2'
      placeholderTextColor='black'
      onChangeText={(text)=>this.props.handleName2Change(text)}
      maxLength={20}
      style={{width:'30%'}}>
      </TextInput>
      <NumericInput 
            value={this.props.Age2} 
            onChange={value => this.props.handleAge2Change(value)} 
            maxValue={60}
            totalWidth={100} 
            totalHeight={50} 
            iconSize={25}
            step={1}
            valueType='real'
            rounded 
            textColor='black' 
            iconStyle={{ color: 'white' }} 
            rightButtonBackgroundColor='black' 
            leftButtonBackgroundColor='black'/>
            <TextInput
      placeholder='Gender2'
      placeholderTextColor='black'
      onChangeText={(text)=>this.props.handleGender2Change(text)}
      style={{width:'30%'}}>
      </TextInput>
      </Card>

      <Card style={{flexDirection:'row'}}>         
      <TextInput
      placeholder='Name3'
      placeholderTextColor='black'
      onChangeText={(text)=>this.props.handleName3Change(text)}
      maxLength={20}
      style={{width:'30%'}}>
      </TextInput>
      <NumericInput 
            value={this.props.Age3} 
            onChange={value => this.props.handleAge3Change(value)} 
            maxValue={60}
            totalWidth={100} 
            totalHeight={50} 
            iconSize={25}
            step={1}
            valueType='real'
            rounded 
            textColor='black' 
            iconStyle={{ color: 'white' }} 
            rightButtonBackgroundColor='black' 
            leftButtonBackgroundColor='black'/>
            <TextInput
      placeholder='Gender3'
      placeholderTextColor='black'
      onChangeText={(text)=>this.props.handleGender3Change(text)}
      style={{width:'30%'}}>
      </TextInput>
      </Card>

      <Card style={{flexDirection:'row'}}>         
      <TextInput
      placeholder='Name4'
      placeholderTextColor='black'
      onChangeText={(text)=>this.props.handleName4Change(text)}
      maxLength={20}
      style={{width:'30%'}}>
      </TextInput>
      <NumericInput 
            value={this.props.Age4} 
            onChange={value => this.props.handleAge4Change(value)} 
            maxValue={60}
            totalWidth={100} 
            totalHeight={50} 
            iconSize={25}
            step={1}
            valueType='real'
            rounded 
            textColor='black' 
            iconStyle={{ color: 'white' }} 
            rightButtonBackgroundColor='black' 
            leftButtonBackgroundColor='black'/>
            <TextInput
      placeholder='Gender4'
      placeholderTextColor='black'
      onChangeText={(text)=>this.props.handleGender4Change(text)}
      style={{width:'30%'}}>
      </TextInput>
      </Card>


      <View style={{flexDirection:'row', marginTop:10}}>
      <Button onPress={this.props.toggleModal}
    style={{backgroundColor:'skyblue', marginRight:30, width:'30%', marginLeft:50}}>
        <Title style={{marginLeft:27}}>
          Back
        </Title>
      </Button>

      <Button onPress={this.props.toast}
    style={{backgroundColor:'skyblue', width:'30%'}}>
        <Title style={{marginLeft:27}}>
          Save
        </Title>
      </Button>
      </View>

    </Card>
    </View>
    </Modal>
          </View>
          </View>
          </Card>

         

          <Card>
              <View style={{flexDirection:'row'}}>
              <UserAvatar size="45" name={this.props.Name1 ? this.props.Name1 : "Give Name"} />
              <Text style={{marginTop:12, marginLeft:5, fontSize:15, marginRight:15, fontWeight:'bold', fontStyle:'italic'}}> Name: {this.props.Name1}</Text>
              <Text style={{fontSize:15, fontWeight:'bold', marginTop:12}}>Age: {this.props.Age1}</Text>           
              <Text style={{fontSize:15, fontWeight:'bold', marginTop:12, marginLeft:15}}>Gender:  {this.props.Gender1==''?<Icon name='male' color='white'/> : this.props.Gender1=='MALE'?<Icon name='male' size={20}/>: this.props.Gender1=='FEMALE'?<Icon name='female' size={20}/>:<Icon name='female' color='white'/>}</Text>
              </View>
          </Card>

          <Card>
          <View style={{flexDirection:'row'}}>
              <UserAvatar size="45" name={this.props.Name2 ? this.props.Name2 : "Give Name"} />
              <Text style={{marginTop:12, marginLeft:5, marginRight:21, fontSize:15, fontWeight:'bold', fontStyle:'italic'}}> Name: {this.props.Name2}</Text>
              <Text style={{fontSize:15, fontWeight:'bold', marginTop:12}}>Age: {this.props.Age2}</Text>
              <Text style={{fontSize:15, fontWeight:'bold', marginTop:12, marginLeft:15}}>Gender:  {this.props.Gender2==''?<Icon name='male' color='white'/> : this.props.Gender2=='MALE'?<Icon name='male' size={20}/>: this.props.Gender2=='FEMALE'?<Icon name='female' size={20}/>:<Icon name='female' color='white'/>}</Text>
              </View>
          </Card>

          <Card>
          <View style={{flexDirection:'row'}}>
              <UserAvatar size="45" name={this.props.Name3 ? this.props.Name3 : "Give Name"}/>
              <Text style={{marginTop:12, marginLeft:5, marginRight:20, fontSize:15, fontWeight:'bold', fontStyle:'italic'}}> Name: {this.props.Name3}</Text>
              <Text style={{fontSize:15, fontWeight:'bold', marginTop:12}}>Age: {this.props.Age3}</Text>
              <Text style={{fontSize:15, fontWeight:'bold', marginTop:12, marginLeft:15}}>Gender:  {this.props.Gender3==''?<Icon name='male' color='white'/> : this.props.Gender3=='MALE'?<Icon name='male' size={20}/>: this.props.Gender3=='FEMALE'?<Icon name='female' size={20}/>:<Icon name='female' color='white'/>}</Text>
              </View>
          </Card>

          <Card>
              <View style={{flexDirection:'row'}}>
              <UserAvatar size="45" name={this.props.Name4 ? this.props.Name4 : "Give Name"}/>
              <Text style={{marginTop:12, marginLeft:5, fontSize:15, marginRight:23, fontWeight:'bold', fontStyle:'italic'}}>Name: {this.props.Name4}</Text>
              <Text style={{fontSize:15, fontWeight:'bold', marginTop:12}}>Age: {this.props.Age4}</Text>
              <Text style={{fontSize:15, fontWeight:'bold', marginTop:12, marginLeft:15}}>Gender:  {this.props.Gender4==''?<Icon name='male' color='white'/> : this.props.Gender4=='MALE'?<Icon name='male' size={20}/>: this.props.Gender4=='FEMALE'?<Icon name='female' size={20}/>:<Icon name='female' color='white'/>}</Text>
              </View>
          </Card>

          <Content/>
          
          <View style={{alignItems:'center', marginTop:15}}>
              <TouchableOpacity>
              <Icon name="sign-out" style={{marginLeft: 18, fontSize:20}}/>
              <Text style={{fontWeight:'bold', fontSize:15}}>Signout</Text>
              </TouchableOpacity>
          </View>

          

          </ScrollView>

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
