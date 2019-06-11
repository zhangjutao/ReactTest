/*
redux最核心的管理对象模块
*/
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

//向外暴露store对象
export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))