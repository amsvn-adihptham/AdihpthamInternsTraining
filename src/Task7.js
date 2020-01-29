import React, { Component } from 'react';
import {Text , StyleSheet, View, Modal, Image, ImageBackground, Button, TextInput, Alert } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SearchBar } from 'react-native-elements';
import Slider from '@react-native-community/slider'
import { Card, Title, Paragraph } from 'react-native-paper';

export default class task7 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isVisible: false,
        isVisible1:false,
        sliderValue1: 20,
        sliderValue2: 30,
        search: '',
    };

    
  }
  updateSearch = search => {
    this.setState({ search });
  };

  
  render() {
    const { search } = this.state;
    return (
      <ImageBackground source = {require('../images/bg8.jpg')} style ={{flex:1}}>
    
      <View>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
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

          <ActionButton.Item buttonColor='#3498db' title="App Setting" onPress = {() => {this.setState({ isVisible: true})}}>
            <Icon name="sliders" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Device Setting" onPress={() => {}}>
            <Icon name="cog" style={styles.actionButtonIcon} />
          </ActionButton.Item>

        </ActionButton>





        <View style={{alignItems:'center'}}>
        <Modal animationType = {"slide"} transparent = {false}
            visible = {this.state.isVisible}
            onRequestClose = {() =>{ console.log("Modal has been closed.") } }>
            {/*All views of Modal*/}
            {/*Animation can be slide, slide, none*/}
        <View style = {styles.modal}>

            {/* <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 ,margin:10,}}
            placeholder='BRIGHTNESS'
        
            />

            <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1,margin:10, }}
            placeholder='VOLUME'
            
            /> */}

            <Text style={{color: 'black',fontWeight:'bold',textTransform:'uppercase'}}>VOLUME: {this.state.sliderValue1}</Text>

            <Slider 
            maximumValue={100}
            minimumValue={0}
            minimumTrackTintColor="#307ecc"
            maximumTrackTintColor="#000000"
            step={1} 
            value={this.state.sliderValue1}
            onValueChange={(sliderValue1) => this.setState({ sliderValue1 })}
            />

            <Text style={{color: 'black',fontWeight:'bold',textTransform:'uppercase'}}>BRIGHTNESS: {this.state.sliderValue2}</Text>

            <Slider 
            maximumValue={100}
            minimumValue={0}
            minimumTrackTintColor="#307ecc"
            maximumTrackTintColor="#000000"
            step={1} 
            value={this.state.sliderValue2}
            onValueChange={(sliderValue2) => this.setState({ sliderValue2 })}
            />




            <View style={styles.fixToText}>


            <Button
            title="SAVE"
            onPress = {() => {this.setState({isVisible:!this.state.isVisible,sliderValue1:this.state.sliderValue1,sliderValue2:this.state.sliderValue2})}}
            />
            <Button
            title="CANCEL"
            onPress = {() => { this.setState({ isVisible:!this.state.isVisible,sliderValue1:this.state.sliderValue1,sliderValue2:this.state.sliderValue2})}}
            />


            </View>


        </View>
        </Modal>
        </View>
        

         <View style={{marginVertical:70}}>  
              <Card style={{margin:10,backgroundColor:'#3498db'}}>
                <Card.Content>
                <Title>VOLUME</Title>
                <Paragraph>VOLUME: {this.state.sliderValue1}</Paragraph>
                </Card.Content>
              </Card>

               <Card style={{margin:10,backgroundColor:'#3498db'}}>
                <Card.Content>
                <Title>BRIGHTNESS</Title>
                <Paragraph>BRIGHTNESS: {this.state.sliderValue2}</Paragraph>
                </Card.Content>
               </Card>  
        </View>     
        
         


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

  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin:10,
    //marginTop:40,
  },
  modal:{
      marginTop:300,
  }

  // bgContainer:{
  //   flex: 1,
  //   backgroundColor:'#fff',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   resizeMode: 'stretch',
    
  // },
});
