/* 
  大神主界面路由容器组件
*/

import React,{Component} from 'react';
import {connect} from 'react-redux';

class Dashen extends Component{
    render(){
      return (
        <div>大神</div>
      )
    }
}

export default connect(
  state => ({}),
  {}
)(Dashen)