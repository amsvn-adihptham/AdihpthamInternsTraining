
import { View, Text, TextInput,ScrollView,styles,SafeAreaView } from 'react-native';
import { Header, Card, CardItem, Left } from 'native-base';
import { SearchBar, search } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { Component } from 'react';

// import Task3 from './src/Task3';



class Task3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({ search });
    };



    render() {
        const { search } = this.state;
        return (
            <View style={{flex:1}}>
                <Header>
                    <Text style={{ color: 'black', fontSize: 40 }}>
                        bengaluru </Text>
                </Header>
                <SearchBar
                    placeholder="search from your city"
                    onChangeText={this.updateSearch}
                    value={search}
                /><Card>
                    <CardItem>
                        <Icon left name="user" size={30} color="black" >



                            <Text style={{ color: 'blue', fontSize: 30, marginLeft: '30%' }}>
                                DETECT MY LOCATION
      </Text>
                        </Icon>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>

                        <Text style={{ color: 'black', fontSize: 25, marginLeft: '20%', marginTop: '5%' }}>
                            popular cities
      </Text>
                    </CardItem>
                </Card>
                <View style={{ flexDirection: 'row' }}>
                    <Card>
                        <CardItem>
                            <Icon left name="home" size={70} color="pink">

                            </Icon>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Icon left name="home" size={70} color="pink">

                            </Icon>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Icon left name="home" size={70} color="pink">

                            </Icon>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Icon left name="home" size={70} color="pink">

                            </Icon>
                        </CardItem>
                    </Card>




                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: 'black', fontSize: 15, marginLeft: '5%' }}>
                        bengaluru
      </Text>
                    <Text style={{ color: 'black', fontSize: 15, marginLeft: '10%' }}>
                        mysuru
      </Text>
                    <Text style={{ color: 'black', fontSize: 15, marginLeft: '15%' }}>
                        bidar
      </Text>
                    <Text style={{ color: 'black', fontSize: 15, marginLeft: '10%' }}>
                        gulbarga
      </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Card>
                        <CardItem>
                            <Icon left name="home" size={70} color="purple">

                            </Icon>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Icon left name="home" size={70} color="purple">

                            </Icon>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Icon left name="home" size={70} color="purple">

                            </Icon>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Icon left name="home" size={70} color="purple">

                            </Icon>
                        </CardItem>
                    </Card>




                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: 'black', fontSize: 15, marginLeft: '5%' }}>
                        chennai
      </Text>
                    <Text style={{ color: 'black', fontSize: 15, marginLeft: '10%' }}>
                        pune
      </Text>
                    <Text style={{ color: 'black', fontSize: 15, marginLeft: '15%' }}>
                        mumbai
      </Text>
                    <Text style={{ color: 'black', fontSize: 15, marginLeft: '15%' }}>
                        delhi
      </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Card>
                        <CardItem>
                            <Icon left name="home" size={70} color="black">

                            </Icon>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Icon left name="home" size={70} color="black">

                            </Icon>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Icon left name="home" size={70} color="black">

                            </Icon>
                        </CardItem>
                    </Card>





                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: 'black', fontSize: 15, marginLeft: '5%' }}>
                        ayodhya
      </Text>
                    <Text style={{ color: 'black', fontSize: 15, marginLeft: '10%' }}>
                        srinagar
      </Text>
                    <Text style={{ color: 'black', fontSize: 15, marginLeft: '15%' }}>
                        udupi
      </Text>

                </View>
                <Card>
                    <CardItem>
                <Text style={{ color: 'black', fontSize: 50, marginLeft: '15%' }}>
                        Other Cities
      </Text>
      </CardItem>
      </Card>
      <ScrollView>
   <Text>raipur</Text>
   <Text>chadigarh</Text>
   <Text>bhalki</Text>
   <Text>nandi hills</Text>
   <Text>belagavi</Text>
   <Text>hubballi</Text>
   <Text>nelamangala</Text>
   <Text>biapur</Text>
   <Text>kolkotta</Text>
</ScrollView>
      
      
      
     






            </View>
        );
    }
}

export default Task3;
