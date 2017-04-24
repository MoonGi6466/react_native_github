/**
 * Created by WQ on 2017/4/19.
 */
import React, {Component,PropTypes} from 'react';
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
    static propTypes = {
        //验证，不传element组件类型，会报错提示
        rightButton : PropTypes.element,
        leftButton : PropTypes.element
    }

    render() {
        return <View style={styles.container}>
            <View style={styles.statusBar}>
                <StatusBar hidden={false} barStyle="light-content"/>
            </View>
            {/*顶部导航栏*/}
            <View style={styles.navBar}>
                <View style={styles.leftBtnStyle}>
                    {this.props.leftButton}
                </View>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>{this.props.title}</Text>
                </View>
                <View style={styles.rightBtn}>
                    {this.props.rightButton}
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
    leftBtnStyle:{
        flexDirection:'row',
        height:24
    },
    rightBtn:{
        flexDirection:'row',
        alignItems:'center',
        paddingRight:8
    }
});