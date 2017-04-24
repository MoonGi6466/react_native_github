/**
 * Created by WQ on 2017/4/24.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import NavigationBar from "../../component/NavigationBar";
import CustomKeyPage from "./CustomKeyPage"

export default class MyPage extends Component{

    //跳转
    gotoCustomKey =() =>{
        //跳转（类似于Android中添加一个任务到任务队列）
        this.props.navigator.push({
            component : CustomKeyPage
        });
    }

    render(){
        return <View style={styles.container}>
            <NavigationBar
                title="我的"/>

            <View style={{flexDirection:'column',alignItems:'center',marginTop:30}}>
                <Text onPress={this.gotoCustomKey}>自定义分类</Text>
            </View>
        </View>;
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
});