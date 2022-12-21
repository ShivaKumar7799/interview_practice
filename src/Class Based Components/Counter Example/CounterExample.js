import React, {Component} from 'react'
import DisplayCounter from './CounterProps';

class CounterExample extends Component{
  constructor(){
    super();
    this.state = {
      counter : 0
    }
  }
  increment = () => {
    this.setState({
      counter : this.state.counter + 1
    })
  }
  decrement = () => {
    this.setState({
      counter : this.state.counter - 1
    })
  }
  render(){
    return <>
      <h1> Hello world</h1>
      {this.state.counter}
      <button onClick={this.increment} > Increment </button>
      <button onClick={this.decrement} >Decrement </button> 
      <DisplayCounter counter = {this.state.counter} />
    </>
  }
}
export default CounterExample