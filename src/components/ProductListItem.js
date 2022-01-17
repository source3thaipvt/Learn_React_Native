import {size} from 'lodash';
import React from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import images from '../res/images';
import sizes from '../res/sizes';
import { formatPrice } from './Number';
export default function ProductListItem(props) {
  const {product, onPressAddBuy} = props;

  return (
    <View style={styles.shadow}>
    <View style={styles.container}>
        <Image style={styles.img} source={ product.image.url }/>
        <View style={styles.info}>
            <Text style={styles.name}>{product.name}</Text>
            <View style={styles.priceRow}>
                <Text style={styles.price}>{formatPrice(product.price)}</Text>
                <TouchableOpacity onPress={onPressAddBuy}>
                    <Text style={styles.cartText}>Mua +</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  cartText: {
      textTransform: 'uppercase',
      fontSize: 16,
      color: '#f78'

  },
  shadow: {
      shadowColor: '#000',
      shadowRadius: 10,
      shadowOpacity: 0.4,
      shadowOffset: {width:0, height: 0}
  },
  container: {
      marginBottom: 20,
      borderRadius: 7,
      backgroundColor: '#d324',
      overflow: 'hidden'
  },
  info: { padding: 8},
  img: {
      height: 150,
      borderTopLeftRadius: 6,
      borderBottomLeftRadius: 6,

  },
  name: {
      fontSize: 16,
      marginBottom: 8
  },
  priceRow:{
      flexDirection: 'row',
      alignItems: 'center',

  },
  price: {
      fontSize: 16,
      color: '#888',
      flex: 1
  }
});
