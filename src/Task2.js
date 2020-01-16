import React, { Component } from 'react';
import { View, Text,TouchableOpacity, StyleSheet, TextInput, TouchableHighlight } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon,Title, Alert, Content,Footer,FooterTab, CardItem,Card, styles} from 'native-base';
import DatePicker from 'react-native-datepicker' 

export default class Task2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
           <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title style={{marginLeft:'30%', width:'90%'}}>ADIHPTHAM</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='notifications' />
            </Button>
          </Right>
          </Header>

          <Content>
         <Card >
       <CardItem header bordered style={{backgroundColor:"grey"}} >
      <Left>
        <Text style={{marginLeft:'10%', marginTop:'-5%'}}>Name:</Text>
        <TextInput     
      placeholderTextColor='black'
      style={{ borderColor: 'black' }}
      />
      </Left>
     
      <Right >
      <Text style={{marginBottom:'-20%',marginRight:'30%'}}>ID:</Text> 
      <TextInput     
      placeholder="PIN"
      keyboardType="number-pad"
      style={{ borderColor: 'black' }}/>
      </Right>
      </CardItem> 
      </Card>

        <Card style={{backgroundColor:"lightgrey",}}>
      <CardItem  style={{backgroundColor:"lightgrey",}}>
         <Text>Date of Birth:</Text> 
         <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="DD-MM-YYYY"
        minDate="1990-01-01"
        maxDate="2020-06-01"
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
      </CardItem>


      <CardItem>
        <Text>Address:</Text>
        <TextInput     
      placeholderTextColor='black'
      style={{ width:'80%', borderColor: 'black' }}
      />
      </CardItem>
      <CardItem>
      {/* <View style={{flexDirection:'row'}}> */}
       <TouchableOpacity
         onPress={this.onPress}
       >
         <Text style={{marginLeft:'40%', marginTop:'5%',marginBottom:'15%'}}> Edit </Text>
       </TouchableOpacity>        

       <TouchableOpacity
         onPress={this.onPress}>
           <Right>
         <Text style={{marginLeft:'20%',marginTop:'5%',marginBottom:'15%'}}> View Profile </Text></Right>
       </TouchableOpacity> 
       </CardItem>       
      {/* </View> */}

   </Card>
  </Content>






<Content/>
<Footer>
  <FooterTab>
    <Button vertical>
      <Icon name="home" />
      <Text>HOME</Text>
    </Button>
    <Button vertical>
      <Icon name="cog" />
      <Text>SETTING</Text>
    </Button>
    <Button vertical>
      <Icon name="help-circle" />
      <Text>HELP</Text>
    </Button>
   
    <Button vertical>
      <Icon name="people" />
      <Text>SUPPORT</Text>  
    </Button>
  </FooterTab>
</Footer>
</Container>

    );
  }
}
