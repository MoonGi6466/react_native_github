/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import setup from "./js/pages/setup";


// export default class rn_github extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <HomePage/>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   }
// });

AppRegistry.registerComponent('rn_github', () => setup);
