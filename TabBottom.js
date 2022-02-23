import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/container/screens/Home';
import Cart from './src/container/screens/Cart';
import Oder from './src/container/screens/Oder';
import Detail from './src/container/screens/Detail';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Image, StyleSheet, View} from 'react-native';
import images from './src/res/images';
import sizes from './src/res/sizes';
import fonts from './src/res/fonts';
const HomeStack = createNativeStackNavigator();

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Homes"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="Detail"
        component={Detail}
        options={({route}) => ({
          title: route.params.cardName,
          headerStyle: {
            backgroundColor: '#AF7',
          },
        })}
      />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function TabBottom() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarActiveTintColor: '#2DC0FF',
        tabBarInactiveTintColor: '#D0EDFB',
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle:{
          height: 80,
          position: 'relative',
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          shadowColor: '#000',
          shadowOpacity: 0.2,
          backgroundColor:'red',
          shadowRadius: 5,
        },
        tabBarLabelStyle:{
          fontFamily: fonts.HelveticaNeueRegular,
          fontSize: sizes._14sdp,
          fontWeight: '400',
          paddingBottom: sizes._22sdp,
        },
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Home') {
            return focused ? (
              <View style={styles.viewIcon}>
                <Image
                  source={images.ic_home_white1x}
                  style={styles.colorIcon}
                />
              </View>
            ) : (
              <Image
                source={images.ic_home_white1x}
                style={{tintColor: '#BBBBBB'}}
              />
            );
          }else if (route.name === 'Cart') {
            return focused ? (
              <View style={styles.viewIcon}>
                <Image
                  source={images.ic_home_white1x}
                  style={styles.colorIcon}
                />
              </View>
            ) : (
              <Image
                source={images.ic_home_white1x}
                style={{tintColor: '#BBBBBB'}}
              />
            );
          }else if (route.name === 'Oder') {
            return (
              <View style={focused ? styles.viewIcon : ''}>
                <Image
                  source={images.ic_home_white1x}
                  style={styles.colorIcon}
                />
              </View>
            );
          }
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarBadge: 3,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        setOptions={{title: 'Cart'}}
        options={{
          tabBarLabel: 'Cart',
        }}
      />
      <Tab.Screen name="Oder" component={Oder} setOptions={{title: 'Oder'}} />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  viewIcon: {
    backgroundColor: '#D0EDFB',
    height: sizes._47sdp,
    width: sizes._47sdp,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: sizes._18sdp,
    marginTop: 10,
  },
  colorIcon: {
    tintColor: '#2DC0FF',
  },
});
