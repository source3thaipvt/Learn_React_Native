import {size} from 'lodash';
import React from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import images from '../res/images';
import sizes from '../res/sizes';
export default function CardListItem(props) {
  const {title, image, onPress} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.5} 
      onPress={onPress}
      >
        <Text>Card Name {title}</Text>
        <Image style={styles.categoryImage} source={image} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 20,
    shadowOffset: {width: 0, height: 0},
    borderColor: 'black',
    backgroundColor: 'blue',
    borderRadius: 10,
    borderWidth: 2,
    margin: 10,
  },
  categoryImage: {
    width: sizes._150sdp,
    height: sizes._150sdp,
  },
});
