import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import styles from './NewsCardStyles'
const NewsCard = ({news}) => {
  return(
    <View style={styles1.danger}>
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: news.imageUrl}}/>
      <Text style={styles.title}>{news.title}</Text>
      <Text style={styles.description}>{news.description}</Text>
      <Text style={styles.author}>Author: {news.author}</Text>
    </View>
    </View>
  )
};
const styles1 = StyleSheet.create({
  danger: {
    backgroundColor:'#eceff1'
  }
})
export default NewsCard;

