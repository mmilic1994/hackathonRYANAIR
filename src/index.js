import React from 'react';
import { render } from 'react-dom';
import './index.css';
import './index.html';

class App extends React.Component {
  render() {
    return <h1>Hello React!</h1>;
  }
}

render(<App />, document.querySelector('#app'));