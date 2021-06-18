import React from 'react'
import { View, StatusBar,Text } from 'react-native'
import Dummy from './screens/Dummy'

import Route from './screens/Route'

export default function App() {
  return (
    <>
    <StatusBar
    barStyle="light-content"
   
    backgroundColor="white" />
  <Route />
  </>)
}
