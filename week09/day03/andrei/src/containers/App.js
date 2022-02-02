import React, {component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { setSearchField } from '../actions';


import './App.css';

class App extends Component{
  constructor() {
    super() 
      this.state = {
        robots: [],
        searchfield: ''
      }
  }

  componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/useres')
      .then(response => response.json())
      .then(useres => {this.setState({ robots: users})})
  }
} 


export default App;
