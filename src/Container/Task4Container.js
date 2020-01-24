import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Task4 from '../TrainingPhase/Task4'
import Icon from 'react-native-vector-icons/FontAwesome';
import {Toast} from 'native-base';

export default class Task4Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isModalVisible: false,
        Name1:'',
        Name2:'',
        Name3:'',
        Name4:'',
        Age1:20,
        Age2:20,
        Age3:20,
        Age4:20,
        Gender1:'',
        Gender2:'',
        Gender3:'',
        Gender4:'',
    };
  }

  toast=()=>{
    this.setState({ isModalVisible: false });
      if (this.state.Name1=='' || this.state.Name2=='' || this.state.Name3=='' || this.state.Name4=='')
      {
        Toast.show({
            text: "Name cannot be empty!",
            textStyle: { color: "yellow" },
            buttonText: "Okay",
            duration: 6000
          });
      }
      else
      {
        Toast.show({
            text: "Success!",
            textStyle: { color: "yellow" },
            buttonText: "Okay",
            duration: 6000
          });
      }
  }

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  handleName1Change=(text)=>{
    this.setState({Name1:text})    
  }

  handleName2Change=(text)=>{
    this.setState({Name2:text})   
  }

  handleName3Change=(text)=>{
    this.setState({Name3:text})    
  }

  handleName4Change=(text)=>{
    this.setState({Name4:text})    
  }

  handleAge1Change=(value)=>{
      this.setState({Age1:value})
  }

  handleAge2Change=(value)=>{
    this.setState({Age2:value})
}

handleAge3Change=(value)=>{
    this.setState({Age3:value})
}

handleAge4Change=(value)=>{
    this.setState({Age4:value})
}

handleGender1Change=(text)=>{
    this.setState({Gender1:text.toUpperCase()})    
}

handleGender2Change=(text)=>{
    this.setState({Gender2:text.toUpperCase()})    
}

handleGender3Change=(text)=>{
    this.setState({Gender3:text.toUpperCase()})    
}

handleGender4Change=(text)=>{
    this.setState({Gender4:text.toUpperCase()})    
}

  render() {
    return (
      <Task4
      toast={this.toast}
      isModalVisible={this.state.isModalVisible}
      toggleModal={this.toggleModal}
      Name1={this.state.Name1}
      handleName1Change={(text)=>this.handleName1Change(text)}     
      Name2={this.state.Name2}
      handleName2Change={(text)=>this.handleName2Change(text)}
      Name3={this.state.Name3}
      handleName3Change={(text)=>this.handleName3Change(text)}
      Name4={this.state.Name4}
      handleName4Change={(text)=>this.handleName4Change(text)}
      Age1={this.state.Age1}
      handleAge1Change={(value)=>this.handleAge1Change(value)}
      Age2={this.state.Age2}
      handleAge2Change={(value)=>this.handleAge2Change(value)}
      Age3={this.state.Age3}
      handleAge3Change={(value)=>this.handleAge3Change(value)}
      Age4={this.state.Age4}
      handleAge4Change={(value)=>this.handleAge4Change(value)}
      Gender1={this.state.Gender1}
      handleGender1Change={(text)=>this.handleGender1Change(text)}
      Gender2={this.state.Gender2}
      handleGender2Change={(text)=>this.handleGender2Change(text)}
      Gender3={this.state.Gender3}
      handleGender3Change={(text)=>this.handleGender3Change(text)}
      Gender4={this.state.Gender4}
      handleGender4Change={(text)=>this.handleGender4Change(text)}
      />
    );
  }
}
