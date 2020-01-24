import React, { Component } from 'react';
import { View, Text,Button} from 'react-native';
import { MenuProvider } from 'react-native-popup-menu';

import Task3Container from './src/container/Task3Container';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
   <Task3Container/>
    );
  }
}

export default App;