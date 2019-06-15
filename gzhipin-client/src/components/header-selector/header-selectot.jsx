/** 
 * 选择用户头像的UI组件
*/
import React,{Component} from 'react';

import {List,Grid} from 'antd-mobile';
export default class HeaderSelector extends Component{
    constructor(props){
        super(props);
        //准备需要显示的列表数据
        this.HeaderList = [];
        for(let i = 0; i < 20; i++){
            this.HeaderList.push({
                text: '头像' + (i + 1),
                icon: require(`../../assets/images/头像${i+1}.png`)
            })
        }
    }

    render(){
        //头部界面
        const listHeader = '请选择头像';
        return (
            <List renderHeader={() => listHeader}>
                <Grid data={this.HeaderList} columnNum={5}></Grid>
            </List>
        )
    }
}
