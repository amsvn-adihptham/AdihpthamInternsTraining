import React, { Component } from 'react';
import { View, Text,Button} from 'react-native';


import Task6Container from './src/container/Task6Container';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
   <Task6Container/>
    );
  }
}

export default App;
