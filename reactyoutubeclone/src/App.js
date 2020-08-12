import React from 'react';
import "./App.css";
import Header from "./Header.js";
import Sidebar from "./Sidebar.js";
import Top25Videos from "./Top25Videso.js";
// import youTube from './api/youtube';
import { Grid } from '@material-ui/core';
import {SearchBar, VideoDetail, VideoList} from "./components";


function App() {
  // function fetchData(){
  //makes axios request
  //assign response data to prop

  return (

    <Grid justify="center" container spacing={16}>
      <Grid item xs={12}>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <SearchBar></SearchBar>
          </Grid>
          <Grid item xs={8}>
            <VideoDetail></VideoDetail>
          </Grid>
          <Grid item xs={4}>
          </Grid>
        </Grid>
      </Grid>
    </Grid>


    // <div className="Header">
    //   <Header />
    //   <div className="app__page">
    //     <Sidebar />
    //     <Top25Videos />
    //   </div>


    // </div> 
  
  );
}

export default App;
