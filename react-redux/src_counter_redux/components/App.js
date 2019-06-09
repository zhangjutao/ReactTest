import React,{Component} from 'react';
// import {INCREMENT,DECREMENT} from '../redux/action-types'
import * as actions from '../redux/actions'

class App extends Component {

  increment = () => {
    const number = this.select.value * 1;
    // this.props.store.dispatch({
    //   type:INCREMENT,
    //   data:number
    // })
    this.props.store.dispatch(actions.increment(number))
  }

  decrement = () => {
    const number = this.select.value * 1;
    // this.props.store.dispatch({
    //   type:DECREMENT,
    //   data:number
    // })
    this.props.store.dispatch(actions.decrement(number))
  }

  incrementIfOdd = () => {
    const number = this.select.value * 1;
    const count = this.props.store.getState();
    if(count % 2 === 0){
      // this.props.store.dispatch({
      //   type:INCREMENT,
      //   data:number
      // })
      this.props.store.dispatch(actions.increment(number))
    }
  }

  incrementAsync = () => {
    const number = this.select.value * 1;
    setTimeout(() => {
      // this.props.store.dispatch({
      //   type:INCREMENT,
      //   data:number
      // })
      this.props.store.dispatch(actions.increment(number))
    },1000)
  }

  render(){
    const count = this.props.store.getState();
    return (
      <div className="App">
          <p>click {count} times</p>
          <div>
            {/* <非受控组件> */}
            <select ref = {select => this.select = select}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>&nbsp;&nbsp;
            <button onClick={this.increment}>+</button>&nbsp;&nbsp;
            <button onClick={this.decrement}>-</button>&nbsp;&nbsp;
            <button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;&nbsp;
            <button onClick={this.incrementAsync}>increment async</button>&nbsp;&nbsp;
          </div>
        </div>
    );
  }
}

export default App;
