import React, { Component } from 'react';
import { View,Text,StyleSheet,ScrollView,Button, TouchableOpacity} from 'react-native';
import { Header,Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CardItem } from 'native-base';


export default class Task4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ScrollView>
      <View style={{flex:1,}}>
        <Header
          backgroundColor="#33CCC7"
          placement="left"
          leftComponent={{ icon: 'chevron-left', color: '#fff',size:30 }}
          centerComponent={{ text: 'Rijks musemum', style: { color: '#fff',fontSize:25,fontWeight:"bold" } }}
          rightComponent={{ icon: 'ellipsis-v', color: '#fff' }}/>

          <Card title='Priority Entrance'>
            <View style={{flexDirection:'row'}}>
            <Icon name='calendar' type='evilicon'color='#517fa4' size={20}/>
            <Text style={{fontWeight:"bold"}}>
            Today:14:00
            </Text>
            </View>
          </Card>
          <View style={{marginTop:10,}}>
            
           
            <Card>
            <View style={{marginBottom:10,}}>
            <View style={{flexDirection:"row",justifyContent:"space-between"}}> 
            <Text style={styles.txt2}>WHEN ARE YOU GOING ?</Text>
            
            <CardItem  style={{height:70,width:100,borderColor:'black',borderWidth:1}}>

            <View style={{flexDirection:'row',}}>

            <Icon name='calendar' type='evilicon'color='#517fa4' size={20}/>
            <Text style={{opacity:45}}>PICK A DATE</Text>

            </View>  

            </CardItem>
            

          </View>
            <ScrollView horizontal={true}>
            <Card style={styles.cards}title ='1'><Text>Mon</Text></Card>
            <Card style={styles.cards}title ='2'><Text>Tue</Text></Card>
            <Card style={styles.cards}title ='3'><Text>Wed</Text></Card>
            <Card style={styles.cards}title ='4'><Text>Thu</Text></Card>
            <Card style={styles.cards}title ='5'><Text>Fri</Text></Card>
            <Card style={styles.cards}title ='6'><Text>Sat</Text></Card>
            <Card style={styles.cards}title ='7'><Text>Sun</Text></Card>
            <Card style={styles.cards}title ='8'><Text>Mon</Text></Card>
            </ScrollView>
           
            </View>
            
            <Text style={styles.txt2}>AT WHAT TIME?</Text>
            <View style={{flexDirection: 'row',justifyContent:"space-around",marginBottom:20,}}>

            <View style={{width:150,height:50}}>
            <Button color="#000000" title='10:00'/>
            </View>

            <View style={{width:150,height:50}}>
            <Button color="#000000" title='12:00'/>
            </View>

            </View>

            <View style={{flexDirection: 'row',justifyContent:"space-around",marginBottom:20,}}>

            <View style={{width:150,height:50}}> 
            <Button color="#000000" title='13:00'/>
            </View> 

            <View style={{width:150,height:50}}>
            <Button color="#000000" title='14:00'/>
            </View>

            </View>
            <View style={{flexDirection: 'row',justifyContent:"space-around",marginBottom:20,}}>

            <View style={{width:150,height:50}}>  
            <Button color="#000000" title='15:00'/>
            </View>

            <View style={{width:150,height:50}}>
            <Button color="#000000" title='16:00'/>
            </View>

            </View>
            </Card>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom: 10,marginTop:10,}}>
            <TouchableOpacity><Card title><Text style={styles.txt2}>TOTAL:</Text></Card></TouchableOpacity>
            <View style={{width:'75%',marginLeft:'20%',flexDirection:'row',height:'90%'}}>
            <TouchableOpacity >
   
              <Card containerStyle="red">
                <CardItem style={{width:'75%',height:'25%',alignSelf:'flex-start'}}>
                <Text style={styles.txt2}>CHOOSE TICKETS</Text>
                <Icon name='chevron-right' type='evilicon'color='#517fa4' size={20}/>
                </CardItem>
                </Card>
          
                </TouchableOpacity>
           </View>
           </View>
            
          </View>

      </View>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
txt1:{
      fontWeight:"bold",
      fontSize:15,
      bottom:'40%'
},
txt2:{
      fontWeight:"bold",
      fontSize:15,
},
cards:{
      width:100,
      height:40,
},


});