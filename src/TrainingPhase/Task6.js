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
             
              
              <TouchableOpacity onPress={this.props.EditProfileIcon}>
                  <Icon name='check-circle' size={20} style={{marginLeft:100}}/>
              </TouchableOpacity>
              </CardItem>
              <CardItem bordered>
              <Body>
           <TextInput
                  placeholder='Phone Number'
                  placeholderTextColor='black'
                  keyboardType='numeric'
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
                  style={{width:'80%'}} onChangeText={(text)=>this.props.handleCityChange(text)}>
                
                  </TextInput>

                  <TextInput
                  placeholder='State'
                  placeholderTextColor='black'
                  style={{width:'80%'}} onChangeText={(text)=>this.props.handleStateChange(text)}>
                  
                  </TextInput>

        <View style={{flexDirection:'row'}}>
        <View style={{flexDirection:'row'}}>
        <RadioButton
         value="male"
          status={this.props.checked === 'male' ? 'checked' : 'unchecked'}
          onPress={(checked) => { this.props.ChooseGender('male')}}
        />
        <Text style={{marginTop:8}}>Male</Text>
        </View>

        <View style={{flexDirection:'row', marginLeft:25}}>
        <RadioButton
         value="female"
          status={this.props.checked === 'female' ? 'checked' : 'unchecked'}
          onPress={(checked) => { this.props.ChooseGender('female')}}/>
        <Text style={{marginTop:8}}>Female</Text>
        </View>

        <View style={{flexDirection:'row', marginLeft:25}}>
        <RadioButton
          value="other"
          status={this.props.checked === 'other' ? 'checked' : 'unchecked'}
          onPress={() => { this.props.ChooseGender('other')}}/>
        <Text style={{marginTop:8}}>Other</Text>
        </View>
        </View>
 

        <View style={{flexDirection:'row'}}>
        <View style={{flexDirection:'row'}}>
        <RadioButton
          value="single"
          status={this.props.check === 'single' ? 'checked' : 'unchecked'}
          onPress={() => { this.props.MaritalStatus('single')}}
          color='blue'/>
        <Text style={{marginTop:8}}>Single</Text>
        </View>

        <View style={{flexDirection:'row', marginLeft:18}}>
        <RadioButton
          value="married"
          status={this.props.check === 'married' ? 'checked' : 'unchecked'}
          onPress={() => { this.props.MaritalStatus('married')}}
          color='blue'/>
        <Text style={{marginTop:8}}>Married</Text>
        </View>

        <View style={{flexDirection:'row', marginLeft:22}}>
        <RadioButton
          value="divorcee"
          status={this.props.check === 'divorcee' ? 'checked' : 'unchecked'}
          onPress={() => { this.props.MaritalStatus('divorcee')}}
          color='blue'/>
        <Text style={{marginTop:8}}>Divorcee</Text>
        </View>
        </View>

                </Body>
                </CardItem>
                </Card>
                
     :
      
    
      <Card style={{width:'90%', marginLeft:17, marginTop:20}}>
            <CardItem header bordered style={{backgroundColor:'skyblue'}}>
              <Text style={{fontSize:20}}>Contact Information</Text>
              <TouchableOpacity onPress={this.props.Editprofile}>
                  <Icon name='pencil' size={20} style={{marginLeft:100}}/>
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
    </Card> }
         

        

       <View style={{flexDirection:'row', marginTop:10}}>
        <Button style={{backgroundColor:'skyblue', width:70, marginLeft:80}}>
            <Text style={{marginLeft:18, fontSize:15}}>Save</Text>
          </Button>

          <Button style={{backgroundColor:'skyblue', width:70, marginLeft:60}}>
            <Text style={{marginLeft:13, fontSize:15}}>Cancel</Text>
          </Button>
          </View>

        </ScrollView>
      </Container>
      
    );
  }
}
