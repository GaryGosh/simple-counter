import React, { Component } from "react";
import randomColor from "randomcolor";
import "./Counter.css"

export default class Counter extends Component {

    state = {
        count: 0,
        color: randomColor()
    };

    increment = () => {
        this.setState({
            count: this.state.count + 1,
            color: randomColor()
        })
    };

    decrement = () => {
        this.setState({
            count: this.state.count - 1,
            color: randomColor()
        })
    }

  render() {
      const textColor = {color: this.state.color};
    return (
      <div>
        <h4 style={textColor}>{this.state.count}</h4>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}
