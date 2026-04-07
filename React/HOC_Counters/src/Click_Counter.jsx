import React, { Component } from 'react'
import Counter_HOC from './Counter_HOC';

class Click_Counter extends Component {
  render() {
    return (
      <>
        <button onClick={this.props.incrementCount}>Clicked {this.props.count} times</button>
      </>
    )
  }
}

export default Counter_HOC(Click_Counter);