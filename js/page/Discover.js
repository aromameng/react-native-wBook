/*
 * @Author: meng 
 * @Date: 2018-05-10 
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';
import px2dp from '../util/px2dp';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import BookList from '../component/BookList'
import ShareBook from '../component/ShareBook'


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const recommendList = [{
  id: 1,
  title: '我不',
  author: '大冰',
  uri: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=725766518,3316946296&fm=200&gp=0.jpg'
},{
  id: 2,
  title: '小小小小的火',
  author: '伍绮诗',
  uri: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2132900170,1460349038&fm=200&gp=0.jpg'
},{
  id: 3,
  title: '天意',
  author: '钱莉芳',
  uri: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3838280983,327545779&fm=27&gp=0.jpg'
},{
  id: 4,
  title: '法医秦明',
  author: '公众号文集',
  uri: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3320564438,3575826677&fm=200&gp=0.jpg'
}]

const likeList = [{
  id: 1,
  title: '升仙传',
  author: '倚云氏',
  uri: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=725766518,3316946296&fm=200&gp=0.jpg'
},{
  id: 2,
  title: '呼啸山庄',
  author: '伍绮诗',
  uri: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2132900170,1460349038&fm=200&gp=0.jpg'
},{
  id: 3,
  title: '朗读者',
  author: '董卿主编',
  uri: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3838280983,327545779&fm=27&gp=0.jpg'
},{
  id: 4,
  title: '蛙',
  author: '莫言',
  uri: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3320564438,3575826677&fm=200&gp=0.jpg'
}]

const shareList = {
  id: 1,
  title: '瓦尔登湖',
  author: '梭罗',
  uri: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=725766518,3316946296&fm=200&gp=0.jpg'
}

export default class App extends Component {
  constructor(props){
    super(props)
  }
  static navigationOptions = {
    title: '发现'  
  }
  render() {
    return (
      <Swiper style={styles.wrapper} loop={false} showsPagination={false}>
        <View style={[styles.slide1,styles.slide]}>
          <View style={styles.inner}>
             <Text style={styles.head}>本周推荐</Text>   
             <BookList {...this.props} list={recommendList} />
          </View>
        </View>
        <View style={[styles.slide2,styles.slide]}>
          <View style={styles.inner}>
             <Text style={styles.head}>猜你喜欢</Text>   
             <BookList {...this.props} list={likeList} />
          </View>
        </View>
        <View style={[styles.slide3,styles.slide]}>
          <View style={styles.inner}>
            <ShareBook {...shareList} {...this.props} />
          </View>
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
  },
  slide:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    flexDirection:'row',
  },
  inner: {
    flex:1,
    marginHorizontal: 20,
    backgroundColor: '#fff',
    marginTop: 10,
    marginBottom: 20,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide1: {
    
  },
  slide2: {
    
  },
  slide3: {
    
  },
  text: {
    color: '#666',
    fontSize: 30,
    fontWeight: 'bold',
  },
  head: {
    height: 30,
    fontSize: 18,
    marginVertical: 20,
  },
})
