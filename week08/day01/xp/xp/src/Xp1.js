/*Instructions
Create an element without JSX and render it. 
The element should be an <h1> with the content “I do not use JSX”
*/

import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  render() {
    return React.createElement('div', null, `I do not ${this.props.toWhat}`);
  }
}
ReactDOM.render(
  React.createElement(Hello, {toWhat: 'use JSX'}, null),
  document.getElementById('root')
);
export default Hello;