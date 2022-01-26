import React,{Component} from 'react';
import Child from './Child'

export default class Parent extends Component {
  constructor(){
    super();
    this.state = {
      show: true,
    }
  }
  toggle = (param) => {
    this.setState({show:param})
  }
  render(){
    return(
      <>
        {this.state.show ? <Child/> : null}
        <button onClick={()=> this.setState({show:!this.state.show})}> Click me to toggle child</button>
      </>
    )
  }
}
