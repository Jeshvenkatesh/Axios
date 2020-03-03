import React from 'react';


const VideoData = (props)=>{
    console.log(props)

    return(
        <div className="videocard">
        <img className="imgWrapper" src={props.videoThumb}></img>
        <h4>{props.videoTitle}</h4>
      </div>
    )
}

export default VideoData;