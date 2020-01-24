import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Main from './src/Main';
import { Root } from 'native-base';

class App extends Component {


  render() {
    return (
      
        <Main/>
      
    );
  }
}
export default () =>
  <Root>
    <App/>
  </Root>;