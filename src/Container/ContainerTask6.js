import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Task6 from '../Task6'
export default class ContainerTask6 extends Component {
  constructor(props) {
    super(props);
    this.state = {

            checked: '',
            buttonColor1: 'grey',
            buttonColor2: 'grey',
            buttonColor3: 'grey',
            buttonColor4: 'grey',
            buttonColor5: 'grey',

    };
  }
  onButtonPress1 = () => {
    this.setState({  checked: 'first',
                     buttonColor1: 'lightblue',
                     buttonColor2: 'grey', 
                     buttonColor3: 'grey',
                     buttonColor4: 'grey',
                     buttonColor5: 'grey', }); 
  }
  onButtonPress2 = () => {
    this.setState({ checked: 'second',
                    buttonColor2: 'lightblue',
                    buttonColor1: 'grey', 
                    buttonColor3: 'grey',
                    buttonColor4: 'grey',
                    buttonColor5: 'grey', }); 
  }
  onButtonPress3 = () => {
    this.setState({ checked: 'third',
                    buttonColor3: 'lightblue',
                    buttonColor1: 'grey', 
                    buttonColor2: 'grey',
                    buttonColor5: 'grey',
                    buttonColor4: 'grey', }); 
  }
  onButtonPress4 = () => {
    this.setState({ checked: 'forth',
                    buttonColor4: 'lightblue',
                    buttonColor1: 'grey',
                    buttonColor2: 'grey',
                    buttonColor3: 'grey',
                    buttonColor5: 'grey', }); 
  }
  onButtonPress5 = () => {
    this.setState({ checked: 'fivth',
                    buttonColor5: 'lightblue',
                    buttonColor1: 'grey', 
                    buttonColor2: 'grey',
                    buttonColor3: 'grey',
                    buttonColor4: 'grey', }); 
  }

  render() {
    return (
      <Task6
          checked={this.state.checked}
          
          buttonColor1={this.state.buttonColor1}
          onButtonPress1={()=>this.onButtonPress()}

          buttonColor2={this.state.buttonColor2}  
          onButtonPress2={()=>this.onButtonPress2()}

          buttonColor3={this.state.buttonColor3}
          onButtonPress3={()=>this.onButtonPress3()}

          buttonColor4={this.state.buttonColor4}
          onButtonPress4={()=>this.onButtonPress4()}

          buttonColor5={this.state.buttonColor5}
          onButtonPress5={()=>this.onButtonPress5()}        
      />
    );
  }
}
