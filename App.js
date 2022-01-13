import React, { Component } from 'react';
import { Image, View, Text, Button, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import img from './src/assets/images/'

class CustomText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Message 2",
            listData: [
                {
                //     image: require('../../../assets/images/ios.png'),
                //     title: "IOS"
                // },
                // {
                //     image: require('../../../assets/images/android.png'),
                //     title: "Android"
                // },
                // {
                    // image: require('./src/assets/images/fr'),
                //     title: "React Native"
                 
                }
            ]
        }
    }
    render() {
        return (
            <Text>{this.props.message}</Text>   /*Sử dụng props được truyền từ ngoài vào.*/
           
        );
    }
}
// this.setState({
// 	message: "Chào mừng"
// }, ()=>{
// 	console.log(this.state.message)   // kết quả: Chào mừng
// })
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Welcome to Code 101 - React-native"
        }
    }

    render() {
        return (
            <CustomText message={this.state.message} /> /*truyền 1 props vào cho thằng con sử dụng.*/
        );
    }
}
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: Colors.white,
    },
    containImage: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    textMessage: {
        marginTop: 16,
        color: 'green',
        fontSize: 16,
    },
    imgLogo: {
        width: 50,
        height: 50,
        margin: 4
    },
    btnStyle: {
        height: 50,
        width: 200,
        borderColor: Colors.primary,
        borderRadius: 5,
        borderWidth: 2,
        justifyContent: "center",
        alignItems: 'center',
        margin: 8
    },
    textAction: {
        color: Colors.primary,
        fontSize: 20,
        fontWeight: 'bold'
    },
    containerItem: {
        marginTop: 16,
        flexDirection: 'row',
        alignItems: 'center'
    }
});