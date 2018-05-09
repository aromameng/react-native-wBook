import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  Modal
} from 'react-native';

export default class TestCom extends Component {
  static navigationOptions = {
    headerTitle: '测试',
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
        <Image style={{width: 120, height:120}} source={require('../img/01.png')} />
        <View style={{marginTop: 22}}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}>
            <View style={{marginTop: 22}}>
              <View>
                <Text>Hello World!</Text>

                <TouchableHighlight
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}>
                  <Text>Hide Modal</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>

          <TouchableHighlight
            onPress={() => {
              this.setModalVisible(true);
            }}>
            <Text>Show Modal</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}