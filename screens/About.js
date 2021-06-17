import React from 'react'
import { View,Button, Text } from 'react-native'

export default function About({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
    <Text>This is gallery app</Text>
        <Button onPress={() => navigation.navigate('Home')} title="Go Back to Home" />
      </View>
    );
  }
  