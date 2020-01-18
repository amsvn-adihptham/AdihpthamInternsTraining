import React, { Component } from 'react';
import { View, Text,Button} from 'react-native';
import Task4PP from './src/Task4PP';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
   <Task4PP/>
    );
  }
}

export default App;
