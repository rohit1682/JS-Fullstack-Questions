/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
// import Click_Counter from './Click_Counter'
// import Hover_Counter from './Hover_Counter'

const Counter_HOC = (CurrentComponent) => {

    class NewComponent extends Component {

        constructor(props) {
          super(props)
        
          this.state = {
            count : 0,
          }
        }

        incrementCount = () => {
            this.setState( prevState => {
                return { count: prevState.count + 1 };
            });
        }

        render() {
            return (
                <>
                    <CurrentComponent 
                        count = { this.state.count }
                        incrementCount = { this.incrementCount }
                    />
                </>
            );
        }
    }

    return NewComponent;
}

export default Counter_HOC