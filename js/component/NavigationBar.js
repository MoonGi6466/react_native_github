/**
 * Created by WQ on 2017/4/19.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    StatusBar,
    Platform,
    TouchableOpacity
} from 'react-native';

export default class NavigationBar extends Component {
    render() {
        return <View style={styles.container}>
            <View style={styles.statusBar}>
                <StatusBar hidden={false} barStyle="light-content"/>
            </View>
            {/*顶部导航栏*/}
            <View style={styles.navBar}>
                <View style={styles.navBtn}></View>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>热门</Text>
                </View>
                <View style={styles.rightBtn}>
                    <TouchableOpacity
                        activeOpacity={0.7}>
                        <Image source={require('../../res/images/ic_search_white_48pt.png')} style={styles.navBtn}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.7}>
                        <Image source={require('../../res/images/ic_more_vert_white_48pt.png')} style={styles.navBtn}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#63B8FF',
        padding: 5
    },
    statusBar: {
        height: Platform.OS === 'ios' ? 20 : 0
    },
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleWrapper:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        left:40,
        right:40,
        bottom:0
    },
    title:{
        fontSize:16,
        color:'#fff'
    },
    navBtn:{
        width:24,
        height:24
    },
    rightBtn:{
        flexDirection:'row',
        alignItems:'center',
        paddingRight:8
    }
});