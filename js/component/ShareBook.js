import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import FriendBox from './FriendBox' 
import px2dp from '../util/px2dp';

const friendData = [{
  id:'001',
  key:'001',
  name:'张三',
  img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2479554914,2670257952&fm=200&gp=0.jpg'
},{
  id:'002',
  key:'002',
  name:'王五',
  img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4141662129,642935094&fm=27&gp=0.jpg'
},{
  id:'003',
  key:'003',
  name:'李四',
  img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=853551482,77967462&fm=27&gp=0.jpg'
}]

const BookLabel = (props)=>{
  const { navigate } = props.navigation
  return (
    <TouchableOpacity onPress={() => navigate('BookDetail', { id: props.id })}> 
      <View style={styles.bookBox} onPress={() => navigate('IdeaDetail', { name: props.title })}> 
        <View style={styles.top}>
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
        <FriendBox style={styles.friendBox} list={friendData} total={263} />       
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  bookBox: {
    flex:1,
    flexDirection:'column',
    alignItems: 'stretch',   
    marginHorizontal: px2dp(30),
    marginBottom: px2dp(20),
    backgroundColor: '#fff',
  },
  bookImgBox: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop:px2dp(30),
  },
  bookTextBox: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: px2dp(10),
  },
  bookImg: {
    width: px2dp(200),
    height: px2dp(300),
  },
  bookTitle: {
    fontSize: 14,
    color: '#666'
  },
  bookAuthor: {
    fontSize: 12,
    color: '#999'
  },
  top: {
    flex:3  
  },
  friendBox: {
    flex:1
  },
})


export default BookLabel