import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Task6 from '../TrainingPhase/Task6';

export default class Task6Component extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
     PhoneNumber:'',
    City:'',
    State:'',
    EditProfile:false,
    date:"",
    checked:'',
    check:''
    
    };
  }

 
  CheckTextInput = () => {
    //Handler for the Submit onPress
    if (this.state.PhoneNumber == '') 
    {
      alert('Please Enter PhoneNumber');
    }
      else if (this.state.date == '') 
      {       
        alert('Please Enter DOB');        
      } 
      else if (this.state.City == '')
      {
        alert('Please Enter City')
      }
      else if(this.state.State == '')
      {
        alert('Please Enter State')
      }
      else if(this.state.checked == '')
      {
        alert('Please Choose Gender')
      }
      else if(this.state.check == '')
      {
        alert('Please Choose Marital status')
      }
      else {
        alert('success')
        this.EditProfileIcon();
      }
      
    }
  

  handlePhoneChange=(text)=>{
    this.setState({PhoneNumber:text})
  }

  handleCityChange=(text)=>{
    this.setState({City:text})
  }

  handleStateChange=(text)=>{
    this.setState({State:text})
  }

    Editprofile=() => {
        this.setState({EditProfile:true})
    }
  
  EditProfileIcon=() => {
    this.setState({EditProfile:false})
}

DateChange=(date)=>{
  this.setState({date: date})
}

ChooseGender=(checked)=>{
  this.setState({checked:checked})
    
}

MaritalStatus=(check)=>{
  this.setState({check:check})
 }

 

  render() {
    
    return (
    <Task6
    
    CheckTextInput={()=>this.CheckTextInput()}
    PhoneNumber={this.state.PhoneNumber}
    handlePhoneChange={(text)=>this.handlePhoneChange(text)}
    City={this.state.City}
    handleCityChange={(text)=>this.handleCityChange(text)}
    State={this.state.State}
    handleStateChange={(text)=>this.handleStateChange(text)}
    EditProfile={this.state.EditProfile}
    Editprofile={this.Editprofile}
    date={this.state.date}
    DateChange={this.DateChange}
    checked={this.state.checked}
    check={this.state.check}
    ChooseGender={this.ChooseGender}
    MaritalStatus={this.MaritalStatus}
    EditProfileIcon={this.EditProfileIcon}
     />

    );
  }
}
