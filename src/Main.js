import React, { Component } from 'react';
import { 

        View, 
        Text, 
        ImageBackground,
        StyleSheet,
        Image

        } from 'react-native';

export default class Main extends Component {


  render() {
    return (
      <ImageBackground  
        style={styles.bgcontainer}
        source={require('./images/bg1.jpg')}
      />
    );
  }
}
const styles = StyleSheet.create({
    bgContainer:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        height:null,
        width:null,
    },

});