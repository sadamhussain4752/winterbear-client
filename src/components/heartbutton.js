import React, { useState } from 'react';

const HeartButton = ({ isActives }) => {
    const [isActive, setIsActive] = useState(isActives !==undefined ? isActives : false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <button className="heart-btn" id="heartbtn" onClick={handleClick}>
            <i className={`fa-heart ${isActive ? 'fa-solid active' : 'fa-regular'}`}></i>
        </button>
    );
};

export default HeartButton;
