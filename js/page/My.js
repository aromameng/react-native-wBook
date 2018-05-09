import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';

export default class TestCom extends Component {
  static navigationOptions = {
    headerTitle: '我的',
  }
  state = {
    language:'',
    modalVisible: false
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  render(){
    return (
      <View>
        <Text>我的</Text>
        <Image style={{width: 120, height:120}} source={require('../img/01.png')} />
      </View>
    )
  }
}