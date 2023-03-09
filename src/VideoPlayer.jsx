import React, { useState } from 'react';

function VideoPlayer(props) {
    const [playing, setPlaying] = useState(false);

    function handlePlay() {
        setPlaying(true);
    }

    function handlePause() {
        setPlaying(false);
    }

    return (
        <div className='videoPlayer'>
            {<video src={props.playing ? "./astley.mp4" : ""} style={{
                display: props.playing ? "block" : "none"
            }} controls={true} autoPlay={props.playing ? "true" : "false"} />}
        </div>
    );
}

export default VideoPlayer;