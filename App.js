import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/navigation/tabs'
import { StyleSheet, Text, View } from 'react-native'
const App = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})