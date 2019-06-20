/*
包含n个reducer函数: 根据老的state和指定的action返回一个新的state
 */
import {combineReducers} from 'redux'

import {
  AUTH_SUCCESS,
  ERROR_MSG,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_USER_LIST,
  RECEIVE_MSG_LIST,
  RECEIVE_MSG
} from './action-types'

import {getRedirectTo} from '../utils';

const initUser = {
  username: '', // 用户名
  type: '', // 用户类型 dashen/laoban
  msg: '', // 错误提示信息
  redirectTo:'' //需要自动重定向的路由路径
}

// 产生user状态的reducer
function user(state=initUser, action) {
  switch (action.type) {
    case AUTH_SUCCESS: // data是user
      const {type, header} = action.data
      return {...action.data, redirectTo:getRedirectTo(type, header)}
    case ERROR_MSG: // data是msg
      return {...state, msg: action.data}
    case RECEIVE_USER: // data是user
      return action.data
    case RESET_USER: // data是msg
      return {...initUser, msg: action.data }
    default:
      return state
  }
}

const initUserList = [];
//产生userlist状态的reducer
function userList(state=initUserList, action){
  switch(action.type){
    case RECEIVE_USER_LIST:
      //data为userlist
      return action.data;
    default:
      return state;
  }
}

const initChat = {
  users:{},        //所有用户信息的对象。 属性名:userid, 属性值是:{username, header}
  chatMsgs:[],     //当前用户所有相关msg的数组
  unReadCount: 0   //总的未读消息数量

}
//产生聊天状态的reducer
function chat(state=initChat,action){
  switch(action.type){
    case RECEIVE_MSG_LIST:
      //data: {users, chatMsgs}
      const {users, chatMsgs} = action.data;
      return {
        users,
        chatMsgs,
        unReadCount: 0
      };
    case RECEIVE_MSG:
      //data:chatMsg
      const chatMsg = action.data;
      return {
        users : state.users,
        chatMsgs: [...state.chatMsgs, chatMsg],
        unReadCount: 0
      };
    default:
      return state;
  }
}

export default combineReducers({
  user,
  userList,
  chat
})
// 向外暴露的状态的结构: {user: {}, userList: [], chat: {}}


