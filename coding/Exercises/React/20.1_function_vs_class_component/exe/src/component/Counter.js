import React, { Component } from 'react'


class Counter extends Component {
    constructor() {
        super()
        this.state = {
            number: 0
        };
    }
    incrementNum() {
        this.setState((prevVal) => {
            return { number: prevVal.number < 10 ? prevVal.number + 1 : 10 };
        })
    }

    decrementNum() {
        this.setState((prevVal) => {
            return { number: prevVal.number > -10 ? prevVal.number - 1 : -10 };
        })
    }

    render() {
        return (
            <div className="container">
                <button onClick={this.incrementNum.bind(this)}>increment</button>
                <button onClick={this.decrementNum.bind(this)}>decrement</button>
                <div className='label'
                    style={{
                        backgroundColor: this.state.number === 0 ? 'black'
                            : this.state.number <= 10 && this.state.number > 0 ? 'green'
                                : this.state.number < 0 && this.state.number >= -10 ? 'red' : 'white'
                    }}>{this.state.number}</div>
            </div>
        );
    }

}

export default Counter
// } ({ currNumber }) {