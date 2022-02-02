import React, {component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { setSearchField } from '../actions';
import './App.css';

const mapStateToProps = state =>{
  return{
    searchField: state.searchfield
  }
}
const mapDispatchToProps = (dispatch) => {
 return {
   onSearchChange: (event) => dispatch(setSearchField(event.target.value))
 }
}

class App extends Component{
  constructor() {
    super() 
      this.state = {
        robots: []
      }
  }

  componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/useres')
      .then(response => response.json())
      .then(useres => {this.setState({ robots: users})});
  }


render() {
  const {robots} = this.state;
  const { searchField, onSearchChange } = this.props;
  const filteredRobots = robots.filter(robot =>{
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  })
  return !robots.lenght ?
    <h1>Loading</h1> :
    (
    <div className = "tc">
      <h1 className='f1'>RoboFriends</h1>
      <searchBox searchChange = {onSearchChange}/>
      <Scroll>
        <CardList robots= {filteredRobots}/>
      </Scroll>
    </div>
  );
}
}
 


export default connect(mapStateToProps, mapDispatchToProps)(App);
