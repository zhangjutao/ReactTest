import React,{Component} from 'react';
import {connect} from 'react-redux';

class Chat extends Component{
    render(){
        return (
            <div>聊天</div>
        )
    }
}

export default connect(
    state => ({}),
    {}
)(Chat)