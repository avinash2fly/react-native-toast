/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 /**
  * Sample React Native App
  * https://github.com/facebook/react-native
  * @flow
  */

 import React, {Component} from 'react';
 import {AppRegistry, StyleSheet, View, Button} from 'react-native';

import ToastAndroid from 'react-native-toast';

 const onButtonPress = () => {
  ToastAndroid.show('Awesome', ToastAndroid.SHORT);
  console.log("test");
 };

 export default class Example extends Component {
   render() {
     return (
       <View style={styles.container}>
         <Button title='Click' onPress={onButtonPress}/>
       </View>
     );
   }
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#F5FCFF'
   }
 });


AppRegistry.registerComponent('Example', () => Example);
