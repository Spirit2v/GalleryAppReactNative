import React, { Component } from 'react';
import {FlatList,StyleSheet,View,Image,TouchableOpacity,Text} from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Container, Header, Left, Body, Right, Title } from 'native-base';
let data = require('../Data.json')

export default class App1 extends Component {
  
  render()
  
  
  {

    return (
      <Container>
        <Header
        
        >
     
          <Body  style={{alignItems:'center',color:'white'}}>
            <Title>Gallery</Title>
          </Body>
     
        </Header>

        <FlatList
        horizontal={false}
        numColumns={3}
        data={data}
        renderItem={({ item }) => (
            <TouchableOpacity
          
            onPress={() => this.props.navigation.navigate("GalleryPhoto",item)}
          >
                 <View style={{flex:1}}>
              <Image
                source={{ uri: item.photo }}
                style={{ width: 140, height: 140 }}
              
              />
            </View>
          </TouchableOpacity>
        )}
      />
       </Container>

    );
  }
}