import React, { Component } from 'react';
import { View, Text,StyleSheet,TextInput,CheckBox,Button,Alert} from 'react-native';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';
// import Icon from 'react-native-vector-icons/FontAwesome'



import { Header} from 'react-native-elements';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  onSelect(index, value){
    this.setState({
      text: `Selected index: ${index} , value: ${value}`
    })
  }

  render() {
    return (
      <View style={styles.container}>
      {/* <Icon  style={{top:'15%',left:'15%'}}name="arrow-left"/> */}
        
      <Header 
      
      leftComponent={{ icon: 'arrow-back', color: '#fff' }}
  centerComponent={{ text: 'SIGN UP', style: { color: '#fff' } }}

/>
      
       <View>

         
        <TextInput  
          style={styles.textInputStyle}    
          placeholder="Enter your name"  
          placeholderTextColor="black"  
        />
        <TextInput  
          style={styles.textInputStyle}    
          placeholder="Enter your email id"  
          placeholderTextColor="black"  
        />
        <TextInput  
          style={styles.textInputStyle}    
          placeholder="Enter your mobile number"  
          placeholderTextColor="black"  
          keyboardType="numeric"
        />
        <TextInput  
          style={styles.textInputStyle}    
          placeholder="Enter your date of birth"  
          placeholderTextColor="black"  
          keyboardType="numeric"

        /> 
        <Text style={{fontWeight:"bold",marginLeft:6,}}>Gender:</Text>
        <View style ={{flexDirection:"row", flex:1,marginBottom:30}}>
        <RadioGroup
        onSelect = {(index, value) => this.onSelect(index, value)}
      >
        <RadioButton value={'male'} >
          <Text>male</Text>
        </RadioButton>
 
        <RadioButton value={'female'} style={{marginLeft:'45%'}}>
          <Text>female</Text>
        </RadioButton>
      </RadioGroup> 
        </View>
        
        <TextInput  
          style={styles.textInputStyle}    
          placeholder="Enter your adhar number"  
          placeholderTextColor="black"  
          keyboardType="numeric"
        />
        <TextInput  
          style={styles.textInputStyle}    
          placeholder="Enter your password"  
          placeholderTextColor="black"  
          secureTextEntry={true}
        />
        <TextInput  
          style={styles.textInputStyle}    
          placeholder="confirm your password"  
          placeholderTextColor="black"  
          secureTextEntry={true}
        />
        
        
        </View> 
        <View style={{ flexDirection: 'column'}}>
      
        <View style={{ flexDirection: 'row' }}>
            <CheckBox
            value={this.state.checked}
              onValueChange={() => this.setState({ checked: !this.state.checked })}
            />
            <Text style={{marginTop: 5,fontWeight:'bold'}}>I agree to the terms and conditions.</Text>
        </View>
      </View>
      <View style={styles.buttonOuterLayout}>
      <Button  style={styles.buttonLayout}
            title="SIGN UP"
            onPress={() => Alert.alert('ACCOUNT IS CREATED')}
          />
      </View>
      
        
      </View>
      
    );
  }
}
const styles = StyleSheet.create({

  container: {
          flex: 1,
          justifyContent: 'center',
        },
  head:{
          textAlign:'center',
          marginBottom:20,
          marginTop:20,
          fontSize:20,
          color:'white',
          fontStyle:'italic',
          fontWeight: 'bold',
        },
  line:{
          borderBottomColor:'red',
          borderBottomWidth:5,
       },
  inner:{
          width:'100%',
          height:'10%',
          backgroundColor:'blue'

        },
  textInputStyle: {  
          borderColor: '#9a73ef',  
          borderWidth: 2,  
          height: 40,  
          margin: 10,  
          padding: 10,  
        },  
  input:{
          width: '100%',
          height: 20,
          padding: 20,
          marginBottom: 10,
          backgroundColor: 'red',
          color:'black',
        },
  buttonContainer: {
          backgroundColor: '#2E9298',
          marginTop:60,
          width:30,
          borderRadius:10,
          padding:10,
          height:50
        },
  buttonOuterLayout: {
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop:5,
        },
  buttonLayout: {
          marginBottom: 10
        }
        

            

});