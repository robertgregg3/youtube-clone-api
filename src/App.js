import React, { useState } from 'react';
import { SearchBar, VideoDetails, VideoList } from './components';
import youtube from './api/youtube';
import './components/myStyles.css';
import './components/myStyles.css';

const App = () => {
  const [ videos, setVideos ] = useState([]);
  const [ selectedVideo, setSelectedVideo ] = useState(null);

  const handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', { 
      params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyBHMLsxYDrw5AZxT6twA9K9xrEo9IsapQ8', 
        q: searchTerm, 
      }
    });

    setVideos(response.data.items)
    setSelectedVideo(response.data.items[0]);

  }

  return (
    <div className="youtube-container">
      <div className="youtube-searchbar">
        <SearchBar onFormSubmit={handleSubmit} />
      </div>
      <div className="youtube-video-details">
        <VideoDetails video={selectedVideo} />
      </div>
      <div className="youtube-video-items">
        <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
      </div>
    </div>
  )
}

export default App;