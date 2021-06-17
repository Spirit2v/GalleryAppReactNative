
import React, { Component } from 'react';
import {FlatList,StyleSheet,View,Image,Button,TouchableOpacity,Text} from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Container, Header, Left, Body, Right, Title } from 'native-base';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
let data = require('../Data.json')



function HomeScreen({ navigation }) {
  return (
    <Container>
      
        <Header>
     
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

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}


function Test({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.navigate('Notifications')} title=" home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App1({navigation}) {
  return (
  
      <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Test" component={Test} />

        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
 
  );
}