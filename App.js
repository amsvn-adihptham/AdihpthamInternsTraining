import React, { Component } from 'react';
import { View, Text,Button} from 'react-native';

import Task3Prav from './src/Task3Prav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
   <Task3Prav/>
    );
  }
}

export default App;
