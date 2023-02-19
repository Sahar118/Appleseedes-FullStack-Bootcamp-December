import React, { useRef } from 'react';

const ReactVideoPlayer = () => {

    const videoRef = useRef(null);

    const handlePause = () => {
        videoRef.current.pause();
    };
    const handleResume = () => {
        videoRef.current.play();
    }

    return (
        <div>
            <video
                ref={videoRef}
                width="70%"
                height="70%"
                controls
            >
                <source ref={videoRef} src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
            </video>
            <button onClick={handlePause}>Pause</button>
            <button onClick={handleResume}>PLAY</button>
        </div>
    )
}

export default ReactVideoPlayer;
