import axios from 'axios';
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
import CardListItem from '../../components/CardListItem';
import images from '../../res/images';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      listItems: [
        {id: 1, titles: 'Item 1', image: images.fr_home11x},
        {id: 2, titles: 'Item 2', image: images.fr_home21x},
        {id: 3, titles: 'Item 3', image: images.fr_home31x},
        {id: 1, titles: 'Item 4', image: images.fr_home41x},
        {id: 2, titles: 'Item 5', image: images.fr_home51x},
        {id: 3, titles: 'Item 6', image: images.fr_home11x},
      ],
      categories: []
    };
  }
  
  componentDidMount(){
    axios.get('/categories')
    .then(res=>{
      this.setState({
        categories: res.data,
        
      })
    })
    .catch(error =>{
      console.error(error);
    })
  }
  onPress = () => {
    console.log('erro' + this.state.count);
    this.setState({
      count: this.state.count + 1,
    });
  };
  
  render() {
    console.log(this.state.categories)
    console.log('erro render' + this.state.count);
    const {categories} = this.state;
    const {navigation} = this.props;
    return (
      <View>
        <View
          style={{backgroundColor: '#F00', paddingLeft: 15, paddingRight: 15}}>
          <TouchableOpacity style={styles.button} onPress={this.onPress}>
            <Text>Click me</Text>
          </TouchableOpacity>
          <View>
            <Text>You clicked {this.state.count} times</Text>
            <FlatList
              data={this.state.listItems}
              renderItem={({item}) => (
                <CardListItem
                  category={item}
                  onPress={() =>
                    navigation.navigate('Detail', {
                      cardName: item.titles,
                      otherParams: 'Other Params: ' + item.titles,
                      categoryid: item.id
                    })
                  }
                />
              )}
              keyExtractor={item => `${item.id}`}
              />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
  },
});
