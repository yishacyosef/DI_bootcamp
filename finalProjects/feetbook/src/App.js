import React from "react";
import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed"
import Widgets from "./components/Widgets";


function App() {
  return (
    <div className="app">
      <Header/>
      <div className="app__body">  
      <Sidebar />
      <Feed />
      <Widgets />
      {/* App body*/}
      </div>
    </div>
  );
}

export default App;
