import React from 'react';
import './App.css';
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Parent from './Parent'
import Nav from './Nav';
import {Routes, Route} from 'react-router-dom'

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Parent/>} />
        </Routes>
      </>
    )

  }
}

export default App;
