import React, { Component } from 'react';
import { View, Text,TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Container,Card,CardItem,SafeAreaView, Header, Content, Title, Footer, FooterTab, Left, Body, Right, Button,} from 'native-base';
import{Avatar,Icon} from 'react-native-elements';
export default class Task5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
     <Container>
           
        <Header style={{backgroundColor:"skyblue",height:200,marginBottom: "2%",}}>
           <View style={{marginTop:"5%",marginRight:"5%",marginLeft:"90%",}} >
                     <TouchableOpacity>
            <Icon name='arrow-back' color="white" />
            </TouchableOpacity>
            </View> 
          <View style={{flexDirection:"column"}}>
            <View style={{ flexDirection:"row",marginTop:"5%",marginBottom: "1%",marginRight:"50%"}}>
    <Title style={{fontSize:20}}>RijksMusuems</Title>
     </View>
            
            <Card style={{borderBottomWidth:5,borderColor:"purple",}}>
           
                <View style={{flexDirection:"row"}}>
                        <Text style={{fontWeight:"bold",fontSize:20,marginRight:"35%"}}> Priority Entrance
                      </Text>

                      <Icon name="edit"/>
</View>
<CardItem>

<Icon name="date-range"/>
                      <Text style={{fontStyle:"italic",fontSize:15}}> Today,14:00</Text> 
                         </CardItem>  
                         <CardItem>

                         <Icon name="person-add"/>
                      <Text style={{fontStyle:"italic",fontSize:15}}> 3 Adults</Text> 
                         </CardItem>  
            </Card>
            </View>
           
            <TouchableOpacity style={{marginTop:"5%",marginRight:"90%"}}>
              <Icon name='more-vert'/>
              </TouchableOpacity>
            
              </Header>
              <ScrollView>
                  
                  <View style={{marginLeft:"5%",}}>
              <Text style={{fontWeight:"bold"}}>
                  WHAT TICKETS WOULD YOU LIKE TO BUY?
                  
                  </Text>
                  </View>  
                  <View style={{marginLeft:"5%",marginRight: "5%",}}>
                  <Card>           
                    <CardItem>
                      
                          <Button style={{width:"25%",backgroundColor:"skyblue"}} >
                              <Text style={{marginLeft:"40%",color:"white",fontWeight:"bold",fontSize:25}}>3</Text>
                        </Button>
                        <View  style={{marginLeft:"5%",marginBottom: "1%",marginRight: "30%",}}>
                        <Text style={{fontWeight:"bold",fontSize:17}}>
                          Adult
                      </Text>
                      <Text>{'\n'}
                          Age 15+yrs
                          {'\n'}
                         $550/person</Text> 
                         </View>    
                         <View style={{flex:1,flexDirection: 'column',}}>
                         <View style={{marginBottom: "5%",}}>
                         <Button style={{backgroundColor:"white"}}>
            <Icon name="add" color="skyblue"/>
          </Button>
          </View>
          <Button style={{backgroundColor:"white"}}>
            <Icon name="remove" color="silver"/>
          </Button>
  </View>
                  </CardItem>
              </Card>
              <Card>           
                    <CardItem>
                      
                          <Button style={{width:"25%",backgroundColor:"silver"}} >
                              <Text style={{marginLeft:"40%",color:"black",fontWeight:"bold",fontSize:25}}>0</Text>
                        </Button>
                        <View  style={{marginLeft:"5%",marginBottom: "1%",marginRight: "35%",}}>
                        <Text style={{fontWeight:"bold",fontSize:17}}>
                          Child
                      </Text>
                      <Text>{'\n'}
                          Age 1-2yrs
                          {'\n'}
                        FREE</Text> 
                         </View>    
                         <View style={{flex:1,flexDirection: 'column',}}>
                         <View style={{marginBottom: "5%",}}>
                         <Button style={{backgroundColor:"white"}}>
            <Icon name="add" color="skyblue"/>
          </Button>
          </View>
          <Button style={{backgroundColor:"white"}}>
            <Icon name="remove" color="silver"/>
          </Button>
  </View>
                  </CardItem>
              </Card>
              <View style={{marginLeft:"2%",marginTop:"5%"}}>
              <Text style={{fontWeight:"bold"}}>
                  DO YOU HAVE A DISCOUNT COUPON?
                  
                  </Text>
                  </View> 
                  <View style={{marginLeft:"1%",marginRight:"1%"}}>
                      <Card>
                          <CardItem bordered>
                            <TextInput placeholder="Enter coupon" style={{marginRight:"60%"}}>

                            </TextInput>
                            <Icon name="face"/>
                          </CardItem>
                         
                          <CardItem bordered style={{backgroundColor:"skyblue"}}>
                         
                            <TouchableOpacity >
                            <Text style={{color:"black"}}>
                                Avail 10% Discount! Use RIJKM10
                            </Text>
                            </TouchableOpacity>
                           
                          </CardItem>
                      </Card>
                  </View>
                  <View style={{marginRight:"2%",marginLeft:"2%"}}></View>
                  <Card>
                      <CardItem>
                      <View  style={{marginRight: "20%",}}>
                        <Text style={{fontWeight:"bold",fontSize:18}}>
                         Grand Total
                      </Text>
                      <Text style={{fontStyle:"italic",marginBottom: "2%",}}>{'\n'}
                          $1650
                         </Text> 
                         </View> 
                         <Button iconRight style={{backgroundColor:"orange",width:"50%"}}>
            
            <Text style={{marginLeft:"25%"}}> Next</Text>
            <Icon name='navigate-next'style={{marginRight:"25%"}} />
          </Button>
                      </CardItem>
                  </Card>
              </View> 
              </ScrollView>
     </Container>
    );
  }
}
