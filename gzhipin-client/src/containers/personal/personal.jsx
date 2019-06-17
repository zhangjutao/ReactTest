/* 
  个人界面路由容器组件
*/

import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Result, List, WhiteSpace, Button} from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;
class Personal extends Component{

    logout = () => {
      alert('登录')
    }

    render(){
      const {username, info, header, company, post, salary} = this.props.user;

      return (
        <div>
          <Result img={<img src={require(`../../assets/images/${header}.png`)} style={{width:50}} alt="header" />} title={username} message={company}/>
          <List renderHeader={() => '相关信息'}>
            <Item multipleLine>
              <Brief>职位: {post}</Brief>
              <Brief>简介: {info}</Brief>
              {salary ? <Brief>薪资: {salary}</Brief>:null}
            </Item>
          </List>
          <WhiteSpace/>
          <List>
            <Button type="warning" onClick={this.logout}>退出登录</Button>
          </List>
        </div>
      )
    }
}

export default connect(
  state => ({user:state.user}),
  {}
)(Personal)