import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';

export default class TestCom extends Component {
  static navigationOptions = {
    headerTitle: '想法详情',
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
        <Text>想法详情</Text>
      </View>
    )
  }
}