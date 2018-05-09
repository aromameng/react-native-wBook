/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  createStackNavigator,
  createMaterialTopTabNavigator
} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import Discover from './page/Discover'
import BookList from './page/BookList'
import Idea from './page/Idea'
import My from './page/My'
import IdeaDetail from './page/IdeaDetail'

// 底部导航
const DB_App = createMaterialTopTabNavigator({
  Discover: {
    screen: Discover,
    navigationOptions: ({navigation}) =>({
         tabBarLabel: '发现',
         tabBarIcon: ({tintColor,focused}) => (
             <Icon name="cc-discover" size={20} color={tintColor} />
         ),
    }),
  },
  BookList: {
    screen: BookList,
    navigationOptions:{
         tabBarLabel: '书架',
         tabBarIcon: ({tintColor}) => (
             <Icon name="book" size={20} color={tintColor} />
         ),
    },
  },
  Idea: {
    screen: Idea,
    navigationOptions:{
         tabBarLabel: '想法',
         tabBarIcon: ({tintColor}) => (
             <Icon name="comment" size={20} color={tintColor}/>
         ),
    },
  },
  My: {
    screen: My,
    navigationOptions:{
         tabBarLabel: '我的',
         tabBarIcon: ({tintColor}) => (
             <Icon name="user" size={20} color={tintColor}/>
         ),
     },
  }
}, {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: '#31AEFE',
    inactiveTintColor: '#666',
    labelStyle: {
      fontSize: 12,
      marginTop: 2,
    },
    showIcon: true,
    style: {
      borderTopWidth: 1,
      borderTopColor: '#c3c3c3',
      height: 60,
      backgroundColor:'#fff'
    },
  }
})


const App = createStackNavigator({
  Main: {
    screen: DB_App
  },
  IdeaDetail: {screen: IdeaDetail}
},{
  headerMode:'screen'
});

export default App