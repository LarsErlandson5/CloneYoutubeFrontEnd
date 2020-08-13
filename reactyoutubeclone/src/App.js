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



class App extends React.Component {



  handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: "AIzaSyB_lXlpLKvWO4JXo2rQnGStK5ptBtnF7gA",
        q: searchTerm,
      }
    });

    console.log(response.data.items);
    this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
  }

  render() {
    return (

      <Grid justify="center" container spacing={16}>
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
          </Grid>
        </Grid>
      </Grid>
      <div>
        <Checkbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
        <Checkbox
          defaultChecked
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
        <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
        <Checkbox disabled inputProps={{ 'aria-label': 'disabled checkbox' }} />
        <Checkbox disabled checked inputProps={{ 'aria-label': 'disabled checked checkbox' }} />
        <Checkbox
          defaultChecked
          indeterminate
          inputProps={{ 'aria-label': 'indeterminate checkbox' }}
        />
        <Checkbox
          defaultChecked
          color="default"
          inputProps={{ 'aria-label': 'checkbox with default color' }}
        />
        <Checkbox
          defaultChecked
          size="small"
          inputProps={{ 'aria-label': 'checkbox with small size' }}
        />
      </div>

 

 
    
)
  }

}
export default App;
