import React from "react";
import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed"
import Widgets from "./components/Widgets";


//BEM naming convention

function App() {
  const user = null;
  return (
    <div className="app">
      {/* {!user ? (
        <h1>Login</h1>
      ) : ( */}
      <>
        <Header />
        <div className="app__body">  
          <Sidebar />
          <Feed />
          <Widgets />
          {/* App body*/}
          {/* App body*/}
          {/* App body*/}
        </div>
      
      </>
   )}
    </div>
  );
}

export default App;
