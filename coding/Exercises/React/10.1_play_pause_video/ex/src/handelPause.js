import { useRef } from 'react';

const ReactVideo = () => {
    const videoRef = useRef(null);

    const handlePause = () => {
        videoRef.current.pause();
    };
    const handleResume = () => {
        videoRef.current.resume();
    }
    return (
        <div>
            <video ref={videoRef} src="./videos/bloons.mp4" controls />
            <button onClick={handlePause}>Pause</button>
            <button onClick={handleResume}>Resume</button>
        </div>
    );
}

export default ReactVideo;