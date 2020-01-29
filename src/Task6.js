import React, { Component } from 'react';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import { RadioButton } from 'react-native-paper';
import { Header } from 'react-native-elements';
import { View, 
         Text,
         StyleSheet,
         TouchableOpacity, 
         Button,
         Alert
       } 
       from 'react-native';

export default class Task6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //checked: '',
            // buttonColor1: 'grey',
            // buttonColor2: 'grey',
            // buttonColor3: 'grey',
            // buttonColor4: 'grey',
            // buttonColor5: 'grey',

        };
        
      }

      // onButtonPress1 = () => {
      //   this.setState({  checked: 'first',
      //                    buttonColor1: 'lightblue',
      //                    buttonColor2: 'grey', 
      //                    buttonColor3: 'grey',
      //                    buttonColor4: 'grey',
      //                    buttonColor5: 'grey', }); 
      // }
      // onButtonPress2 = () => {
      //   this.setState({ checked: 'second',
      //                   buttonColor2: 'lightblue',
      //                   buttonColor1: 'grey', 
      //                   buttonColor3: 'grey',
      //                   buttonColor4: 'grey',
      //                   buttonColor5: 'grey', }); 
      // }
      // onButtonPress3 = () => {
      //   this.setState({ checked: 'third',
      //                   buttonColor3: 'lightblue',
      //                   buttonColor1: 'grey', 
      //                   buttonColor2: 'grey',
      //                   buttonColor5: 'grey',
      //                   buttonColor4: 'grey', }); 
      // }
      // onButtonPress4 = () => {
      //   this.setState({ checked: 'forth',
      //                   buttonColor4: 'lightblue',
      //                   buttonColor1: 'grey',
      //                   buttonColor2: 'grey',
      //                   buttonColor3: 'grey',
      //                   buttonColor5: 'grey', }); 
      // }
      // onButtonPress5 = () => {
      //   this.setState({ checked: 'fivth',
      //                   buttonColor5: 'lightblue',
      //                   buttonColor1: 'grey', 
      //                   buttonColor2: 'grey',
      //                   buttonColor3: 'grey',
      //                   buttonColor4: 'grey', }); 
      // }

  render() {
    const { checked } = this.state;
       
    return (

       
      <View style={{flex :1, }}>

                    <Header
                            leftComponent={{ icon: 'menu', color: '#fff' }}
                            centerComponent={{ text: 'CHOOSE LANGUAGE', style: { color: '#fff' } }}
                            rightComponent={{ icon: 'home', color: '#fff' }}
                    />  
        
                    
    
                    
                    <View style={{margin:10,}}>

                    <View style={{marginBottom:10,marginTop:10,}}>
                    
                        <Card>
                        
                        <Card.Content style={{flexDirection:'row',backgroundColor:this.props.buttonColor1}}>
                        
                        <RadioButton 
                            value="first"
                            status={checked === 'first' ? 'checked' : 'unchecked'}
                            onPress={() => {this.onButtonPress1}}
                            
                        />
                        <Title style={{alignSelf:'center',textTransform:'uppercase'}}>HINDI</Title>

                        </Card.Content>

                        </Card>
                       
                    </View>



                    <View style={{marginBottom:10,}}>
                    
                        <Card>
                        
                        <Card.Content style={{flexDirection:'row',backgroundColor:this.props.buttonColor2}}>
                        
                        <RadioButton 
                            value="second"
                            status={checked === 'second' ? 'checked' : 'unchecked'}
                            onPress={() => {this.onButtonPress2}}
                            
                        />
                        <Title style={{alignSelf:'center',textTransform:'uppercase'}}>english</Title>

                        </Card.Content>

                        </Card>
                       
                    </View>



                    <View style={{marginBottom:10,}}>
                    
                        <Card>
                        
                        <Card.Content style={{flexDirection:'row',backgroundColor:this.props.buttonColor3}}>
                        
                        <RadioButton 
                            value="third"
                            status={checked === 'third' ? 'checked' : 'unchecked'}
                            onPress={() => {this.onButtonPress3}}
                            
                        />
                        <Title style={{alignSelf:'center',textTransform:'uppercase'}}>Mandarin Chinese</Title>

                        </Card.Content>

                        </Card>
                       
                    </View>



                    <View style={{marginBottom:10,}}>
                    
                        <Card>
                        
                        <Card.Content style={{flexDirection:'row',backgroundColor:this.props.buttonColor4}}>
                        
                        <RadioButton 
                            value="forth"
                            status={checked === 'forth' ? 'checked' : 'unchecked'}
                            onPress={() => {this.onButtonPress4}}
                            
                        />
                        <Title style={{alignSelf:'center',textTransform:'uppercase'}}>Japanese</Title>

                        </Card.Content>

                        </Card>
                       
                    </View>



                    <View style={{marginBottom:10,}}>
                    
                        <Card>
                        
                        <Card.Content style={{flexDirection:'row',backgroundColor:this.props.buttonColor5}}>
                        
                        <RadioButton 
                            value="fivth"
                            status={checked === 'fivth' ? 'checked' : 'unchecked'}
                            onPress={() => {this.onButtonPress5}}
                            
                        />
                        <Title style={{alignSelf:'center',textTransform:'uppercase'}}>Korean</Title>

                        </Card.Content>

                        </Card>
                       
                    </View>

                    </View>                                             
                    

                    {/* <Button color={this.state.buttonColor} 
                            onPress={this.onButtonPress}
                            title="Press me"
                        
                    /> */}
                    
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 10
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10
    },
    countContainer: {
      alignItems: 'center',
      padding: 10
    },
    countText: {
      color: '#FF00FF'
    }
  })
  