import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import Home from './src/container/screens/Home';

axios.defaults.baseURL ='http://localhost:3000';
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NavigationContainer>
          <AppNavigator/>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
  },
});
