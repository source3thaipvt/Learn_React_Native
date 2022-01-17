import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  FlatList,
} from 'react-native';
import { keyExtractor } from 'react-native/Libraries/Lists/VirtualizeUtils';

import images from '../../res/images';

export default class App extends Component {
  state = {
    count: 0,
    listItems: [
      {id: 1, title: 'Item 1', image: images.fr_home11x},
      {id: 2, title: 'Item 2', image: images.fr_home21x},
      {id: 3, title: 'Item 3', image: images.fr_home31x},
      {id: 4, title: 'Item 4', image: images.fr_home41x},
      {id: 5, title: 'Item 5', image: images.fr_home51x},
      {id: 6, title: 'Item 6', image: images.fr_home11x},
    ],
  };

  onPress = () => {
    console.log('erro' + this.state.count);
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    console.log('erro render' + this.state.count);
    const {listItems} = this.state;
    const {route, navigation} =  this.props;
    const { cardName, otherParams } = route.params;
    return (
      <View>
      <Text>Detail {cardName}</Text>
      <Text>otherParam {otherParams}</Text>
        <ScrollView
          style={{paddingLeft: 15, paddingRight: 15}}
          contentContainerStyle={{backgroundColor: '#A60'}}>
          <View>

          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  
});
