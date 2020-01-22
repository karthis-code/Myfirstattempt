/*eslint-disable no-magic-numbers */
import React from "react";
class App extends React.Component {
  state = {
    count: 0,
  };
  increment = () => {
    const currentVal = this.state.count;

    this.setState({
      count: currentVal + 1,
    });
  }
  decrement = () => {
    const currentVal = this.state.count;

    this.setState({
      count: currentVal -1,
    });
  }
  render() {
    return <div>
      <p>{this.state.count}</p>
      <button onClick={this.increment}>+</button>
      <button onClick={this.decrement}>-</button>
    </div>
  }
}
export default App

//export default class App extends Component {
//constructor() {
//super();
//this.state = {
//inputText: "Hello Karthik"
//};
//this.handleInput = this.handleInput.bind(this);
//}
//handleInput() {
// console.log("input capture");
//}
//render() {
//return (
//<div>
// <input type="text" onChange={this.handleInput} />
//<button>+</button>
//<button>-</button>
//</div>
//);
//}
//}
