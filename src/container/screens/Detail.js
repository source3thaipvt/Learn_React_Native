import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  FlatList,
} from 'react-native';
import {keyExtractor} from 'react-native/Libraries/Lists/VirtualizeUtils';

import images from '../../res/images';
import ProductListItem from '../../components/ProductListItem';
export default class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          image: {url: images.fr_home11x},
          price: '120000',
          name: 'San Pham 001',
        },
        {
          id: 2,
          image: {url: images.fr_home21x},
          price: '220000',
          name: 'San Pham 002',
        },
        {
          id: 3,
          image: {url: images.fr_home31x},
          price: '320000',
          name: 'San Pham 003',
        },
        {
          id: 4,
          image: {url: images.fr_home41x},
          price: '420000',
          name: 'San Pham 004',
        },
        {
          id: 5,
          image: {url: images.fr_home21x},
          price: '520000',
          name: 'San Pham 005',
        },
      ],
    };
  }

  render() {
    const {route, navigation} = this.props;
    const {cardName, otherParams} = route.params;
    return (
      <View style={styles.container}>
        <Text>Detail {cardName}</Text>
        <Text>otherParam {otherParams}</Text>
        <FlatList
          data={this.state.products}
          numColumns={2}
          
          renderItem={({item}) => (
            <View style={styles.wapper}>
              <ProductListItem product={item} />
            </View>
          )}
          keyExtractor={item => `${item.id}`}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingTop: 16,
    
  },
  wapper:{
    width: '48%',
    paddingHorizontal: 8
  }
});
