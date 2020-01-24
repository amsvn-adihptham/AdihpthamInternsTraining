import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Container, Header, Left, Body, Button, Title, Card, CardItem } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import UserAvatar  from 'react-native-user-avatar';
import DatePicker from 'react-native-datepicker';
import { RadioButton } from 'react-native-paper';



export default class Task6 extends Component {
    
  render() {
    
    return (
        
        <Container>
        <Header>
        <Left>
        <Button transparent>
          <Icon name='arrow-left' style={{fontSize:20, color:'white'}}/>
        </Button>
      </Left>
      <Body>
          <Title style={{fontSize:25, color:'white', marginLeft:-35}}>
              Profile
          </Title>
      </Body>
      </Header>

        <ScrollView>
        <View style={{backgroundColor:'steelblue', alignItems:'center', height:140}}>
      <UserAvatar size="75" name="John Doe"/>
      <Text style={{fontSize:20, color:'white'}}>
        John Doe
      </Text>
      <Text style={{fontSize:20, color:'white'}}>
          ccc@gmail.com
      </Text>
      </View>

      { this.props.EditProfile ?   
      <Card style={{width:'90%', marginLeft:17, marginTop:20}}>
            <CardItem header bordered style={{backgroundColor:'skyblue'}}>
              <Text style={{fontSize:20}}>Contact Information</Text>
                  <Icon name='check-circle' size={20} style={{marginLeft:95}}/>
              </CardItem>
              <CardItem bordered>
              <Body>
           <TextInput
                  placeholder='Phone Number'
                  placeholderTextColor='black'
                  keyboardType='numeric'
                  maxLength={10}
                  value={this.props.PhoneNumber}
                  style={{width:'80%'}} onChangeText={(text)=>this.props.handlePhoneChange(text)}>

                  </TextInput>             
                 

                  <DatePicker 
        style={{width: 200}}
        date={this.props.date}
        mode="date"
        placeholder="DOB"
        format="YYYY-MM-DD"
        minDate="1950-01-01"
        maxDate="2021-06-01"
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
        onDateChange={(date) => this.props.DateChange(date)}
      /> 
              
                  <TextInput
                  placeholder='City'
                  placeholderTextColor='black'
                  style={{width:'80%'}} onChangeText={(text)=>this.props.handleCityChange(text)}
                  maxLength={15}
                  value={this.props.City}>
                  </TextInput>

                  <TextInput
                  placeholder='State'
                  placeholderTextColor='black'
                  style={{width:'80%'}} onChangeText={(text)=>this.props.handleStateChange(text)}
                  maxLength={15}
                  value={this.props.State}>
                  </TextInput>

        <View style={{flexDirection:'row'}}>
        <View style={{flexDirection:'row'}}>
        <RadioButton
         value="Male"
          status={this.props.checked === 'Male' ? 'checked' : 'unchecked'}
          onPress={(checked) => { this.props.ChooseGender('Male')}}
        />
        <Text style={{marginTop:8}}>Male</Text>
        </View>

        <View style={{flexDirection:'row', marginLeft:25}}>
        <RadioButton
         value="Female"
          status={this.props.checked === 'Female' ? 'checked' : 'unchecked'}
          onPress={(checked) => { this.props.ChooseGender('Female')}}/>
        <Text style={{marginTop:8}}>Female</Text>
        </View>

        <View style={{flexDirection:'row', marginLeft:25}}>
        <RadioButton
          value="Other"
          status={this.props.checked === 'Other' ? 'checked' : 'unchecked'}
          onPress={() => { this.props.ChooseGender('Other')}}/>
        <Text style={{marginTop:8}}>Other</Text>
        </View>
        </View>
 

        <View style={{flexDirection:'row'}}>
        <View style={{flexDirection:'row'}}>
        <RadioButton
          value="Single"
          status={this.props.check === 'Single' ? 'checked' : 'unchecked'}
          onPress={() => { this.props.MaritalStatus('Single')}}
          color='blue'/>
        <Text style={{marginTop:8}}>Single</Text>
        </View>

        <View style={{flexDirection:'row', marginLeft:18}}>
        <RadioButton
          value="Married"
          status={this.props.check === 'Married' ? 'checked' : 'unchecked'}
          onPress={() => { this.props.MaritalStatus('Married')}}
          color='blue'/>
        <Text style={{marginTop:8}}>Married</Text>
        </View>

        <View style={{flexDirection:'row', marginLeft:22}}>
        <RadioButton
          value="Divorcee"
          status={this.props.check === 'Divorcee' ? 'checked' : 'unchecked'}
          onPress={() => { this.props.MaritalStatus('Divorcee')}}
          color='blue'/>
        <Text style={{marginTop:8}}>Divorcee</Text>
        </View>
        </View>

                </Body>
                </CardItem>
                <CardItem>
                <View style={{flexDirection:'row', marginTop:10}}>
        <Button 
        onPress={this.props.CheckTextInput}        
        style={{backgroundColor:'skyblue', width:70, marginLeft:47}}>
        <Text style={{marginLeft:18, fontSize:15}}>Save</Text>
        </Button>

        <Button onPress={this.props.EditProfileIcon}
        style={{backgroundColor:'skyblue', width:70, marginLeft:60}}>
        <Text style={{marginLeft:13, fontSize:15}}>Cancel</Text>
        </Button>
        </View>
                </CardItem>
                </Card>

        
                
     :
          
      <Card style={{width:'90%', marginLeft:17, marginTop:20}}>
            <CardItem header bordered style={{backgroundColor:'skyblue'}}>
              <Text style={{fontSize:20}}>Contact Information</Text>
              <TouchableOpacity onPress={this.props.Editprofile}>
                  <Icon name='pencil' size={20} style={{marginLeft:95}}/>
              </TouchableOpacity>
            </CardItem>
                    

            <CardItem bordered>
              <Body>
                <Text style={{height:50, marginTop:3, fontSize:15}}>Phone Number:   {this.props.PhoneNumber}
                </Text>

                <Text style={{ height:50, marginTop:3, fontSize:15}}>
                    DOB:   {this.props.date}
                </Text>
                
                 <Text style={{ height:50, marginTop:3, fontSize:15}}>
                     City:   {this.props.City}
                 </Text>

                 <Text style={{height:50, marginTop:3, fontSize:15}}>
                     State:   {this.props.State}
                 </Text>

                <Text style={{height:50, marginTop:3, fontSize:15}}>
                    Gender:   {this.props.checked}
                </Text>

                 <Text style={{height:50, marginTop:3, fontSize:15}}>
                     Marital Status:   {this.props.check}      
                 </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Button onPress={() => alert('Details saved successfully')}
              style={{width:'30%', marginLeft:100, backgroundColor:'skyblue'}}>
                <Text style={{fontSize:18, marginLeft:30}}>
                  Ok
                </Text>
              </Button>
            </CardItem>
    </Card> }

    
         
        </ScrollView>
      </Container>
      
    );
  }
}
