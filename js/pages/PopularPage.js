/**
 * Created by WQ on 2017/4/19.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import NavigationBar from "../component/NavigationBar"
import ScrollableTabView from "react-native-scrollable-tab-view"

export default class PopularPage extends Component{

    render(){
        return <View style={styles.container}>

        </View>;
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
});
