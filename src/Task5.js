import React, { Component } from 'react';
import { View, Text,Modal,StyleSheet,Button,TextInput,TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Card, Title, Paragraph } from 'react-native-paper';


export default class Task5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // search: '',
      // date: '',
      // isVisible: false, //state of modal default false  
      // title1: '',
      // task: ''
    };
    
  }
//   componentDidMount() {
//     var that = this;
//     var date = new Date().getDate(); //Current Date
//     var month = new Date().getMonth() + 1; //Current Month
//     var year = new Date().getFullYear(); //Current Year
//     var hours = new Date().getHours(); //Current Hours
//     var min = new Date().getMinutes(); //Current Minutes
//     var sec = new Date().getSeconds(); //Current Seconds
//     that.setState({
//       //Setting the value of the date time
//       date:
//         date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec,
//     });
//   }
//   updateSearch = search => {
//     this.setState({ search });
//   };

//   handleTitle1 = (text) => {
//     this.setState({ title1: text })
//   }

//   handleTask = (text) => {
//     this.setState({ task: text })
//   }
//   login = (title1,task) => {
//     alert('title: ' + title1 + ' task: ' + task)
//  }

  render() {
    const { search } = this.state;
    return (

      <View style={{flex:1,backgroundColor:'#ff9c24'}}>

        {/* search-bar */}
        <View>
         <SearchBar
        placeholder="Type Here..."
        onChangeText={this.props.updateSearch}
        value={search}
        />
        </View>

        {/* time */}
        <View
        style={{
          //flex: 1,
          //justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 20,
          }}>
          Current Date Time
        </Text>
        <Text
          style={{
            fontSize: 20,
            marginTop: 16,
          }}>
          {this.props.date}
        </Text>
      </View>

      {/* CARD */}
      <View style={{margin:10}}>
        <Card style={{backgroundColor:'#140c02'}}>
        <Card.Content>

          <Title style={{fontWeight:'bold',color:'white',fontSize:22}}>{this.state.title1}</Title>
          <Paragraph style={{fontWeight:'normal',alignSelf:'center',color:'white',fontSize:20}}>{this.state.task}</Paragraph>
          
        </Card.Content>
        </Card>
      </View>  


      {/* modal */}
      <View style={{margin:10,}}>  
        <Modal            
          animationType = {"fade"}  
          transparent = {false}  
          visible = {this.props.isVisible}  
          onRequestClose = {() =>{ console.log("Modal has been closed.") } }>  
          {/*All views of Modal*/}  
              <View style = {styles.modal}>  

              <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "title"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.props.handleTitle1}/>
            
              <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "task"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.props.handleTask}/> 
              <View style={{flexDirection:'row',justifyContent:'space-around'}}>
              <TouchableOpacity
               style = {styles.submitButton}
               onPress = {() => { this.setState({ isVisible:!this.state.isVisible,title1:this.props.title1,task:this.props.task})}}>
               <Text style = {styles.submitButtonText}> SUBMIT </Text>
              </TouchableOpacity>

              <TouchableOpacity  
              style = {styles.submitButton}
              onPress = {() => {this.setState({ isVisible:!this.state.isVisible,title1:"",task:""})}}>
              <Text style = {styles.submitButtonText}>CANCEL</Text>  
              </TouchableOpacity> 
              </View>
              </View>  
        </Modal>  
        {/*Button will change state to true and view will re-render*/}  
        <View style={{marginTop:350}}>
        <TouchableOpacity  
        style = {styles.submitButton}
        onPress = {() => {this.setState({ isVisible: true})}}>
           <Text style = {styles.submitButtonText}>Click To Add Card</Text>   
            
        </TouchableOpacity> 
        </View> 
      </View>


      




      </View>
    );
  }
}

const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    alignItems: 'center',  
    justifyContent: 'center',  
    backgroundColor: '#ecf0f1',  
  },  
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1
 },
 submitButton: {
  backgroundColor: 'black',
  alignContent:'center',
  alignItems:'center',
  padding: 10,
  margin: 15,
  height: 40,
},
submitButtonText:{
  color: 'white',
  alignSelf:'center',
},
AddButton: {
  position: 'absolute',
  bottom:0,
  //left:0,
}
});  
