import React from "react";

class Click_Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            count : 0,
        }
    }

    incrementCount = () => {
        this.setState( (prevState) => {
            return {count : prevState.count + 1}
        });
    };

    resetCount = () => {
        this.setState ( () => {
            return {count : 0}
        });
    };

    render() {
        return (
            <>
                <button onClick={this.incrementCount}>Clicked { this.state.count } times</button>
                <br /><br />
                <button onClick={this.resetCount}>Reset</button>
            </>
        );
    }
}

export default Click_Counter;