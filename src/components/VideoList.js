import React from 'react';
import VideoItem from './VideoItem'
const Videolist=({videos,OnSelectedVideo})=>{
   const renderedList= videos.map(video=>{
        return(
            <VideoItem key={video.id.videoId}OnSelectedVideo={OnSelectedVideo} video={video}/>
        )
    })
    return(
        <div className="ui relaxed divided list">{renderedList}</div>
    )
}
export default Videolist;