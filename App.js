import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'
import CardListItem from './src/components/CardListItem'

export default class App extends Component {
  state = {
    count: 0
  }

  onPress = () => {
    console.log('erro'+this.state.count);
    this.setState({
        
      count: this.state.count + 1
    })
  }

 render() {
    console.log('erro render'+this.state.count);
    return (
      <View style={styles.container}>
        <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
        >
         <Text>Click me</Text>
        </TouchableOpacity>
        <View>
          <Text>
            You clicked { this.state.count } times
          </Text>
          <CardListItem/>
          <CardListItem/>
        </View>
      </View>
    )
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
    marginBottom: 10
  }
})
