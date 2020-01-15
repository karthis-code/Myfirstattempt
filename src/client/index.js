import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  render() {
    return <h1>Hello, Welcome to Karthi's World</h1>;
  }
}

render(<App />, document.getElementById('root'));