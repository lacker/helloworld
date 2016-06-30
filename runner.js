
var ReactDOM = require('react-dom');
var React = require('react');
var index = require('./index.js');

// Figure out what the root app was exported as
var root = null;
for (var key in index) {
  if (root) {
    throw new Error('you should only export one thing');
  }
  root = index[key]
}

ReactDOM.render(React.createElement(root, null),
                document.getElementById('root'))
