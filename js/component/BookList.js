import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import px2dp from '../util/px2dp';
import BookLabel from './Book'

const BookList = (props)=>{
  return (
    <View style={styles.bookList}>
      {
        props.list.map((item,index)=>{
          return (
            <BookLabel key={item.id} navigation={props.navigation} {...item} />
          )
        })
      }       
    </View>
  )
}

const styles = StyleSheet.create({
  bookList: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection:'row',
    marginHorizontal: px2dp(30),
  }
})

export default BookList