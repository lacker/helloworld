import React from 'react';
import ReactDOM from 'react-dom';

export default class App {
  render() {
    return (
      <div>Hello world!</div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
