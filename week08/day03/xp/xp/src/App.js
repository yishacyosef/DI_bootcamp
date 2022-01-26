//I couldn't solve this XP, and what I did here and in 
// Errorboundary I tried to recreate Ziv's code after the class,
//but I couldn't

import './App.css';
import React, { component } from 'react';
import ErrorBoundary from './ErrorBoundary'

class BuggyCounter extends React.Component {
  constructor() {
    super();
    this.state = {
      BuggyCounter:0
    }
  }
  render(){
    if(this.state.BuggyCounter === 5) {
      throw new Error ('I crashed');
    }
    return(
      <>
        <button onClick={()=>this.setState({BuggyCounter:this.state.BuggyCounter+1})}> Click </button>
        {this.state.BuggyCounter}
      </>
    )
  }
}

export default BuggyCounter ;