import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import Home from './src/container/screens/Home';
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
