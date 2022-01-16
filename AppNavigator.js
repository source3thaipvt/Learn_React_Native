import React from 'react';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/container/screens/Home';
import Detail from './src/container/screens/Detail';
import {View , Text} from 'react-native';
const Stack = createNativeStackNavigator();


export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
      <Stack.Screen name="Detail" component={Detail} options={{title: 'Detail'}} />
    </Stack.Navigator>
  );
}
