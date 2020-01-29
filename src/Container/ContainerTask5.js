import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Task5 from '../Task5'
export default class ContainerTask5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      date: '',
      isVisible: false, 
      title1: '',
      task: ''
    };
    
        
    
  }
  componentDidMount() {
    var that = this;
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    that.setState({
      //Setting the value of the date time
      date:
        date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec,
    });
  }
  updateSearch = search => {
    this.setState({ search });
  };

  handleTitle1 = (text) => {
    this.setState({ title1: text })
  }

  handleTask = (text) => {
    this.setState({ task: text })
  }
 

  render() {
    return (
      <Task5
            

            search={this.state.search}
            updateSearch={(text)=>this.updateSearch()}

            date={this.state.date}

            isVisible={this.state.isVisible}

            title1={this.state.title1}
            handleTitle1={(text)=>this.handleTitle1(text)}

            task={this.state.task}
            handleTask={(text)=>this.handleTask(text)}

            
      />
          
      
    );
  }
}
