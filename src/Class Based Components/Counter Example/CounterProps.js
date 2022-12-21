import React, {Component} from 'react'

class DisplayCounter extends Component{
  render(){
    return <>
      <h1>Display the Counter : {this.props.counter} </h1>
    </>
  }
}

export default DisplayCounter