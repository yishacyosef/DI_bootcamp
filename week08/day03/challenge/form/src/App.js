import React from 'react';
import Form from './Form';
import './App.css';


class App extends React.Component{
  constructor(){
    super();
    this.state ={
      gname: '',
      sname: '',
      age: null,
      gender: '',
      destination: '',
      nuts: 'no',
      lactose: 'no',
      vegan: 'no'
    }
  }
  //there must be a cleaner way to do this, but that's what I could do for now.
  handleChange1=(e)=>{
  this.setState({gname: e.target.value}) 
  }
  handleChange2 =(e) =>{
    this.setState({sname: e.target.value})
  }
  handleChange3 =(e)=>{
    this.setState({age: e.target.value})    
  }
  handleChange4 =(e) =>{
    this.setState({gender: "male"})
  }
  handleChange5 =(e) =>{
    this.setState({gender: "female"})
  }
  handleChange6= (e) =>{
    this.setState({destination: e.target.value})
  }
  handleChange7 =(e) =>{
    if (e.target.checked) {
      this.setState({nuts: "yes"})
    } else {
      this.setState({nuts: "no"})
    }
  }
  handleChange8 =(e) =>{
    if (e.target.checked) {
      this.setState({lactose: "yes"})
    } else {
      this.setState({lactose: "no"})
    }
  }
  handleChange9 =(e) =>{
    if (e.target.checked) {
      this.setState({vegan: "yes"})
    } else {
      this.setState({vegan: "no"})
    }
  }

  render() {
    return(
      <>
      <h1>Form</h1>
      <br/>
      <form>
      <input onChange={this.handleChange1} placeholder='First Name'></input>
      <input onChange={this.handleChange2} placeholder='Last Name'></input>
      <input onChange={this.handleChange3} placeholder='Age'></input> <br/>
      <input onChange={this.handleChange4} type="radio" id="male" name="gender" value="male"/> 
      <label for="male">Male</label><br/>
      <input onChange={this.handleChange5} type="radio" id="female" name="gender" value="female"/>
      <label for="female">Female</label><br/>
      <h2>Select your destination</h2>
      <select onChange={this.handleChange6}>
        <option>Israel</option>
        <option>Germany</option>
        <option>Venezuela</option>
      </select>
      <h2>Dietary restrictions:</h2>
      <input onChange={this.handleChange7} type="checkbox" id="nuts" name="nutsFree" value="nutsFree"/>
      <label for="nuts"> Nuts free</label><br/>
      <input onChange={this.handleChange8} type="checkbox" id="lactose" name="lactoseFree" value="lactoseFree"/>
      <label for="lactose"> Lactose free</label><br/>
      <input onChange={this.handleChange9} type="checkbox" id="vegan" name="vegan" value="vegan"/>
      <label for="vegan"> Vegan</label><br/>
      <button type='submit' value='submit'>Submit</button>
      </form>

      <Form gname={this.state.gname} sname={this.state.sname} age={this.state.age} gender={this.state.gender} destination={this.state.destination} nuts={this.state.nuts} lactose={this.state.lactose} vegan={this.state.vegan}/>
      </>
    )
  }
}

export default App