import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Button
} from 'react-native';

export default class TestCom extends Component {
  static navigationOptions = {
    headerTitle: '想法',
  }
  state = {
    language:'',
    modalVisible: false
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  render(){
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>想法</Text>
        <Button
          title="详情"
          onPress={() =>
            navigate('IdeaDetail', { name: 'Jane' })
          }
        />
      </View>
    )
  }
}