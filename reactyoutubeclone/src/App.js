import React from 'react';
import "./App.css";
import Header from "./Header.js";
import Sidebar from "./Sidebar.js";
import Top25Videos from "./Top25Videso.js";
import { Grid } from '@material-ui/core';
import SearchBar from "./components/SearchBar.js";
import VideoDetail from "./components/VideoDetail.js";
import youtube from "./api/youtube";
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios';


class App extends React.Component {

  handleSubmit = (searchTerm) => {
    // console.log("SEARCH TERM", searchTerm);
    //debugger;
    const API_KEY = "AIzaSyB_lXlpLKvWO4JXo2rQnGStK5ptBtnF7gA";

    axios.get(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&q=${searchTerm}`)
      .then(response => {
        this.setState({response})
        console.log("STATE SEARCHTERM", this.state.response);

      });



  }

  render() {
    return (

      <Grid justify="center" container spacing={9}>
        <Grid item xs={10}>
          <Grid container spacing={10}>
            <Grid item xs={5}>
              <SearchBar onFormSubmit={this.handleSubmit}></SearchBar>
            </Grid>
            <Grid item xs={8}>
              <VideoDetail></VideoDetail>
            </Grid>
            <Grid item xs={4}>
            </Grid>
            {/* <Checkbox ></Checkbox> */}
          </Grid>
        </Grid>
      </Grid>





    )
  }

}
export default App;
