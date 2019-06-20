import React from 'react';
import './VideoItem.css';

const VideoItem=({OnSelectedVideo,video})=>
{
return(
    <div className='item video-item' onClick={()=>{OnSelectedVideo(video)}}>
      <img alt={video.snippet.title} className='ui image' src={video.snippet.thumbnails.high.url}/>
      <div className='content'>
        <div className='header'>  {video.snippet.title}</div>
      </div>
   </div>
)
}
export default VideoItem;