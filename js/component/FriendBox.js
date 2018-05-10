import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import px2dp from '../util/px2dp';
import Icon from 'react-native-vector-icons/FontAwesome';

const FriendBox = (props)=>{
  const len = props.list.length
  return (
    <View style={styles.friendBox}>
      <View style={styles.friendList} >
          {
            props.list.map((item)=>{
              return (
                <Image style={styles.friend} key={item.id} source={{uri:item.img}} />
              )
            })
          }
      </View> 
      {
        (len > 1) ? <Text>{len}位好友在读</Text> : <Text>{props.list[0].name}在读</Text>
      }
      <View style={styles.total}>
        <Icon name="user" size={20} color='gray' />
        <Text style={{ marginLeft:5}}>{props.total}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  friendBox: {
    alignItems: 'center',   
    justifyContent: 'center',
  },
  friendList: {
    flexDirection:'row',
    alignItems: 'center',   
    justifyContent: 'center',
    flexWrap: 'nowrap',
  },
  friend: {
    width: px2dp(30),
    height: px2dp(30),
    marginHorizontal: px2dp(5),
    borderRadius:px2dp(15),
    marginBottom:px2dp(5),
  },
  total: {
    flexDirection:'row',
    marginTop: px2dp(5),
  }
})


export default FriendBox