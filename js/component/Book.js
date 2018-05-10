import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import px2dp from '../util/px2dp';

const BookLabel = (props)=>{
  const { navigate } = props.navigation
  return (
    <TouchableOpacity onPress={() => navigate('BookDetail', { id: props.id })}> 
      <View style={styles.bookBox}> 
        <View style={styles.bookImgBox}>
          <Image 
            style={styles.bookImg}
            source={{uri: props.uri}} />
        </View>
        <View style={styles.bookTextBox}>
          <Text style={styles.bookTitle}>{props.title}</Text>
          <Text style={styles.bookAuthor}>{props.author}</Text>
        </View>        
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  bookBox: {
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    marginHorizontal: 10,
    width: px2dp(140),
    height: px2dp(200),
    marginBottom: px2dp(20),
  },
  bookImgBox: {
    backgroundColor: '#ddd',
    flex: 3,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  bookTextBox: {
    flex: 2,
    backgroundColor: '#eee',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 10
  },
  bookImg: {
    width: px2dp(60),
    height: px2dp(100),
  },
  bookTitle: {
    fontSize: 14,
    color: '#666'
  },
  bookAuthor: {
    fontSize: 12,
    color: '#999'
  }
})


export default BookLabel