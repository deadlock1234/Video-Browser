import React from 'react';



const VideoDetail=({video})=>{
    if(!video){
        return <div>Loading...</div>
    }
    const  videoSrc=`https://www.youtube.com/embed/${video.id.videoId}`;
    return (
       <div className='ui segment'>
           <div className='ui embed'>
                <iframe title='video palyer'  src={videoSrc}/>
               </div>

        <div><h4>{video.snippet.title}</h4></div>
        <p>{video.snippet.description}</p>

       </div>

    )
}
export default VideoDetail