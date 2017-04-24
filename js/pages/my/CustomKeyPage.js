/**
 * Created by WQ on 2017/4/24.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

import NavigationBar from "../../component/NavigationBar";

export default class CustomKeyPage extends Component{

    handleBack = () =>{
        //把任务栈顶部的任务清除
        this.props.navigator.pop();
    }

    getNavLeftBtn = ()=>{
        return <View style={{flexDirection:'row',alignItems:'center'}}>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={this.handleBack}>
                <Image source={require('../../../res/images/ic_arrow_back_white_36pt.png')} style={{width:24,height:24}}/>
            </TouchableOpacity>
        </View>;
    }

    getNavRightBtn = ()=>{
        return <View style={{flexDirection:'row',alignItems:'center'}}>
            <TouchableOpacity
                activeOpacity={0.7}>
                <View style={{marginRight:10}}>
                    <Text style={{fontSize:16,color:'#FFF'}}>保存</Text>
                </View>
            </TouchableOpacity>
        </View>;
    }

    render(){
        return <View style={styles.container}>
            <NavigationBar
                title="自定义分类"
                rightButton={this.getNavRightBtn()}
                leftButton={this.getNavLeftBtn()}/>

        </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});