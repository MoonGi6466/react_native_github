/**
 * Created by WQ on 2017/4/19.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    RefreshControl,
    TouchableOpacity
} from 'react-native';

import NavigationBar from "../component/NavigationBar"
import ScrollableTabView from "react-native-scrollable-tab-view"
import ProjectRow from "../component/ProjectRow";

export default class PopularPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            languages: ["Android","IOS","Java","React","JS"]
        };
    }

    getNavRightBtn =() => {
        return <View style={{flexDirection:'row',alignItems:'center'}}>
            <TouchableOpacity
                activeOpacity={0.7}>
                <Image source={require('../../res/images/ic_search_white_48pt.png')} style={{width:24,height:24}}/>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={0.7}>
                <Image source={require('../../res/images/ic_more_vert_white_48pt.png')} style={{width:24,height:24}}/>
            </TouchableOpacity>
        </View>;
    }

    render(){
        return <View style={styles.container}>
            <NavigationBar
                title="热门"
                rightButton={this.getNavRightBtn()}/>
            <ScrollableTabView
                tabBarBackgroundColor="#63B8FF"
                tabBarActiveTextColor="#FFF"
                tabBarInactiveTextColor="#F5FFFA"
                tabBarUnderlineStyle={{backgroundColor:"#E7E7E7",height:2}}>
                {
                    this.state.languages.map((item,i)=>{
                        return <PopularTab key={`tab${i}`} tabLabel={item}/>
                    })
                }
            </ScrollableTabView>
        </View>;
    }
}

class PopularTab extends Component{
    static defaultProps = {
        tabLabel: 'IOS',
    }
    constructor(props){
        super(props);
        this.state = {
            dataSource : new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2}), //是一个优化，节省无用的UI渲染
            isLoading : true
        };
    }
    //渲染ListView的每一行
    renderRow = (obj)=>{
        return <ProjectRow item={obj}/>
    }
    //加载数据
    loadData = ()=>{
        this.setState({isLoading:true});
        //请求网络
        fetch(`https://api.github.com/search/repositories?q=${this.props.tabLabel}&sort=stars`)
            .then(response => response.json()) //服务器响应response对象，继续变成json对象
            .then(json => {
                //更新dataSource
                this.setState({
                    dataSource:this.state.dataSource.cloneWithRows(json.items),
                    isLoading:false, //隐藏进度条
                });
            }).catch((error) => {
            console.error(error);
        }).done();
    }
    handleRefresh = ()=>{
        this.loadData();
    }
    render(){
        return <View style={styles.container}>
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isLoading}
                        onRefresh={this.handleRefresh}
                        tintColor="#63B8FF"
                        title="正在加载..."
                        titleColor="#63B8FF"
                        colors={['#63B8FF']}/>}
            />
        </View>;
    }

    componentDidMount = ()=>{
        this.loadData();
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
});
