/**
 * 老板信息完善的路由容器组件
 */


import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {
    NavBar,
    InputItem,
    TextareaItem,
    Button
} from 'antd-mobile';

import HeaderSelector from '../../components/header-selector/header-selectot';
import {updateUser} from '../../redux/actions';


class Danshen extends Component{
    state = {
        header:'',
        post:'',
        info:''
    }

    //更新header状态
    setHeader = (header) => {
        this.setState({
            header
        })
    }


    handleChange = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    save = () => {
        //console.log(this.state)
        this.props.updateUser(this.state);
    }


    render() {
        //如果信息已经完善，自动重定向到对应的主页面
        const {header, type} = this.props.user;
        if(header){
            //说明信息已经完善
            const path = type === 'dashen'?'/dahsen':'/laoban';
            return <Redirect to={path}/>
        }

        return (
            <div>
                <NavBar>大神信息完善</NavBar>
                <HeaderSelector setHeader = {this.setHeader}/>
                <InputItem placeholder="请输入求职岗位" onChange={val => { this.handleChange('post', val) }}>求职岗位:</InputItem>
                <TextareaItem title="个人介绍:" rows={3} onChange={val => { this.handleChange('info', val) }}></TextareaItem>
                <Button type='primary' onClick={this.save}>保&nbsp;&nbsp;&nbsp;&nbsp;存</Button>
            </div>
        )
    }
}

export default connect(
    state => ({user:state.user}),
    {updateUser}
)(Danshen)