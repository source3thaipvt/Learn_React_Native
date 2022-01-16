import { size } from 'lodash';
import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import images from '../res/images';
import sizes  from '../res/sizes';
export default function CardListItem(props) {
  return (
    <View style={styles.container}>
      <Text>Name Card List Item</Text>
      <Image style={styles.categoryImage} source={images.fr_home13x} />
    </View>
  );
}
const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        padding: 16,
        shadowColor: '#2333',
        shadowOpacity: 0.1,
        shadowRadius: 20,
        shadowOffset: {width: 0, height: 0},
        borderColor: 'black',
        backgroundColor: this.state,
        borderRadius: 10,
        borderWidth: 2,
        margin: 10,


    },
  categoryImage: {
    width: sizes._150sdp,
    height: sizes._150sdp,
  },
});
