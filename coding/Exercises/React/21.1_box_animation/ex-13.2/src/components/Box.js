import "../styles/Box.css";
import React, { Component } from "react";


export class Box extends Component {
  state = { show: false };
  componentDidMount() {
    this.timerID = setTimeout(() => {
      this.setState((prev) => {
        return { show: true };
      });
    }, 1000);
    setTimeout(() => {
      this.setState((prev) => {
        return { show: false };
      });
    }, 5000);
  }

  render() {
    return showBox ? (
      <div className="Box" style={{ width: width, height: height }}></div>
    ) : (
      <div></div>
    );
  }
}

export default Box;
