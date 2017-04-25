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
    TouchableOpacity,
    AsyncStorage,
    Alert
} from 'react-native';

import NavigationBar from "../../component/NavigationBar";
import CheckBox from "react-native-check-box";
import Toast from "react-native-easy-toast";
import ArrayUtils from "../../component/ArrayUtils";

export default class CustomKeyPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            data : [
                {name:'Android',checked:true},
                {name:'IOS',checked:false},
                {name:'React Native',checked:true},
                {name:'Java',checked:true},
                {name:'JS',checked:true}
            ]
        };
    }

    doBack = ()=>{
        //把任务栈顶部的任务清除
        this.props.navigator.pop();
    }

    //返回
    handleBack = () =>{
        if(ArrayUtils.isAbsEqual(this.originData,this.state.data)){
            this.doBack();
            return;
        }
        Alert.alert('提示','是否需要保存？',[
            {text: '是',onPress: ()=>{this.doSave()}},
            {text: '否',onPress: ()=>{this.doBack()}}
        ]);
    }

    doSave = () => {
        //AsyncStorage是一个简单的、异步的、持久化的Key-Value存储系统
        AsyncStorage.setItem('custom_key',JSON.stringify(this.state.data))
            .then(()=> {
                this.refs.toast.show("保存成功");
                this.doBack();
            });
    }

    //保存
    handleSave = ()=>{
        this.doSave();
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
                activeOpacity={0.7}
                onPress={this.handleSave}>
                <View style={{marginRight:10}}>
                    <Text style={{fontSize:16,color:'#FFF'}}>保存</Text>
                </View>
            </TouchableOpacity>
        </View>;
    }

    handleClick = (item)=>{
        item.checked = !item.checked;
        this.setState({isModified:true});
    }

    renderCheckBox=(item)=>{
        return <CheckBox
            style={{flex:1,padding:10}}
            onClick={()=>this.handleClick(item)}
            leftText={item.name}
            isChecked={item.checked}
            unCheckedImage={<Image source={require('../../../res/images/ic_check_box_outline_blank.png')} style={styles.checkbox}/>}
            checkedImage={<Image source={require('../../../res/images/ic_check_box.png')} style={styles.checkbox}/>}
        />
    }

    renderviews=()=>{
        let len = this.state.data.length;
        var views = [];
        for(let i = 0, j = len - 2; i < j; i+=2){
            views.push((
                <View key={`view_${i}`} style={{flexDirection:'row'}}>
                    {this.renderCheckBox(this.state.data[i])}
                    {this.renderCheckBox(this.state.data[i+1])}
                </View>
            ));
        }

        views.push(
            <View key={`view_${len-1}`} style={{flexDirection:'row'}}>
                {len % 2 ===0 ? this.renderCheckBox(this.state.data[len-2]) : <View style={{flex:1, padding:10}}></View>}
                {this.renderCheckBox(this.state.data[len-1])}
            </View>
        );
        return views;
    }

    render(){
        return <View style={styles.container}>
            <NavigationBar
                title="自定义分类"
                rightButton={this.getNavRightBtn()}
                leftButton={this.getNavLeftBtn()}/>
            <View style={{flexDirection:'column'}}>
                {this.renderviews()}
            </View>
            <Toast ref="toast"/>
        </View>;
    }

    componentDidMount = () => {
        //加载本地数据
        AsyncStorage.getItem('custom_key')
            .then(value=>{
                //有用户数据，选中该选中CheckBox
                if(value !==null){
                    this.setState({data:JSON.parse(value)});
                }
                //把原始数组克隆
                this.originData = ArrayUtils.clone(this.state.data)
            });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    checkbox:{
        tintColor:'#63B8FF'
    }
});