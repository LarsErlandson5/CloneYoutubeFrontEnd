import React from 'react';
import "./App.css";
import Header from "./Header.js";
// import Sidebar from "./Sidebar.js";
// import Sidebar from "./Top25Videos.js"

function App() {
  function fetchData(){
    //makes axios request
    //assign response data to prop
  }
  return (
    <div className="Header">
      <Header />
      <div className="app__page">
        <Sidebar />
        <Top25Videos videosData={this.fetchData()}/>
      </div>


      </div>
  );
}

export default App;
