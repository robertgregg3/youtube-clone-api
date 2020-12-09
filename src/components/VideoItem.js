import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
    return(
        <div className="video-item" onClick={() => onVideoSelect(video)}  >
            <img alt="thumbnails" src={video.snippet.thumbnails.medium.url} />
            <h3>{video.snippet.title}</h3>
        </div>
    )
}


export default VideoItem;