import React from 'react';
import ReactDOM from 'react-dom';

const myelement = <h1>I Love JSX!</h1>;
console.log(myelement)
const sum = <h1>React is {5 + 5} times better with JSX</h1>;
console.log(sum)
ReactDOM.render(sum, document.getElementById('root'));

console.log(myelement)

