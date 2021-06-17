
import React, { Component } from 'react';
import {FlatList,StyleSheet,View,Image,Button,TouchableOpacity,Text} from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Container, Header,Icon,Left, Body, Right, Title } from 'native-base';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import About from './About';
let data = require('../Data.json')



function HomeScreen({ navigation }) {
  return (
    <Container>

        <Header style={{backgroundColor:'white',borderBottomWidth:0.2,borderColor:'black '}}>

 <TouchableOpacity 
   onPress={() => navigation.openDrawer()}
 >
<Icon 
 style={{padding:10}}
 name='menu' />
 </TouchableOpacity>
            
          
    
         
          <Body  style={{marginLeft:120,color:'black'}}>
            <Title style={{color:'black'}}>Gallery</Title>
          </Body>
     
        </Header>

        <FlatList
        horizontal={false}
        numColumns={3}
        data={data}
        renderItem={({ item }) => (
           
        <TouchableOpacity
          
            onPress={() => navigation.navigate("GalleryPhoto",item)}
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





const Drawer = createDrawerNavigator();

export default function App1({navigation}) {
  return (
  
      <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="About" component={About} />

  
      </Drawer.Navigator>
 
  );
}