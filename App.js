import { StyleSheet, View } from 'react-native'
import React from 'react'
import Login from './src/Screen/Login/index.js'
import {SignupSchema} from './src/Screen/Login/validation.js'

const App = () => {
  return (
    <View>
      <Login />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})