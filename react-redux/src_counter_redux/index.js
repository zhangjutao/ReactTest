import React from 'react';
import ReactDOM from 'react-dom';
// import {createStore} from 'redux';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import store from './redux/store'

// import {counter} from './redux/reducers'

//生成一个store对象
// const store = createStore(counter);  //内部会第一次调用reducer函数得到初始state
// console.log(store);

//初始化渲染
ReactDOM.render(<App store={store}/>, document.getElementById('root'));

//订阅舰艇，store状态发生变化就会自动调用进行重绘
store.subscribe(function(){
    ReactDOM.render(<App store={store}/>, document.getElementById('root'));
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
