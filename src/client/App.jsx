import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      inputText: 'Hello Karthik',
    };
    this.handleInput=this.handleInput.bind(this);
  }
  handleInput() {
    console.log('input capture');
  }
  render() {
    return (
      <div>
        <input type="text" onChange={this.handleInput} />
        <h1>{this.state.inputText}</h1>
        <p>Hi There, How are you</p>
      </div>
    );
  }
}
