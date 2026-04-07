import React, { Component } from 'react'
import Counter_HOC from './Counter_HOC';

class Hover_Counter extends Component {

  render() {
    return (
      <>
        <button onMouseOver={this.props.incrementCount}>Hovered {this.props.count} times</button>
      </>
    )
  }
}

export default Counter_HOC(Hover_Counter);