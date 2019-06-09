import {createStore} from 'redux';
import {counter} from './reducers'

//生成一个store对象
const store = createStore(counter);  //内部会第一次调用reducer函数得到初始state
console.log(store);

export default store;