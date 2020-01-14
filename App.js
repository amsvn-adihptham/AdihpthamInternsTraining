import React, { Component } from 'react';
import { View, Text,Button,Alert,TouchableOpacity,StyleSheet,TextInput,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (

      <View style={{justifyContent:'center', alignItems:'center',backgroundColor:'black', flex:1}}>
        <Image  style={{width:200,height:200,justifyContent:'center'}} 
        source={require('./src/images/Picture3.png')} />  
        
        <Text style={{fontSize:20,fontStyle:"italic",color:'white',marginBottom:20,marginTop:20}}>WELCOME TO ADIHPTHAM</Text>
        <Icon name='user' color ='white'/>
        <TextInput  
                    style={{height: 40,color:'white', fontSize: 20,marginBottom:30,paddingTop:30,backgroundColor:'white',borderColor:'white',borderWidth:4}}  
                    placeholder="TYPE YOUR USER NAME!"  
                    style={{color:'white',backgroundColor:'white',borderColor:'white',borderWidth:4,marginBottom:20}}
                  
        /> 
         <Icon name='key' color='#fff' />
         <TextInput  
                    style={{height: 40,backgroundColor: 'white', fontSize: 20,paddingTop:50,marginBottom:100}}  
                    placeholder="TYPE YOUR PASSWORD!" 
                    style={{color:'white',backgroundColor:'white',borderColor:'white',borderWidth:4,marginTop:20,marginBottom:40}}
                  
        /> 
        <View style = {{height:'20%',width:'50%'}}>
        <Button styles={{paddingBottom:50,marginTop:100,}}
          title="LOGIN"
          onPress={() => Alert.alert(' Button pressed')}
        /></View>
        <TouchableOpacity  
         style={styles.button}
         onPress={this.onPress}
       >
         <Text>FORGOT PASSWORD</Text>
       </TouchableOpacity>
      
                

      </View>
      
    );
  }
}
const styles = StyleSheet.create({
  
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop: 10
  }
  
  
})