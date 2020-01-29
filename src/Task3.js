import React, { Component } from 'react';
import {Text , StyleSheet, View,Modal, Image,ImageBackground } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SearchBar } from 'react-native-elements';


export default class task3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ImageBackground source = {require('../images/bg8.jpg')} style ={{width:'100%',height:'100%',alignItems:'center'}}>
    
      <View style={styles.inner}>
      <SearchBar 
        
        placeholder="Type Here..."
        
      />
      <View style={{marginLeft:'87%',bottom:'34%',}}>
      <Icon
      size={50}
        name='question-circle'
        color='#00aced' />
        </View>
        <View style={{marginLeft:'73%',bottom:'64%'}}>
      <Icon
      size={50}
        name='search'
        color='#00aced' />
        </View>
        
      </View>
      
        {/* Rest of the app comes ABOVE the action button component !*/}
        <ActionButton buttonColor="#3498db">

          <ActionButton.Item buttonColor='#3498db' title="App Setting" onPress={() => console.log("notes tapped!")}>
            <Icon name="sliders" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Device Setting" onPress={() => {}}>
            <Icon name="cog" style={styles.actionButtonIcon} />
          </ActionButton.Item>

        </ActionButton>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  inner:{
    width:'100%',
    // flexDirection:"row",
    
    
  },

  // bgContainer:{
  //   flex: 1,
  //   backgroundColor:'#fff',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   resizeMode: 'stretch',
    
  // },
});
