import React from 'react';
import VideoItem from '../VideoItem/VideoItem';
import "../../../src/index.css";

const VideoResults = (props) => {
   const renderedList=props.videos.map((video, key) => {
    return <VideoItem key={video.id.videoId} 
    onVideoSelect={props.onVideoSelect} 
    video={video} />  
  })
    return(
        <div className="list-group"> 
         {renderedList}
        </div>
    );
};
 
export default VideoResults;