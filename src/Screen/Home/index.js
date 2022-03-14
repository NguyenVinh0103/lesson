import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  Dimensions,
  Image,
  Alert,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik, Form, Field} from 'formik';
import {SignupSchema} from '../../Constant';

import {background, facebook, google, twitter} from '../../Assets';
const {height} = Dimensions.get('window');

const Home = () => {
  return (
    <ImageBackground
      source={background}
      resizeMode="cover"
      style={styles.image}>
      <View style={styles.container}>
        <Text>index</Text>
      </View>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: height,
    width: '100%',
  },
});
