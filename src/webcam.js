/* eslint-disable react/prop-types */
import React from 'react';

const WebcamBoxComponent = ({ webcam }) => {
    return (
        <div className="webcam" key={webcam.webcamId}>
            <img src={webcam.images.current.preview} alt=""/>
            <div className="webcamsInfo">{webcam.title}<span className="views"> Views: {webcam.viewCount}</span></div>
        </div>
    );
};

export default WebcamBoxComponent;
