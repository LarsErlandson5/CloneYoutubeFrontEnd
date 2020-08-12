import React from 'react';
import "./App.css";
import Header from "./Header.js";
import Sidebar from "./Sidebar.js";
import Top25Videos from "./Top25Videso.js";
import { Grid } from '@material-ui/core';
import SearchBar from "./components/SearchBar.js";
import VideoDetail from "./components/VideoDetail.js";
import youtube from "./api/youtube.js";


class App extends React.Component {
  
    state = {
      searchTerm:'',
    }
  handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search',{
      params: {
      part: 'snippet',
      maxResults: 5,
      key:"AIzaSyB_lXlpLKvWO4JXo2rQnGStK5ptBtnF7gA",
      q:searchTerm,
 } 
});
    console.log(response.data.items);
     this.setState({videos: response.data.items, selectedVideo: response.data.items[0]});
  }

render(){
  return (

    <Grid justify="center" container spacing={10}>
      <Grid item xs={5}>
        <Grid container spacing={10}>
          <Grid item xs={5}>
            <SearchBar onFormSubmit={this.handleSubmit}></SearchBar>
          </Grid>
          <Grid item xs={8}>
            <VideoDetail></VideoDetail>
          </Grid>
          <Grid item xs={4}>
          </Grid>
        </Grid>
      </Grid>
    </Grid>

 )
}

}
export default App;
