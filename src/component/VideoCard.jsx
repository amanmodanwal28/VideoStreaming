import React, { useState } from 'react';
import '../css/VideoCard.css';

const VideoCard = ({ title, channel, views, timestamp, thumbnail, videoUrl }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoClick = () => {
    setIsVideoPlaying(true);
  };

  return (<>
    <div className="video-card">
      {!isVideoPlaying ? (
        <img
          src={thumbnail}
          alt={title}
          className="thumbnail"
          onClick={handleVideoClick}
          style={{ cursor: 'pointer' }}
        />
      ) : (
        <iframe
          width="100%"
          height="200"
          src={videoUrl}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
      <div className="video-info">
        <h4>{title}</h4>
        <p>{channel}</p>
        <p>{views} • {timestamp}</p>
      </div>
    </div></>
  );
};

export default VideoCard;
