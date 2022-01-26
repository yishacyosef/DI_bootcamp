import React from 'react';

export default class Child extends React.Component {
  constructor() {
    super()
  }
  componentWillUnmount(){
    // alert('Please do not throw me')
  }
  render(){
    return(
      <>
        <h2>I am a child component</h2>
      </>
    )
  }
}
// export default Child;
