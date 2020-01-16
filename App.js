import React, { Component } from 'react';
import { View, Text,Button} from 'react-native';
import Task2 from './src/Task2';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
   <Task2/>
    );
  }
}

export default App;
