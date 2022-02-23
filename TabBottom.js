import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/container/screens/Home';
import Cart from './src/container/screens/Cart'
import Oder from './src/container/screens/Oder'
import Detail from './src/container/screens/Detail';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const HomeStack = createNativeStackNavigator();

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Homes" component={Home} options={{
        headerShown: false
      }}/>
      <HomeStack.Screen name="Detail" component={Detail} 
      options={({ route }) => ({ title: route.params.cardName,
      headerStyle:{
        backgroundColor: '#AF7'
      }
        })} 
      />
    </HomeStack.Navigator>
  );
}


const Tab = createBottomTabNavigator();
 
export default function TabBottom(){
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackNavigator} setOptions={{ title: 'Home' }} options={{ tabBarBadge: 3 , headerShown: false}} />
        <Tab.Screen name="Cart" component={Cart} setOptions={{ title: 'Cart' }} />
        <Tab.Screen name="Oder" component={Oder} setOptions={{ title: 'Oder' }} />
      </Tab.Navigator>
    )
  }