import React from 'react';

import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
    const listOfVideos = videos.map((video, id) => <VideoItem onVideoSelect={onVideoSelect} key={id} video={video} />)

    return (listOfVideos)
}

export default VideoList;