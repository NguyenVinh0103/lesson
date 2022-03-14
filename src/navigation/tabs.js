import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from '../Screen/Login/index.js';
import Detail from '../Screen/Detail/index.js';
import Home from '../Screen/Home/index.js';
import Mess from '../Screen/Mess/index.js';
import Settings from '../Screen/Settings/index.js';

import {iconFriend,iconBell, iconHome, iconSetting, iconDetail1} from '../Assets';
const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          marginBottom: 16,
          marginLeft: 20,
          marginRight: 20,
          marginTop: 12,
          elevation: 0,
          backgroundColor: '#ffb6c1',
          borderRadius: 12,
          height: 44,
          shadowColor: '#7fff00',
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="Detail"
        component={Detail}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={iconDetail1}
                style={{
                  width: 24,
                  height: 24,
                  marginLeft:4/2
                }}
              />
              <Text style = {{color: focused ? '#fff' : '#000', fontSize: 12}}>Detail</Text>
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={iconHome}
                style={{
                  width: 24,
                  height: 24,
                  marginLeft:4
                }}
              />
              <Text style = {{color: focused ? '#fff' : '#000', fontSize: 12}}>Home</Text>
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={iconFriend}
                style={{
                  width: 24,
                  height: 24,
                  marginLeft:4/2
                }}
              />
              <Text style = {{color: focused ? '#fff' : '#000', fontSize: 12}}>Login</Text>
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={iconSetting}
                style={{
                  width: 24,
                  height: 24,
                  marginLeft:8
                }}
              />
              <Text style = {{color: focused ? '#fff' : '#000', fontSize: 12}}>Settings</Text>
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Mess"
        component={Mess}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={iconBell}
                style={{
                  width: 24,
                  height: 24,
                  marginLeft:4/2
                }}
              />
              <Text style = {{color: focused ? '#fff' : '#000', fontSize: 12}}>Mess</Text>
            </View>
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default Tabs;
