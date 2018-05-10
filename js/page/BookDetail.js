import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';

export default class BookDetail extends Component {
  static navigationOptions = {
    headerTitle: '',
  }

  constructor(props){
    super(props)
  }

  componentWillMount(){
    const {id} = this.props.navigation.state.params
    console.log(id)
  }
  
  render(){
    return (
      <View>
        <Text>书籍详情</Text>
      </View>
    )
  }
}