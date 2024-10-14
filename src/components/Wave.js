import React from 'react';
import { Popover } from 'antd';

const Wave = ({ src, description,title }) => {
    const popoverContentStyle = {
        width: '500px', // Set the width of the content
        textAlign: 'center', // Center align text
    };

    return (
        <div className="wave">
            <Popover content={<div style={popoverContentStyle}> <div>
            <img src={src} alt="icon" className="img-fluid" /> <p> {description} </p> 
                
                </div> </div>} title={title} trigger="hover">
                <img src={src} alt="icon" className="wave-img" />
            </Popover>
        </div>
    );
};

export default Wave;
