import React, { Component } from 'react';
import { View, Text, StyleSheet, AppRegistry,  } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Title, Icon, Alert, Content, Footer, FooterTab, Picker } from 'native-base';
import DatePicker from 'react-native-datepicker';
import { WheelPicker, TimePicker } from 'react-native-wheel-picker-android';

export default class Task2 extends Component {
  constructor(props) {
    super(props);
    this.state = {date:"2020-01-16"},
    selectedTime= 0;
  }
  onTimeSelected = selectedTime => {
    this.setState({ selectedTime })
  }
 
  onPress = () => {
    this.setState({ selectedTime: 3 })
  }

  render() {
    const { show, date, mode } = this.state;
    return (
        
         <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu'/>
            </Button>
          </Left>
          <Body>
           <Title style={{marginLeft:'40%', width:'80%'}}>Adihptham</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='notifications' />
            </Button>
          </Right>
        </Header>

        <View style={{flexDirection:'row', marginBottom:20}}>
            <Text style={{fontSize:15, margin:15, fontWeight:'bold'}}>Subjects:</Text>
            <Picker
             selectedValue={this.state.language}
             style={{width: 50, marginLeft:'5%'}}
             onValueChange={(itemValue, itemIndex) =>
             this.setState({language: itemValue})
             }>
             <Picker.Item label="Java" value="java" />
             <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="Python" value="python"/>
            <Picker.Item label="C" value="c"/>

            </Picker>
             </View>

        
        <View style={{flexDirection:'row', marginTop:25, marginBottom:20}}>
        <Text style={{fontSize:15, margin:15, fontWeight:'bold'}}> Date: </Text>
        <DatePicker
        style={{width: 200, marginBottom: '10%'}}
        date={this.state.date}
        mode="date"
        placeholder="select date "
        format="YYYY-MM-DD"
        minDate="2020-01-01"
        maxDate="2022-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
      </View>

        <View style={{flexDirection:'row'}}>
        <Text style={{fontSize:15, margin:15, fontWeight:'bold'}}> Time:</Text>
        <View style={{width:'60%', marginLeft:'5%'}}>
        <TimePicker 
        onTimeSelected={this.onTimeSelected}/>
        </View> 
        </View>
    
<Content/>


<Footer>
          <FooterTab>
            <Button>
              <Icon name="home" />
              <Text>Home</Text>
              </Button>
            <Button >
              <Icon name="settings" />
              <Text>Settings</Text>
            </Button>
            <View style={{marginBottom:'130%'}}>
            <Button>
              <Icon name="people"/>
              <Text>User</Text>
            </Button>
            </View>
            <Button >
              <Icon name="help-circle" />
              <Text>Help</Text>
            </Button>
            <Button>
              <Icon name="search" />
              <Text>Support</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
      
    );
  }
}
