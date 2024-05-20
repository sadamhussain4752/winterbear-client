import React, { useState } from 'react';

const HeartButton = () => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <button className="heart-btn" id="hertbtn" onClick={handleClick}>
            <i className={`fa-heart ${isActive ? 'fa-solid active' : 'fa-regular'}`}></i>
        </button>
    );
};

export default HeartButton;
