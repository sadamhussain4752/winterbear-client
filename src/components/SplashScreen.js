import React from "react";
import logoImage from "../../src/constant/images/Winterbear-Favicon-Purple.png";
import splashVideo from "../../src/constant/video/OUTROW.mp4"; // Adjust the path as needed

const SplashScreen = () => {
  return (
    <div className="splash-screen fade-in">
      <div className="text-center">
        <div className="video-container">
          <video autoPlay muted loop className="splash-video">
            <source src={splashVideo} type="video/mp4" />
          </video>
        </div>
     
      </div>
    </div>
  );
};

export default SplashScreen;
