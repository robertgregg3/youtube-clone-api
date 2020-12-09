import React from 'react';
import { SearchBar, VideoDetails, VideoList } from './components';
import youtube from './api/youtube';
import './components/myStyles.css';
import './components/myStyles.css';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  }

  componentDidMount() {
    this.handleSubmit('Funny Dog Videos') 
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  }

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', { 
      params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyBHMLsxYDrw5AZxT6twA9K9xrEo9IsapQ8', 
        q: searchTerm, 
      }
    });

  this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });

  }
    render () {
      const { selectedVideo, videos } = this.state;
      return(
        <div className="youtube-container">
          <div className="youtube-searchbar">
            <SearchBar onFormSubmit={this.handleSubmit} />
          </div>
          <div className="youtube-video-details">
            <VideoDetails video={selectedVideo} />
          </div>
          <div className="youtube-video-items">
            <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
          </div>
        </div>
      )
    }
}

export default App;