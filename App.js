import React, { Component } from 'react';
import { View, Text,Button} from 'react-native';
import Main from './src/Main';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
   <Main/>
    );
  }
}

export default App;
