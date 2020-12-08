import React from 'react';
import { Grid } from '@material-ui/core';
import { SearchBar, VideoDetails, VideoList } from './components';
import youtube from './api/youtube';
import './components/myStyles.css';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  }

  componentDidMount() {
    this.handleSubmit('Funny Pet Videos') 
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  }

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', { 
      params: {
        part: 'snippet',
        maxResults: 4,
        key: 'AIzaSyBHMLsxYDrw5AZxT6twA9K9xrEo9IsapQ8', 
        q: searchTerm, 
      }
    });

  this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });

  }
    render () {
      const { selectedVideo, videos } = this.state;
      return(
        <div className={`${test1div}`} style={{ padding: '2rem 6rem' }}>
          <Grid justify="center" container spacing={10}>
            <Grid item xs={12}>
              <Grid container spacing={10}>
                <Grid item xs={12}>
                  <SearchBar onFormSubmit={this.handleSubmit} />
                </Grid>
                <Grid item xs={8}>
                  <VideoDetails video={selectedVideo} />
                </Grid>
                <Grid item xs={4}>
                  <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      )
    }
}

export default App;